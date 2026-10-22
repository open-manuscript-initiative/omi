---
id: source-attribution-model
title: OMI-SPEC-225 — Forrás- és eredetkapcsolati modell
sidebar_label: Forrás- és eredetkapcsolati modell
---

# OMI-SPEC-225 — Forrás- és eredetkapcsolati modell

**Állapot:** Tervezet  
**Verzió:** 0.2.0
**Angol normatív szöveg:** [Source and Derivation Model](https://github.com/open-manuscript-initiative/omi/blob/main/docs/specifications/source-attribution-model.md)

## Cél és fogalmak

A modell géppel feldolgozható kapcsolatot ad egy OMI-objektum és a tartalmának forrását azonosító bibliográfiai rekord között. A kapcsolat opcionálisan megadja a forráson belüli helyet is, például oldalt, fóliót vagy szakaszt.

A bibliográfiai rekord a művet írja le; a forráskapcsolat a kéziratobjektum eredetét rögzíti; az idézési előfordulás a szerző szándékos hivatkozását jelenti; az importproveniencia pedig a technikai folyamat adatait tárolja. Ezeket külön kell tartani. A forráskapcsolat nem hoz létre automatikusan látható idézetet, és nem igazolja a szerzőséget, licencet vagy felhasználási engedélyt.

## Kapcsolati objektum

~~~json
{
  "id": "srcattr_01JXYZ",
  "sourceObjectId": "block_01JABC",
  "targetBibliographicRecordId": "bib_01JDEF",
  "predicate": "prov:wasDerivedFrom",
  "role": "import-source",
  "locator": { "type": "page-range", "value": "12–13" },
  "assertionStatus": "author-confirmed"
}
~~~

A kapcsolat a származtatott objektumtól a forrást leíró rekordhoz vezet. Kötelező az egyedi id, a sourceObjectId, a targetBibliographicRecordId, a prov:wasDerivedFrom predikátum és az assertionStatus. A szerep és a lokátor opcionális.

Az állítás státusza machine-inferred (gépi javaslat), author-declared (szerzői nyilatkozat) vagy author-confirmed (ember által ellenőrzött). A gépi javaslatot emberi megerősítés nélkül nem szabad megerősítetté átminősíteni.

## Adatvédelem és validálás

A technikai importadatok külön maradnak. Helyi fájlútvonal, ideiglenes URL, hozzáférési token vagy privát lektorálási adat nem kerülhet a nyilvános forráskapcsolatba. A más programban korábban létrehozott saját műről tett nyilatkozat nem független szerzőségi igazolás, és nem igényel nyilvános hivatkozást helyi fájlra.

Ellenőrizni kell a forrásobjektum és a bibliográfiai rekord feloldhatóságát, az azonosítók egyediségét, valamint a predikátum, státusz és lokátor helyességét. A feloldatlan kapcsolat nem dobható el csendben.

Az OMI-SPEC-320@0.3.0 a kapcsolatokat a kötelező sourceAttributions tömbben szerializálja.

## Saját mű importja és szabad szerkesztése

Az import önmagában nem hozhat létre bibliográfiai forrásállítást vagy látható hivatkozást. A szerző saját műként jelölt importját forrásfelirat nélkül is engedélyezni kell. A forráskapcsolat hiánya nem igazol szerzőséget, tulajdonjogot vagy felhasználási engedélyt.

A forrásmetaadat nem akadályozhat szerkesztést, átrendezést vagy törlést. Egy forráskapcsolattal rendelkező objektum törlésekor a kapcsolatot ugyanabban a tranzakcióban törölni vagy feloldani kell.

A Studio DOCX/ODT/PDF importnál a kifejezett sajátmű-választást a dokumentum `https://openmanuscript.org/extensions/manuscript-import-origin/1` kiterjesztésében őrzi: `version: 1`, `sourceFormat` (`docx`, `odt`, `pdf`), `importedAt` (UTC), `assertion: author-declared:self-authored-outside-omi`. Nem tartalmaz fájlnevet, útvonalat, URL-t, account- vagy tartalomazonosítót. Nincs blokkhoz vagy címsorhoz horgonyozva: minden dokumentumrész szabadon szerkeszthető, cserélhető, mozgatható és törölhető. Történeti önnyilatkozat, nem a későbbi módosítások szerzőségének igazolása. A munkafájl és a core-snapshot megőrzi; a nyilvános publikáció és anonim review-projekció kihagyja. Ehhez nem szükséges új OMI-fájlformátum-verzió.
