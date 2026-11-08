import assert from 'node:assert/strict';
import {test} from 'node:test';
import {parseDirectorySnapshot, DIRECTORY_REFRESH_MS} from '../src/utils/serverDirectory.ts';

const now=Date.parse('2026-11-08T12:00:00Z');
const entry=(id,age,status='online')=>({id,name:id,origin:`https://${id}.example.org`,status,lastSeenAt:new Date(now-age).toISOString()});
const snapshot=servers=>({generatedAt:new Date(now).toISOString(),servers});

test('daily list keeps recent HTTPS servers and removes expired or offline entries',()=>{
  const parsed=parseDirectorySnapshot(snapshot([
    entry('daily',24*3600_000),entry('boundary',48*3600_000),entry('expired',48*3600_000+1),
    entry('offline',0,'offline'),{...entry('never',0),lastSeenAt:null},entry('future',-120_000),
  ]),now);
  assert.deepEqual(parsed.servers.map(e=>e.id),['daily','boundary']);
  assert.equal(parsed.generatedAt,new Date(now).toISOString());
});

test('expired snapshots and unsafe links are never displayed as available servers',()=>{
  assert.throws(()=>parseDirectorySnapshot(snapshot([]),now+DIRECTORY_REFRESH_MS));
  assert.throws(()=>parseDirectorySnapshot({servers:[]},now));
  for(const origin of ['javascript:alert(1)','http://example.org','https://name:password@example.org','https://example.org/path']) {
    assert.throws(()=>parseDirectorySnapshot(snapshot([{...entry('unsafe',0),origin}]),now));
  }
  assert.throws(()=>parseDirectorySnapshot({generatedAt:new Date(now+120_000).toISOString(),servers:[]},now));
});
