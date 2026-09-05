---
id: word-like-manuscript-editing
title: Úpravy rukopisů ve stylu aplikace Word
sidebar_label: Úpravy rukopisů ve stylu aplikace Word
sidebar_position: 5
description: Úpravy odstavců v celém rukopisu, výběr textu, zpracování vstupů z mobilních zařízení a strukturální invarianty v programu „Open Manuscript Studio“.
keywords:
  - Open Manuscript Studio
  - manuscript editing
  - paragraph merge
  - paragraph split
  - selection
  - Ctrl+A
  - mobile editing
  - OMI structure
---

# Úpravy rukopisů ve stylu aplikace Word

Open Manuscript Studio směřuje k modelu interakce, jaký se očekává od běžného textového editoru, přičemž si zachovává explicitní strukturu dokumentu typu „OMI“. Hlavní pravidlo je jednoduché: **uživatel upravuje jeden souvislý rukopis; OMI hranice sekcí a bloků se nesmí stát umělými překážkami při úpravách**.

To neznamená, že by se rukopis zredukoval na nestrukturovaný formát RTF. Editační operace se převádějí na explicitní strukturální změny v systému OMI, takže sémantické sekce, bloky, poznámky, citace, křížové odkazy, historie verzí a stabilní identifikátory zůstávají i po provedení operace dostupné.

## Pořadí úprav v celém rukopise

Studio nyní zachovává jednotné standardní pořadí úprav a čtení napříč bloky rukopisu nejvyšší úrovně. Hranice sekcí zůstávají smysluplnou strukturou dokumentu, ale běžné úpravy odstavců je mohou překračovat.

Vrstva sdíleného pořadí úprav je využívána strukturálními příkazy, místo aby se spoléhalo na DOM nebo na jednu lokální instanci editoru Tiptap jako na kanonický model rukopisu. Prázdné sekce tak nevytvářejí umělé přerušení, zatímco sémantické objekty, jako jsou obrázky, tabulky, nadpisy a další bloky mimo odstavce, zůstávají explicitními hranicemi.

## Rozdělení a sloučení odstavců

U bloků odstavců jsou standardní klávesy pro úpravy přiřazeny k strukturálním operacím programu „OMI“:

- **Enter** rozdělí aktuální odstavec na dva OMI odstavcové bloky v místě kurzoru;
- Stisknutí klávesy **Backspace** na začátku odstavce způsobí jeho sloučení s bezprostředně předcházejícím odstavcem, pokud je to z hlediska struktury přípustné;
- Použití příkazu **Delete** na konci odstavce sloučí následující odstavec s aktuálním, pokud to strukturálně dává smysl;
- sloučení odstavců může překračovat hranice sekcí typu „OMI“, aniž by došlo k odstranění samotného objektu sekce;
- `Shift+Enter` zůstává spíše interním tvrdým koncem řádku než strukturálním rozdělením.

Během operace zůstává zachován bohatý obsah systému Tiptap. Poznámky, citace, skupiny citací, zdroje křížových odkazů a ukotvené objekty jsou podle potřeby přiřazeny k zachovanému nebo nově vytvořenému bloku. Strukturální úpravy jsou rovněž zaznamenávány prostřednictvím stávajícího mechanismu verzí a kontrolních bodů.

## Fyzické klávesnice a mobilní IME

Stolní klávesnice a virtuální klávesnice mobilních zařízení ne vždy generují stejné události prohlížeče. Metody zadávání v systémech Android a iOS obvykle vyjadřují operace související s hranicemi odstavců pomocí události „`beforeinput`“ namísto spolehlivých událostí „`keydown`“.

Studio proto obě interakční cesty směruje přes stejné operace úpravy ohraničení pomocí klávesy „OMI“. Mobilní cesta rozpoznává operace jako „`deleteContentBackward`“, „`deleteContentForward`“ a „`insertParagraph`“, zatímco desktopová cesta zpracovává klávesy Backspace, Delete a Enter. Díky tomu zůstává model dokumentu identický napříč webovými, desktopovými, Androidovými a iOS/iPadOS klienty.

## Výběr v rámci celého rukopisu

Výběr již není považován pouze za lokální vlastnost jednoho bloku Tiptap. Studio disponuje modelem rozsahu na úrovni rukopisu, jehož koncové body jsou reprezentovány identifikátorem bloku „OMI“ doplněným o textový posun.

Díky tomu může aplikace přiřadit nativní výběry myší nebo dotykem zpět do pořadí v rukopisu, pokud se tyto výběry rozprostírají přes více bloků nebo více sekcí. Stejný model je kompatibilní se stávající vrstvou schránky rukopisu, která již rozpoznává fragmenty přesahující bloky i sekce.

### Ctrl+A / Cmd+A

Klávesová zkratka **Ctrl+A** ve Windows/Linuxu a **Cmd+A** v systému macOS vybere celý rozsah textového rukopisu od prvního textového bloku OMI až po poslední, namísto toho, aby vybrala pouze aktuálně aktivní instanci editoru.

U rozsáhlých rukopisů lze využít odložené načítání/načítání mimo obrazovku v editoru, aniž by došlo ke zkrácení sémantického výběru. DOM může zobrazovat pouze aktuálně vykreslenou část, zatímco rozsah výběru vOMIu stále představuje celý rukopis.

## Akce pro výběr na mobilních zařízeních

Na dotykových zařízeních Studio potlačuje nativní akční menu WebView, pokud je aktivní výběr textu ve Studiu, takže se uživatelům zobrazuje panel nástrojů pro výběr ve Studiu namísto dvou konkurenčních akčních menu. Funkce Kopírovat a Vyjmout stále zapisují do schránky operačního systému, což umožňuje vkládání obsahu do jiných aplikací.

## Stavební bezpečnost

Interakce podobná programu Word neumožňuje, aby sémantické objekty beze stopy zmizely. Operace klávesy Backspace nebo Delete může sloučit kompatibilní odstavce, nesmí však přeskočit ani implicitně zničit obrázek, tabulku, nadpis, citát ani jiný významný objekt typu „OMI“. Operace, které mění typ sémantického bloku, vyžadují explicitní strukturální transformaci.

Toto oddělení je důležité pro vědecké pracovní postupy: úpravy zůstávají známé, zatímco kanonický dokument je i nadále vhodný pro ověřování, výměnu v rámci publikačního systému, uchovávání a deterministický export.

## Související rozsáhlejší práce

Součástí stejné vývojové linie je podpora práce s velkými soubory (DOCX), sémantické indexy, generované obsahy, škálovatelná úprava poznámek a stále strukturovanější import z formátu PDF. Rekonstrukce PDF nyní při detekci složitých rozložení poznámek pod čarou využívá vizuální geometrii bboxů, namísto toho, aby se spoléhala pouze na logické seskupování řádků v Poppleru. Nativní import z Androidu PDF je směrován do Studio API namísto původního balíčku WebView.

Viz také:

- [Long-form Authoring](./studio-long-form-authoring.md)
- [Cross-platform Studio](./cross-platform-studio.md)
- [OMI Cloud and Federated Infrastructure](./omi-cloud-federated-infrastructure.md)

## Stav

Funkce pořadí úprav v rámci celého rukopisu, chování odstavců v průřezu, zpracování zadávání hranic na mobilních zařízeních, výběr v rámci celého rukopisu a chování klávesových zkratek Ctrl+A/Cmd+A pro celý dokument jsou v aktuální vývojové verzi Studio implementovány k září 2026. Stejně jako u ostatních funkcí v beta verzi pokračují regresní testy napříč prohlížeči, stolními počítači, platformami Android a iOS/iPadOS.