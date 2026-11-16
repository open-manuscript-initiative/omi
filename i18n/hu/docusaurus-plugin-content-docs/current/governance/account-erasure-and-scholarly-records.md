---
title: Fióktörlés és tudományos közreműködések
sidebar_label: Fióktörlés és tudományos közreműködések
---

# A fióktörlés és a közös tudományos dokumentumok kezelése

**Javasolt ÁSZF- és adatvédelmi rendelkezés – az adott szerver adatkezelőjének jogi és üzemeltetési jóváhagyása szükséges.** A felhasználói fiók törlése nem azonos a közösen létrehozott tudományos dokumentum összes példányának törlésével. Minden önálló Stúdió-szervernek azonosítania kell a tényleges adatkezelőt, az adatkezelési célokat, jogalapokat és megőrzési szabályokat.

## 1. Az adatkezelési célok és jogalapok elkülönítése

| Adatkezelés célja | Lehetséges jogalap, az adatkezelő egyedi értékelésével | Fióktörléskor |
| --- | --- | --- |
| Fiók, jelszó-hitelesítés, profil, munkamenetek | GDPR 6. cikk (1) b), ha a szolgáltatáshoz szükséges, vagy más megfelelően dokumentált jogalap | Törlés az aktív fiók- és identitásrendszerből; a hozzáférés megszűnik |
| Csak a fiókhoz tartozó magándokumentumok, személyes hivatkozások és modulbeállítások | A szolgáltatáshoz kapcsolódó megfelelő jogalap, a szükségesség vizsgálatával | Aktív szerveres rekordok törlése; előtte export lehetősége |
| Közös kéziratok, verzióelőzmények, bírálatok, szerkesztői döntések, tudományos eredetkövetés | GDPR 6. cikk (1) f) **csak dokumentált szükségességi vizsgálat és érdekmérlegelés alapján**, vagy más megfelelő jogalap | Kizárólag a szükséges adatok maradhatnak meg; a fiókkapcsolatok leválasztása és azonosítók minimalizálása |
| Jogszabály alapján kötelező nyilvántartások | GDPR 6. cikk (1) c), ténylegesen alkalmazandó jogi kötelezettség esetén | Csak a kötelező adatok és előírt időtartam megőrzése |
| Kutatási cél vagy közérdekű archiválás | A megfelelő 6. cikk szerinti jogalap és garanciák mellett a 17. cikk (3) d) kivétel egyedileg alkalmazható, ha a törlés a megfelelő kutatást lehetetlenné tenné vagy súlyosan veszélyeztetné | Egyedi vizsgálat és indokolás; nincs általános megőrzési felmentés |

A **tudományos integritás önmagában nem írja felül a törléshez való jogot**. A név helyett alkalmazott álnév, véletlenszerű jelölés, stabil belső azonosító vagy „Törölt szerző” felirat nem teszi automatikusan anonim adattá a kéziratot. A korábbi szerzői nevek, ORCID-azonosítók, bírálati megjegyzések és verziópillanatképek személyes adatként megmaradhatnak.

## 2. Kötelező tájékoztatás a fióktörlés előtt

A végleges törlés jóváhagyása előtt a Stúdió ismerteti:

1. Mely fiók-, profil-, bejelentkezési, integrációs és személyes munkarekordok törlődnek.
2. Hogy a közös kéziratok, verziók, bírálatok és megjegyzések meghatározott feltételekkel megmaradhatnak, és az álnevesítés ellenére azonosító tartalmat is őrizhetnek.
3. Hogy az OJS/OMP-be elküldött példányokat, a külső felhőadatokat, a helyi eszközfájlokat és a biztonsági mentéseket a fióktörlés nem feltétlenül törli.
4. Hogy a megtartani kívánt munkákat előzetesen exportálni kell, a fiókhoz való hozzáférés pedig megszűnik.
5. Hogy a megmaradó személyes adatokról külön adatvédelmi kérelmet lehet benyújtani.

A törlés előtt a felhasználó lementheti a részleges fiókadatok JSON-másolatát. Később egy **új** fiókba a támogatott személyes profilmezők importálhatók belőle. Ez nem támasztja fel a törölt fiókot, és nem állítja vissza annak korábbi azonosítóját, ORCID-hitelesítését, munkameneteit, jelszavait, intézményi vagy szerkesztői jogosultságait, szerzőtársi hozzáféréseit, tulajdonjogát vagy kéziratait. A kéziratokat külön kell exportálni, a közös munkához adott esetben új meghívás szükséges. A JSON-másolat személyes adatokat tartalmaz, ezért bizalmasan kell tárolni.

A végleges műveletet csak a tájékoztató kifejezett tudomásulvétele után lehessen végrehajtani. **Ez nem általános adatkezelési hozzájárulás, és nem jelenti a GDPR szerinti jogokról való lemondást.**

## 3. Tudományos eredetkövetés és adatminimalizálás

A megőrzendő közös szakmai előzményekhez a Stúdió fenntarthat egy letiltott, álnevesített belső résztvevői rekordot. Minden megmaradó azonosító és kéziratelem szükségességét külön kell megvizsgálni; ahol lehetséges, el kell távolítani a felesleges profilmásolatokat, neveket, IP-címeket és hitelesítő kapcsolatokat. Az azonosításra alkalmas belső UUID és kézirattartalom GDPR szerint továbbra is személyes adat lehet.

A közzétett szerzői attribúciókat, szakmai bírálatokat és a szerzőtársak közös munkáját nem szabad automatikusan megsemmisíteni, ha ehhez megfelelő, dokumentált jogalap és szükségesség áll fenn. Ugyanakkor a közös szerzőség nem indokolja a felesleges profiladatok, saját magánvázlatok és elavult naplóbejegyzések megőrzését.

Jogos érdeken alapuló adatkezelésnél a GDPR 21. cikke szerinti tiltakozást is el kell bírálni. Kutatási kivétel esetén dokumentálni kell a 89. cikk (1) bekezdése szerinti garanciákat és azt, hogy a konkrét kutatási cél megvalósítását a törlés miért lehetetlenítené el vagy veszélyeztetné súlyosan.

## 4. Biztonsági mentések és külső rendszerek

A fióktörlés nem minden esetben jelenti az izolált szervermentések azonnali fizikai törlését. Az üzemeltető közzétett megőrzési ideje, így a korábban vállalt 30 napos maximum, ahol alkalmazandó, továbbra is kötelező. Visszaállítás után a törléseket és korlátozásokat az éles működés előtt újra érvényesíteni kell. Az OJS/OMP-be vagy külső felhőbe került példányok esetében az illetékes adatkezelő eljárása irányadó.

## 5. Az érintett jogai

A **fiók megszüntetése** nem azonos a teljes körű **GDPR-törlési kérelemmel**. Az adatkezelőnek bejelentkezés nélkül is elérhető megkeresési lehetőséget kell biztosítania, a megmaradó adatokról egyedi döntést kell hoznia, főszabály szerint egy naptári hónapon belül válaszolnia kell, és az esetleges részleges elutasítást indokolnia kell.

Jogforrások: [GDPR 4. cikk (5), 5–6., 12., 17., 21., 25. és 89. cikk](https://eur-lex.europa.eu/eli/reg/2016/679/oj); [EDPB jogos érdek iránymutatás](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-12024-processing-personal-data-based-article-61f_en).

A rendelkezések alkalmazása az érintett adatkezelő jogi és üzemeltetési felülvizsgálatát igényli.
