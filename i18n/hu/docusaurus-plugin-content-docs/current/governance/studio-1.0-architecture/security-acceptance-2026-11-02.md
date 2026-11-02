---
title: Studio outbound védelem és elfogadási checkpoint — 2026-11-02
sidebar_label: Biztonsági elfogadási checkpoint
---

# Outbound védelem és elfogadás — 2026-11-02

Ez a checkpoint az öt Studio 1.0 baseline-dokumentumot a Studio main `7c4b2826e7b6a2d718f45fced917e9cfab4d42a9` implementációjához igazítja. A merge-elt kódot, a kompatibilitást és a bizonyítékok felelőseit rögzíti. Nem emel Stable állapotba Draft specifikációt, nem állít teljes körű SSRF-védelmet, nem enged el release gate-et, és nem korlátozza a kézirat szerkesztését.

## Ellenőrzött implementáció és függőségi irány

| Határ | Tényleges szerződés / felelős | Következmény |
|---|---|---|
| API / Plesk | A közös, nem root API-identitás megmarad. Az opcionális `omi-studio-api-egress-shared-uid.conf` csak az API systemd-cgroupjára alkalmaz IP-szűrést. | Más Plesk-poolokra nem terjed ki. UID-szintű tűzfalhoz külön UID és külön jóváhagyás szükséges. Ez a topológia a közös UID fájl- és folyamatjogosultságait nem szigeteli el. |
| Host IP-szűrés | Bizonyos privát, metadata és fenntartott tartományok tiltottak; localhost és nyilvános internet elérhető. | Nem külső célpont-allowlist és nem teljes SSRF-védelem. A nem megbízható HTTP nem használhatja a DB/proxy célú localhost-kivételt. |
| Alkalmazási HTTP | A `connectionPinnedHttp.ts` a tényleges socket feloldásánál ellenőrzi az összes A/AAAA választ, bármely nem nyilvános válasz esetén tilt, megőrzi a TLS-host/SNI ellenőrzést és friss kapcsolatot használ. | A WebDAV, PKP, konfigurált publikálás/AI, OIDC/ORCID/JWKS és Office útvonalak ezt használják. A külön HTTP/OAuth helperek leltára önálló feladat. Ez nem manuscript-hozzáférési grant. |
| Identity metadata | Az `oidcMetadataHttp.ts` issuerhez köti a discoveryt, ellenőrzi a végpontokat, rögzíti a token/UserInfo/JWKS kapcsolatot és korlátozza a válaszméretet. | Production környezetben nyilvános HTTPS és átirányítás nélküli kapcsolat szükséges. Privát intézményi IdP külön tervezett, szűk policy-t igényel. A globális szabályt nem lazítjuk; a transport nem igazol tudományos identitást. |
| Office callback | A `callbackUrl.ts` a konfigurált HTTPS originhez, annak tényleges portjához köti a letöltést; a transport tiltja a privát célt és az átirányítást. | A konfigurációval megegyező egyéni HTTPS-port megengedett. Más port/origin tiltott. Helyi Docker/loopback letöltési URL nem támogatott. Session/key/capability, CAS és DOCX-korlátok megmaradnak. |
| PDF-végrehajtás | Külön worker-identitás, AF_UNIX ACL, privát hálózat/mount és véges erőforráskeret. A `pdfSubprocess.ts` timeoutkor és a szülő kilépésekor POSIX-folyamatcsoportot állít le. | A privát `/tmp` módja `1777`; a `TasksMax=512` a szálakat is számolja. Kilépő process-session és a Windows direct-child fallback külön értékelendő. A PDF-sandbox és a HTTP-védelem külön kontroll. |

Az OMI-modell, séma, konténergeneráció, identity/review authority és az OJS/OMP protokoll nem változott. A privát címet vagy átirányítást használó Office/OIDC telepítésekhez rollout előtti kompatibilitási ellenőrzés szükséges. A rollback is biztonságos, összeillő verziópárt használjon; unrestricted fetch és nem izolált PDF fallback nem állítható vissza.

## Az issue állapota és a release-bizonyíték külön nyilvántartás

2026-11-02-án ellenőrzött GitHub-állapot: [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765) 2026-11-01 17:02:52 UTC-kor, [#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) 15:35:19 UTC-kor lezárult. Nem jelöljük őket jelenleg nyitottnak, nem nyitjuk automatikusan újra, és a lezárásból nem következtetünk minden teszt teljesülésére.

| Bizonyíték | Ellenőrzött hatókör | Egységesítendő bizonyíték / felelős |
|---|---|---|
| #774 operátori eredmények | [Párhuzamos és azonos tulajdonosú feladatok](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774#issuecomment-6559798888): két külön feladat sikeres, azonos tulajdonos 503/200, `pids.peak=349`, `TasksMax=512`, max esemény 0. [Üresjárati minta](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774#issuecomment-6559820812): csak a worker főfolyamata maradt. Korábbi bejegyzések namespace/fájlrendszer/ACL és render/import megfigyeléseket tartalmaznak. | Az operátor a végleges kontrollált timeout/recovery elfogadást, a telepített SHA-t és környezetet a candidate-receipthez kapcsolja. Normál befejezés nem forced-timeout teszt. Elfogadott eredményt nem dobunk el, képernyőképért nem kérünk zavaró production újratesztet. |
| #765 hostrekord | A [staged policy komment](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765#issuecomment-6560592698) még a dedikált UID-tervet írja; a #822 később közös UID-s topológiát valósít meg. | Az operátor rögzíti a tényleges cgroup-policy-t, az IPv4/IPv6 negatív és pozitív provider-tesztek hivatkozásait. Megmarad a localhost/nyilvános egress kockázata és a további helperek leltára. A #822 előtti komment nem végleges receipt. |
| Forrásregresszió | 22 célzott teszt sikeres: runtime evidence, közös UID/pinning, outbound transport, Office callback és OIDC/JWKS. Szintetikus adatok/mockok és meglévő telepített függőségek szerepeltek. | A CI a candidate lockfile-jaival újrafuttatja. A helyi eredmény nem hosttelepítés, valós IdP/Office-kompatibilitás vagy független conformance bizonyítéka. |
| E02 publikálás | Az `aggregate-rc-evidence.mjs` / `rc-evidence.mjs` reviewed SHA-t, korábbi build/fájlhash-t, workflow-runokat és minden manuális gate-et igényel. `host-egress`, `host-pdf-sandbox`, security review és owner go/no-go megmarad. | A release owner a meglévő receiptet és bizonyítékhivatkozásokat a konkrét candidate-hez kapcsolja. Hiányzó bizonyíték issue-állapottól függetlenül blokkolja az RC-t. Privát bizonyíték hozzáférés-védett HTTPS-hivatkozás lehet; kézirat, fájlnév/útvonal, credential és nyers hostleltár nem kerül Git/CI-be. |

A forrásállapot, GitHub-issue, operátori megfigyelés és kiadási receipt külön, egyértelmű mező legyen. Ez a dokumentum nem talál ki hosteredményt, és szövegmódosítással nem teljesít hiányzó tesztet.

## ADR-pontosítás és függőséghelyes folytatás

- **ADR-012/014/017:** kétszintű outbound kontroll, szűk alkalmazási transport; account, tudományos identitás, review-authorization és credential külön marad. Alternatíva: közös UID-t szűrő tűzfal (itt veszélyes), önmagában IP-szűrés (localhostot enged), későbbi broker. Felülvizsgálat: privát IdP/Office, proxy, új helper vagy más topológia.
- **ADR-016/017:** külön PDF-worker, véges cgroup-limit és process-group cleanup. Felülvizsgálat: kiszökő session, Windows/native promóció, workerpool vagy több host.
- **ADR-019:** issue-lezárás workflow-állapot; az exact-candidate igazolás külön marad. Az E02 workflow-leltára és manuális receiptje változatlan. Felülvizsgálat: új gate vagy evidence-contract.
- **C12/C13:** nyilvános HTTPS/no-redirect és origin-kompatibilitás jellemzése; további transportok leltára, majd negatív és valósprovider-teszttel történő átállításuk. Nem támogatott topológia miatt nem bővítjük a jogokat.
- **D / E02:** előbb a meglévő hostbizonyítékok egységesítése, csak azonosított hiány esetén staging/jóváhagyott karbantartás, végül candidate SHA/artifact összerendelés. Új alrendszer vagy DB-migráció nem szükséges.

Implementációs döntések: [Studio ADR-031](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-031-outbound-security-and-acceptance.md).

## Pontos implementációs források

- [Közös UID és szolgáltatás-policy, #822](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/0ad079914db439cca808f306b6cb67d3a2332b4e)
- [Közös pinned transport](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/3381c87f33c789bd42db1196432b51dbe217fb6e)
- [OIDC-transport átállás](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/df4910066e78054e181b5d1e694c8ecf202a0051)
- [Pontos Office origin](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/f98c6e494266ec58354cb55866eaec10805df9ef)
- [PDF-folyamatcsoport lezárása, #819](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/dfeae517d64d42d6ce06508828d1d7a631009b37)
