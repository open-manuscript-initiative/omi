import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
const json = async path => JSON.parse(await readFile(new URL(path,import.meta.url),'utf8'));
test('independent Draft 360 consumer validates the shared canonical inline project and preserves unknown resources',async()=>{
 const schema=await json('../static/schemas/research-project-0.1.schema.json');
 const source=await json('../static/examples/research-project/0.1.json');
 const ajv=new Ajv2020({strict:true});addFormats(ajv);const validate=ajv.compile(schema);
 const original=JSON.stringify(source);assert.ok(validate(source),JSON.stringify(validate.errors));
 assert.equal(JSON.stringify(source),original);
 assert.deepEqual(JSON.parse(original).resources[1],source.resources[1]);
 assert.equal(validate({...source,format:'org.omi.research-project',version:1}),false);
 assert.equal(validate({...source,updatedAt:'yesterday'}),false);
 for(const path of ['../escape','a/../escape','/absolute','C:/absolute','a\\escape']){
  const r={...source.resources[0],inline:undefined,path,sizeBytes:1,sha256:'0'.repeat(64)};
  assert.equal(validate({...source,resources:[r]}),false,path);
 }
 const r={...source.resources[0],inline:undefined,path:'resources/graph.json',sizeBytes:1,sha256:'0'.repeat(64)};
 assert.ok(validate({...source,resources:[r]}));
 assert.equal(validate({...source,resources:[{...r,inline:{}}]}),false);
});
