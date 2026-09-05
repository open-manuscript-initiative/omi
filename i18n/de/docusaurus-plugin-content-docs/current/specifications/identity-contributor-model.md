---
id: identity-contributor-model
title: OMI-SPEC-150 – Identitäts- und Mitwirkermodell
sidebar_label: Identitäts- und Mitwirkermodell
description: Normatives Modell für Akteure, Namen, Aussagen zur externen Identität, Zugehörigkeiten, Beiträge, Zuordnung sowie die Trennung der wissenschaftlichen Identität von Anwenderkonten.
keywords:
  - Open Manuscript Initiative
  - OMI
  - identity
  - contributors
  - attribution
  - ORCID
  - affiliations
---

# OMI-SPEC-150 – Identitäts- und Mitwirkermodell

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Kennung | `OMI-SPEC-150` |
| Titel | Identitäts- und Mitwirkermodell |
| Version | `0.1.0` |
| Status | Entwurf |
| Dokumenttyp | Normativ |
| Normsprache | Englisch |
| Redakteure | OMI-Betreuer |
| Zuletzt aktualisiert | 06.08.2026 |
| Ersetzt | Keine |
| Ersetzt durch | Keine |
| Abhängig von | `OMI-SPEC-120`, `OMI-SPEC-140` |
| Verwendet von | `OMI-SPEC-160`, `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-220`, `OMI-SPEC-310` |
| Schemata | Keine veröffentlicht |
| Profile | Keine veröffentlicht |
| Umsetzungsstatus | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue-Tracker | Probleme im „Open Manuscript Initiative“-Repository |

## 1. Zusammenfassung

Diese Spezifikation definiert, wie das „Open Manuscript Initiative“ Akteure und deren kontextbezogene Beteiligung an wissenschaftlichen Objekten und Arbeitsabläufen darstellt. Sie bietet ein gemeinsames Modell für Personen, Organisationen, Konsortien, Projekte, Dienste, nicht identifizierte Akteure, Namen, externe Identifikatoren, Zugehörigkeiten, Mitwirkungsrollen, die Reihenfolge der Mitwirkenden, den Status als korrespondierender Mitwirkender sowie die Nennung von Mitwirkenden.

Das Modell unterscheidet zwischen einem Agenten und einem Anwendungskonto, zwischen einem Beitragsgeber und dem Agenten, der den Beitrag leistet, sowie zwischen einer Rolle und einer dauerhaften Eigenschaft dieses Agenten. Außerdem unterscheidet es zwischen einer lokalen Identität unter OMI und Aussagen externer Identitätssysteme wie ORCID oder ROR.

Die Spezifikation unterstützt mehrsprachige und historische Namen, zeitlich begrenzte Zugehörigkeiten, pseudonyme und eingeschränkte Identitäten, Identitätsangaben mit Herkunftsangaben sowie explizite Beitragsbeziehungen zu Manuskripten oder anderen wissenschaftlichen Objekten. Sie definiert jedoch keine Authentifizierungsprotokolle, Berechtigungen für Arbeitsbereiche, Richtlinien zur Offenlegung im Peer-Review-Verfahren oder den vollständigen Revisionsverlauf von Identitätsdatensätzen.

## 2. Status dieses Dokuments

Dieses Dokument ist ein **Entwurf** einer Spezifikation der „Open Manuscript Initiative“.

Das Modell, die Bezeichnungen der Eigenschaften, die Konformitätsklassen und die Verarbeitungsanforderungen können sich vor Version 1.0 in einer Weise ändern, die zu Inkompatibilitäten führt. Implementierungen, die Unterstützung beanspruchen, MÜSSEN die genaue Spezifikationsversion oder den verwendeten unveränderlichen Commit angeben.

Dieser Entwurf aktiviert die für das Identitäts- und Mitwirkermodell reservierte Kennung im Register der „OMI“-Spezifikationen. Diskussionen und Änderungsvorschläge werden im Repository „Open Manuscript Initiative“ erfasst.

## 3. Konformität

### 3.1 Konformitätsklassen

Diese Spezifikation definiert vier Konformitätsklassen:

- **Zuständiger Identitätsersteller:** Erstellt oder exportiert Daten zu Agenten, Identitäten, Zugehörigkeiten oder Beiträgen.
- **Identitätsverbraucher gemäß den Vorgaben:** importiert, speichert, zeigt an, verarbeitet oder bewahrt solche Daten auf.
- **Validator zur Überprüfung der Konformität:** Prüft Daten hinsichtlich der strukturellen und semantischen Anforderungen dieser Spezifikation.
- **Identitätsauflöser:** vergleicht, gleicht ab oder ergänzt Agentenidentitäten oder Angaben zu externen Identifikatoren.

Eine Implementierung KANN mehr als eine Klasse beanspruchen.

### 3.2 Allgemeine Konformität

Eine konforme Implementierung MUSS alle geltenden **MUST**- und **MUST NOT**-Anforderungen für die von ihr deklarierte Klasse erfüllen.

Eine optionale Funktion KANN weggelassen werden. Wird sie implementiert, MUSS die Funktion alle für diese Funktion definierten Anforderungen erfüllen.

Eine Konformitätserklärung SOLLTE folgende Angaben enthalten:

- Name und Version der Implementierung;
- `OMI-SPEC-150` Version;
- angegebene Konformitätsklasse;
- unterstützte Agententypen und Identifikationsschemata;
- unterstützte Einstellungen für Datenschutz und Sichtbarkeit;
- bekannte Einschränkungen;
- Konformitätstest-Version, sofern verfügbar.

### 3.3 Grundlegende Anforderungen

**REQ-IDN-001:** Ein Agent MUSS unabhängig von jedem mit ihm verknüpften Anwendungskonto dargestellt werden.

**REQ-IDN-002:** Ein Beitrag MUSS sich auf einen Akteur und eine Entität des „OMI“ beziehen, an die der Beitrag gerichtet ist; der vollständige Akteur DARF NICHT als eingebetteter Mitwirkender-Datensatz dupliziert werden.

**REQ-IDN-003:** Eine Mitwirkungsrolle MUSS sich auf eine bestimmte Mitwirkung beziehen und DARF NICHT als dauerhaftes Merkmal des Akteurs interpretiert werden.

**REQ-IDN-004:** Ein externer Identifikator MUSS als Assertion dargestellt werden, die ein Identifikationsschema, einen Wert, ein Subjekt, eine Herkunftsangabe und einen Verifizierungsstatus enthält.

**REQ-IDN-005:** Ein Verbraucher DARF zwei Agenten NICHT allein deshalb zusammenführen, weil ihre Namen, E-Mail-Adressen, Zugehörigkeiten oder unbestätigten externen Identifikatoren übereinstimmen.

**REQ-IDN-006:** Ein Produzent MUSS die Unterscheidung zwischen unbekannten, zurückgehaltenen, pseudonymen und ausdrücklich anonymen Identitäten beibehalten.

**REQ-IDN-007:** Vertrauliche Identitäts- und Kontaktdaten DÜRFEN NICHT durch eine öffentliche Serialisierung oder Darstellung offengelegt werden, es sei denn, eine geltende Zugriffsrichtlinie gestattet die Offenlegung.

**REQ-IDN-008:** Die Reihenfolge der Mitwirkenden MUSS unabhängig von ihrer Rolle, ihrer Identität und dem Umfang ihres Beitrags dargestellt werden.

## 4. Geltungsbereich

Diese Spezifikation definiert:

- Agentenidentität und unterstützte Agentenkategorien;
- lokale und externe Bezeichner für Agenten;
- mehrsprachige, strukturierte, unstrukturierte, historische und pseudonyme Namen;
- Identitätsangaben sowie deren Herkunft und Verifizierungsstatus;
- kontextbezogene Zugehörigkeiten;
- Beiträge zu Manuskripten und anderen wissenschaftlichen Objekten;
- Beitragsrollen und optionale Zuordnungen zu kontrollierten Vokabularen;
- Reihenfolge der Mitwirkenden und Kennzeichnung der jeweiligen Mitwirkenden;
- kontextbezogene Attributnamen;
- eingeschränkte Identitäts- und Kontaktdaten;
- Anforderungen hinsichtlich Identitätsabgleich, Abgleich, Zusammenführung und Aufteilung;
- Validierungs- und Aufbewahrungsverhalten.

### 4.1 Nicht im Geltungsbereich

Diese Spezifikation definiert nicht:

- Passwörter, passkeys, OAuth, OpenID Connect, Sitzungsverwaltung oder andere Authentifizierungsmechanismen;
- Lebenszyklus von Anwendungskonten und Kontenwiederherstellung;
- Berechnung der Arbeitsbereichszugehörigkeit, Autorisierung oder Berechtigung;
- Richtlinien zur Anonymität bzw. Offenlegung im Peer-Review-Verfahren;
- Überprüfung der rechtlichen Identität;
- institutionelle Beschäftigungsüberprüfung;
- Ethik der Autorschaft oder Zulassungskriterien;
- ein universelles Vokabular für Beiträge und Rollen;
- Versionsdiagramme, Änderungssätze oder die gesamte Semantik von Audit-Ereignissen;
- Gestaltung der öffentlichen Profilseite.

Die Authentifizierung ist Teil der Plattformsicherheit. Arbeitsbereichsberechtigungen gehören zu `OMI-SPEC-190`. Die Überprüfung der Offenlegung von Identitäten gehört zu `OMI-SPEC-200`. Die Semantik von Revisionen und Änderungen gehört zu `OMI-SPEC-160`.

## 5. Begriffsbestimmungen

Es gilt das Dokument „[OMI Terminology and Definitions](../governance/terminology.md)“.

### 5.1 Identität des Beauftragten

Das Objekt „OMI“, das einen Agenten als unterscheidbare Entität innerhalb eines definierten Identitätsbereichs repräsentiert.

Eine Akteursidentität kann eine Person, eine Organisation, ein Konsortium, ein Projekt, eine Dienstleistung oder einen nicht identifizierten Akteur beschreiben. Sie stellt keine Authentifizierungsdaten dar und impliziert keine rechtliche Überprüfung.

### 5.2 Konto

Ein von der Implementierung verwalteter Datensatz, der zur Authentifizierung, Autorisierung oder Personalisierung des Zugriffs auf Software verwendet wird.

Ein Konto KANN mit einer Akteuridentität verknüpft sein, ist jedoch nicht Teil des wissenschaftlichen Attributionsmodells und DARF NICHT als der Akteur selbst behandelt werden.

### 5.3 Identitätsnachweis

Eine mit einer Herkunftsangabe versehene Aussage, dass ein benannter Bezeichner, Name, eine Zugehörigkeit, eine Kontaktstelle oder eine andere Identitätsangabe auf einen Akteur zutrifft.

### 5.4 Angabe eines externen Identifikators

Eine Identitätsangabe, die einen Akteur mit einem Identifikator verknüpft, der von einem externen System oder einer externen Stelle zugewiesen wurde.

### 5.5 Namensform

Eine Darstellung des Namens eines Akteurs für eine bestimmte Sprache, Schrift, Epoche, einen bestimmten Zweck oder eine bestimmte Quelle.

### 5.6 Beitrag

Eine kontextbezogene Beziehung, die angibt, dass ein Akteur in einer oder mehreren Rollen zu einer definierten Entität „OMI“ beigetragen hat.

### 5.7 Quellenangabe

Die Darstellung eines Beitrags zum Zwecke der Anerkennung, der Verantwortlichkeit, der Zitierung, der Darstellung oder der Herkunft.

### 5.8 Rolle als Mitwirkender

Ein Wert, der die Funktion beschreibt, die ein Akteur in einem Beitragskontext erfüllt.

### 5.9 Zugehörigkeitserklärung

Eine zeitlich begrenzte und mit Herkunftsangaben versehene Aussage, die eine Person mit einer Organisation, einer Organisationseinheit, einem Projekt oder einem vergleichbaren institutionellen Kontext in Verbindung bringt.

### 5.10 Identitätsauflösung

Der Prozess, bei dem festgestellt wird, ob sich Identitätsdatensätze oder Identitätsaussagen auf denselben Akteur, auf verschiedene Akteure oder auf eine ungeklärte Beziehung beziehen.

### 5.11 Geheim gehaltene Identität

Eine Identität, die in einem autorisierten Kontext bekannt ist, dem aktuellen Verbraucher oder Publikum jedoch bewusst nicht zugänglich ist.

### 5.12 Unbekannter Wirkstoff

Ein Akteur, dessen eindeutige Identität nicht bekannt ist, nicht erfasst wurde oder nicht ermittelt werden kann.

Ein nicht identifizierter Akteur ist nicht gleichbedeutend mit einer verschwiegenen Identität.

## 6. Gestaltungsprinzipien

Dieser Abschnitt dient der Information.

- **Kontext vor allgemeinen Annahmen:** Rollen, Zugehörigkeiten, Reihenfolgen und der entsprechende Status sind kontextabhängig.
- **Identität vor der Darstellung:** Ein Agent wird nicht durch eine einzige Zeichenfolge als Anzeigenamen definiert.
- **Aussagen mit Herkunftsangabe:** Importierte oder extern bereitgestellte Identitätsdaten lassen sich weiterhin ihrer Quelle zuordnen.
- **Keine unsichere automatische Zusammenführung:** Mehrdeutigkeiten bleiben erhalten, bis ausreichende Belege eine Abstimmung rechtfertigen.
- **Privacy by Design:** Öffentliche Zuordnungsdaten und eingeschränkte Betriebsdaten werden getrennt gehandhabt.
- **Mehrsprachige Darstellung:** Namen und Bezeichnungen berücksichtigen Sprache, Schrift, Reihenfolge und historische Varianten.
- **Unabhängigkeit der Konten:** Wissenschaftliche Datensätze bleiben zwischen verschiedenen Installationen und Anwendungen übertragbar.
- **Verlustbewusste Interoperabilität:** Bei Importen und Exporten werden ausgelassene, transformierte oder nicht überprüfbare Identitätsinformationen offengelegt.

## 7. Modellübersicht

```text
Application account
    └── may be privately associated with ── Agent identity
                                               ├── Name forms
                                               ├── External identifier assertions
                                               ├── Affiliation assertions
                                               ├── Contact points
                                               └── Contributions
                                                        ├── Target scholarly object
                                                        ├── Contribution roles
                                                        ├── Contributor order
                                                        ├── Corresponding status
                                                        └── Contextual attribution name
```

Die Kontotoezuordnung ist implementierungsspezifisch, sofern nicht durch ein explizites geschütztes Austauschprofil etwas anderes festgelegt ist.

Eine Akteuridentität kann an mehreren Beiträgen beteiligt sein. Ein Beitrag kann mehrere Rollen umfassen, hat jedoch einen Hauptakteur und eine Entität, an die der Beitrag gerichtet ist. Bei Gruppenbeiträgen wird eine Organisation, ein Konsortium, ein Projekt oder ein explizit modellierter kollektiver Akteur verwendet, anstatt ein Array, das als einzelne Person getarnt ist.

## 8. Datenmodell

### 8.1 Identität des Beauftragten

**Zweck:** Darstellung eines Agenten unabhängig von Konten, Rollen und veränderbaren Anzeigenamen.  
**Bezeichner:** Ein stabiler lokaler Bezeichner im Identitätsbereich des übergeordneten OMI.  
**Lebenszyklus:** Dauerhaft; Korrekturen, Zusammenführungen, Aufteilungen, Veralterung und Ersetzungen erfordern eine explizite Herkunftsangabe.

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenfolge | Ja | `1` | Stabile lokale Kennung. |
| `type` | Zeichenfolge | Ja | `1` | Agentenkategorie. |
| `names` | `NameForm[]` | Ja | `1..*` | Bekannte Namensdarstellungen. |
| `identifiers` | `ExternalIdentifierAssertion[]` | Nein | `0..*` | Aussagen zu externen Identifikatoren. |
| `affiliations` | `AffiliationAssertion[]` | Nein | `0..*` | Kontextbezogene Zugehörigkeiten. |
| `contacts` | `ContactPoint[]` | Nein | `0..*` | Kontaktdaten mit Sichtbarkeitsregeln. |
| `status` | Zeichenkette | Nein | `0..1` | Aktive, historische, zusammengeführte, veraltete, nicht identifizierte oder implementierungsabhängige Erweiterung. |
| `replacedBy` | Zeichenkette | Nein | `0..1` | Identität des Agenten, der einen zusammengeführten oder veralteten Datensatz ersetzt. |
| `provenance` | `ProvenanceAssertion[]` | Nein | `0..*` | Angaben zu Herkunft und Verwahrung. |
| `extensions` | Objekt | Nein | `0..1` | Inhalt der Namespace-Erweiterung. |

Die Kernwerte von „`type`“ sind:

- `person`;
- `organization`;
- `consortium`;
- `project`;
- `service`;
- `unidentified`.

Ein Profil KANN engere Agentenarten definieren.

**REQ-IDN-010:** Jede Agentenidentität MUSS mindestens eine Namensform aufweisen, mit Ausnahme eines „`unidentified`“-Agenten, der eine kontrollierte Platzhalterbezeichnung verwenden DARF.

**REQ-IDN-011:** Die „`id`“ MUSS stabil bleiben, wenn sich ein bevorzugter Name, eine Zugehörigkeit, eine Kontaktadresse oder eine externe Kennung ändert.

**REQ-IDN-012:** Eine zusammengeführte oder veraltete Identität MUSS ihren früheren Bezeichner beibehalten und SOLLTE ihren Ersatz über `replacedBy` angeben.

**REQ-IDN-013:** Die Identität einer Person DARF KEINE Angaben zum offiziellen Namen, zum binären Geschlechtsmerkmal, zu Anredeformen, zur E-Mail-Adresse, zur ORCID oder zur Zugehörigkeit erfordern.

### 8.2 Namensform

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenkette | Ja | `1` | Stabile Kennung für diese Namensangabe. |
| `display` | Zeichenfolge | Ja | `1` | Formular vollständig anzeigen. |
| `given` | Zeichenkette | Nein | `0..1` | Vornamenskomponente, sofern vorhanden. |
| `family` | Zeichenfolge | Nein | `0..1` | gegebenenfalls Bestandteil des Nachnamens. |
| `prefix` | Zeichenfolge | Nein | `0..1` | Präfix, wenn es semantisch Teil des Namens ist. |
| `suffix` | Zeichenfolge | Nein | `0..1` | Suffix, wenn es semantisch Teil des Namens ist. |
| `literal` | Zeichenkette | Nein | `0..1` | Unparsierter oder organisationsspezifischer Literalname. |
| `language` | BCP-47-Tag | Nein | `0..1` | Sprache der Namensform. |
| `script` | ISO 15924-Code | Nein | `0..1` | Skript, wenn die Sprache durch das Sprachkennzeichen nicht ausreichend ausgedrückt wird. |
| `usage` | Zeichenfolge | Nein | `0..1` | Bevorzugte Bezeichnung, veröffentlichte Bezeichnung, rechtliche Bezeichnung, frühere Bezeichnung, Pseudonym, Transliteration, Übersetzung oder Erweiterung. |
| `preferred` | boolesch | Nein | `0..1` | Im angegebenen Kontext bevorzugt. |
| `validFrom` | Datum oder Datums- und Zeitangabe | Nein | `0..1` | Beginn der bekannten Gültigkeit. |
| `validUntil` | Datum oder Datum und Uhrzeit | Nein | `0..1` | Ende der bekannten Gültigkeitsdauer. |
| `source` | `ProvenanceAssertion` | Nein | `0..1` | Herkunft der Namensform. |

**REQ-IDN-020:** Eine Namensform MUSS die Form „`display`“ enthalten und DARF NICHT voraussetzen, dass sie sich verlustfrei in die Komponenten „Vorname“ und „Familienname“ zerlegen lässt.

**REQ-IDN-021:** Ein Verbraucher MUSS Namensformen beibehalten, die Schriftzeichen, Reihenfolgekonventionen oder Komponenten verwenden, die von seiner Schnittstelle nicht unterstützt werden.

**REQ-IDN-022:** Für denselben Agenten, dieselbe Sprache, dasselbe Schriftsystem, denselben Verwendungszweck und denselben Verarbeitungskontext DARF höchstens eine Namensform als bevorzugt gekennzeichnet werden.

**REQ-IDN-023:** Ein transkribierter oder übersetzter Name DARF den Namen in der Quellschrift NICHT stillschweigend ersetzen.

### 8.3 Angabe eines externen Identifikators

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenkette | Ja | `1` | Lokale Assertion-Kennung. |
| `scheme` | Zeichenfolge oder URI | Ja | `1` | Identifikationsschema, z. B. ORCID oder ROR. |
| `value` | Zeichenkette | Ja | `1` | Schema-spezifischer Bezeichnerwert. |
| `uri` | URI | Nr. | `0..1` | Kanonische oder auflösbare URI, sofern bekannt. |
| `subject` | Zeichenfolge | Ja | `1` | Referenzierte Agenten-ID. |
| `verification` | Zeichenfolge | Ja | `1` | Nicht verifiziert, selbst angegeben, anhand der Quelle verifiziert, anhand des Registers verifiziert, abgelehnt oder Erweiterung. |
| `verifiedAt` | Datum und Uhrzeit | Nein | `0..1` | Zeitpunkt der Überprüfung. |
| `verifiedBy` | Agent- oder Dienstreferenz | Nein | `0..1` | Agent oder Prozessor wird überprüft. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Quelle der Behauptung. |
| `visibility` | Zeichenfolge | Nein | `0..1` | Öffentlich, eingeschränkt, privat oder vererbt. |

**REQ-IDN-030:** Der Vergleich von Identifikatoren MUSS den Normalisierungs- und Vergleichsregeln des deklarierten Schemas entsprechen.

**REQ-IDN-031:** Ein Produzent DARF einen externen Bezeichner NICHT als „registergeprüft“ kennzeichnen, es sei denn, ein protokollierter Überprüfungsvorgang stützt diesen Status.

**REQ-IDN-032:** Ein Fehler bei der Auflösung DARF für sich genommen einen syntaktisch gültigen persistenten Bezeichner NICHT ungültig machen.

**REQ-IDN-033:** Widersprüchliche externe Bezeichner MÜSSEN als separate Aussagen beibehalten werden, bis sie ausdrücklich geklärt, abgelehnt oder ersetzt werden.

**REQ-IDN-034:** Eine „ORCID“-Assertion MUSS einen Personen-Agenten identifizieren; eine „ROR“-Assertion MUSS einen Organisations-Agenten identifizieren.

### 8.4 Angabe der Zugehörigkeit

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenkette | Ja | `1` | Stabile Assertion-Kennung. |
| `agent` | Maklerverzeichnis | Ja | `1` | Angeschlossener Makler. |
| `organization` | Referenz des Akteurs | Ja | `1` | Organisation oder vergleichbarer institutioneller Akteur. |
| `unit` | Zeichenfolge oder Agent-Referenz | Nein | `0..1` | Abteilung, Fakultät, Labor oder Einheit. |
| `position` | mehrsprachige Zeichenkette | Nein | `0..1` | Position oder kontextbezogener Titel. |
| `role` | Laufzeit | Nr. | `0..1` | Art der Zugehörigkeit. |
| `validFrom` | Datum oder Datum und Uhrzeit | Nein | `0..1` | Beginn der bekannten Gültigkeit. |
| `validUntil` | Datum oder Datum und Uhrzeit | Nein | `0..1` | Ende der bekannten Gültigkeitsdauer. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Verantwortung für Quellen und Aussagen. |
| `verification` | Zeichenfolge | Nein | `0..1` | Überprüfungsstatus. |

**REQ-IDN-040:** Eine Zugehörigkeit MUSS als Beziehung dargestellt werden und nicht als unveränderliche Texteigenschaft einer Person.

**REQ-IDN-041:** Bei einer für einen Beitrag verwendeten Zugehörigkeitsangabe SOLLTE angegeben werden, ob sie sich auf den Zeitpunkt des Beitrags, den Zeitpunkt der Einreichung, den Zeitpunkt der Veröffentlichung oder einen anderen angegebenen Kontext bezieht.

**REQ-IDN-042:** Das Fehlen von Start- oder Enddaten MUSS entsprechend dem umgebenden Profil „unbekannt“ oder „befristet“ bedeuten; es DARF NICHT automatisch „aktuell“ bedeuten.

### 8.5 Ansprechpartner

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenfolge | Ja | `1` | Kennung der lokalen Kontaktangabe. |
| `type` | Zeichenkette | Ja | `1` | E-Mail, Telefon, Postanschrift, URI, Messaging oder Durchwahl. |
| `value` | Zeichenkette | Ja | `1` | Kontaktwert. |
| `purpose` | Zeichenfolge | Nein | `0..1` | Korrespondenz, redaktionelle, administrative, öffentliche oder beratende Angelegenheiten. |
| `visibility` | Zeichenkette | Ja | `1` | Öffentlich, eingeschränkt, privat oder vererbt. |
| `validFrom` | Datum oder Datum und Uhrzeit | Nein | `0..1` | Gültigkeitsbeginn. |
| `validUntil` | Datum oder Datums- und Uhrzeitangabe | Nein | `0..1` | Gültigkeitsende |
| `source` | `ProvenanceAssertion` | Ja | `1` | Angaben zur Herkunft und zum Verwahrer. |

**REQ-IDN-050:** Kontaktangaben MÜSSEN in portablen wissenschaftlichen Daten optional sein.

**REQ-IDN-051:** Eine private oder vertrauliche Kontaktstelle MUSS in Ausgabedaten, die nicht zum Empfang dieser Informationen berechtigt sind, weggelassen, verschlüsselt, zugangsgesteuert oder durch einen Mechanismus zur Weiterleitung nicht sensibler Daten ersetzt werden.

**REQ-IDN-052:** Die Übereinstimmung von E-Mail-Adressen DARF NICHT als schlüssiger Beweis dafür angesehen werden, dass zwei Identitätsdatensätze denselben Agenten repräsentieren.

### 8.6 Beitrag

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenkette | Ja | `1` | Stabile Beitrags-ID. |
| `agent` | Agentenreferenz | Ja | `1` | Mitwirkender Agent. |
| `target` | OMI Objektreferenz | Ja | `1` | Manuskript, Dokument, Abschnitt, Ressource, Ereignis, Veröffentlichung oder eine andere Entität, zu der ein Beitrag geleistet wurde. |
| `roles` | `ContributionRole[]` | Ja | `1..*` | Kontextbezogene Beitragsrollen. |
| `order` | Ganzzahl oder Zeichenkette | Nein | `0..1` | Explizite Reihenfolge in einer definierten Liste von Mitwirkenden. |
| `orderContext` | Zeichenfolge | Nein | `0..1` | Autorenliste, Editorliste, Anzeigeliste oder durch das Profil definierter Kontext. |
| `corresponding` | boolesch | Nein | `0..1` | Angabe des entsprechenden Mitwirkenden. |
| `attributionName` | Zeichenkette | Nein | `0..1` | Kontextspezifischer, gerenderter Name der Zuordnung. |
| `affiliations` | Angaben zu den institutionellen Zugehörigkeiten | Nein | `0..*` | Für diesen Beitrag relevante institutionelle Zugehörigkeiten. |
| `statement` | mehrsprachige Zeichenfolge | Nein | `0..1` | Für Menschen lesbare Angabe zum Urheberrecht. |
| `validFrom` | Datum oder Datum und Uhrzeit | Nein | `0..1` | Beginn der Kontextvalidität. |
| `validUntil` | Datum oder Datum und Uhrzeit | Nein | `0..1` | Ende der Kontextvalidität. |
| `visibility` | Zeichenfolge | Nein | `0..1` | Öffentlich, eingeschränkt, privat oder vererbt. |
| `provenance` | `ProvenanceAssertion[]` | Nein | `0..*` | Herkunft und Änderungshistorie der Aussage. |

**REQ-IDN-060:** Ein Beitrag MUSS genau einen Agenten und genau ein Ziel referenzieren.

**REQ-IDN-061:** Ein Beitrag MUSS mindestens eine Rolle enthalten.

**REQ-IDN-062:** Mehrere Rollen, die von demselben Akteur für dasselbe Ziel ausgeübt werden, KÖNNEN in einem Beitrag dargestellt werden, wenn ihre Reihenfolge, Sichtbarkeit, Zugehörigkeiten und der Gültigkeitskontext identisch sind; andernfalls MÜSSEN sie in separaten Beiträgen dargestellt werden.

**REQ-IDN-063:** „`order`“ darf ausschließlich im Rahmen von „`orderContext`“ und des jeweiligen Ziels oder Profils ausgelegt werden.

**REQ-IDN-064:** Der entsprechende Status DARF NICHT auf die Erstautorschaft, den Dienstalterrang, das Eigentumsrecht oder eine alleinige Kontaktperson für die Kommunikation hindeuten.

**REQ-IDN-065:** „`attributionName`“ darf die Anzeige für den Beitragskontext überschreiben, darf jedoch die Namensformen des Agenten NICHT überschreiben.

**REQ-IDN-066:** Ein Beitrag, der sich nur auf einen Teil eines Manuskripts bezieht, SOLLTE sich auf den entsprechenden Abschnitt, das entsprechende Objekt oder die entsprechende Ressource beziehen und nicht auf das gesamte Manuskript.

### 8.7 Rolle als Mitwirkender

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `id` | Zeichenkette | Ja | `1` | Identifikator für die stabile Rollenzuweisung. |
| `term` | Zeichenfolge oder URI | Ja | `1` | Wert der Rolle. |
| `scheme` | Zeichenfolge oder URI | Nein | `0..1` | Vokabular oder Register, in dem der Begriff definiert ist. |
| `label` | mehrsprachige Zeichenfolge | Nein | `0..1` | Für Menschen lesbare Bezeichnung. |
| `detail` | mehrsprachige Zeichenfolge | Nein | `0..1` | Kontextspezifische Erklärung. |

Zu den zentralen Begriffen der Rolle gehören:

- `author`;
- `editor`;
- `translator`;
- `reviewer`;
- `publisher`;
- `data-curator`;
- `software-contributor`;
- `illustrator`;
- `project-administrator`;
- `funding-acquisition`;
- `other`.

Profile können CRediT oder ein anderes kontrolliertes Vokabular verwenden.

**REQ-IDN-070:** Ein aus einem kontrollierten Vokabular importierter Rollenbegriff MUSS, sofern vorhanden, seine Vokabular-Kennung oder seinen URI beibehalten.

**REQ-IDN-071:** Eine lokale Rollenerweiterung DARF NICHT fälschlicherweise als Begriff aus einem kontrollierten Vokabular gekennzeichnet werden.

**REQ-IDN-072:** Eine Rollenbezeichnung dient der Information und DARF den maschinenlesbaren Rollenbegriff NICHT ersetzen.

### 8.8 Herkunftsangabe

Diese Spezifikation verwendet die folgende Mindeststruktur für die Herkunftsangaben, bis unter `OMI-SPEC-160` das vollständige Änderungs- und Herkunftsmodell definiert ist.

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `sourceType` | Zeichenfolge | Ja | `1` | Benutzer, Registrierung, importierter Datensatz, Einrichtung, Dienst, Migration oder Erweiterung. |
| `source` | Agent, System oder URI-Referenz | Nein | `0..1` | Quellidentität. |
| `assertedBy` | Vermittler- oder Kontoreferenz | Nein | `0..1` | Verantwortliche Partei, die die Behauptung aufstellt. |
| `assertedAt` | Datum und Uhrzeit | Nein | `0..1` | Zeitpunkt der Feststellung. |
| `evidence` | URI oder Objektreferenz | Nein | `0..*` | Belege. |
| `confidence` | Zeichenfolge oder Zahl | Nein | `0..1` | Quellspezifische Konfidenz. |

**REQ-IDN-080:** Die Herkunft MUSS die Quelle einer Aussage von dem durch diese Aussage beschriebenen Akteur unterscheiden.

**REQ-IDN-081:** Ein Konfidenzwert MUSS seine Skala oder sein Vokabular angeben.

### 8.9 Verknüpfung von Konten

Eine Implementierung KANN eine geschützte Verknüpfung zwischen einer Kontokennung und einer Agentenidentität aufrechterhalten.

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|
| `account` | Referenz eines undurchsichtigen Kontos | Ja | `1` | Von der Implementierung verwaltetes Konto. |
| `agent` | Agentenreferenz | Ja | `1` | Zugehörige Agenten-ID. |
| `status` | Zeichenfolge | Ja | `1` | Ausstehend, verifiziert, widerrufen oder verlängert. |
| `verifiedAt` | Datum und Uhrzeit | Nein | `0..1` | Zeitpunkt der Überprüfung. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Herkunftsangabe des Verbandes. |

**REQ-IDN-090:** Kontoverknüpfungen DÜRFEN KEINE Authentifizierungsgeheimnisse, Tokens, Passwort-Hashes oder Wiederherstellungsdaten enthalten.

**REQ-IDN-091:** Kontoverknüpfungen DÜRFEN standardmäßig NICHT in einem öffentlichen Manuskriptexport enthalten sein.

**REQ-IDN-092:** Das Löschen oder Deaktivieren eines Kontos DARF NICHT automatisch dazu führen, dass historische wissenschaftliche Zuordnungen gelöscht werden.

### 8.10 Unbekannte, anonyme, pseudonyme und nicht genannte Auftraggeber

Ein Produzent MUSS explizite Semantik verwenden:

| Zustand | Bedeutung |
|---|---|
| `unidentified` | Der Vermittler ist unbekannt oder kann nicht ermittelt werden. |
| `anonymous` | Der Beitrag wird bewusst keinem bestimmten öffentlichen Akteur zugeordnet. |
| `pseudonymous` | Ein stabiles Pseudonym ist die Zuordnungsidentität im jeweiligen Kontext. |
| `withheld` | Eine genauere Identitätsangabe ist bekannt, unterliegt jedoch einer Zugriffskontrolle. |

**REQ-IDN-100:** Eine verbergte Identität MUSS über eine stabile, geschützte Referenz verfügen, damit autorisierte Systeme die Kontinuität gewährleisten können, ohne die Identität preiszugeben.

**REQ-IDN-101:** Ein Verbraucher, der keinen Zugriff auf eine zurückgehaltene Identität hat, MUSS den Status „zurückgehalten“ beibehalten und DARF ihn NICHT in „nicht identifiziert“ umwandeln.

**REQ-IDN-102:** Ein pseudonymer Akteur SOLLTE als Akteuridentität mit einem eigenen stabilen Identifikator und einer eigenen pseudonymen Namensform dargestellt werden.

## 9. Verarbeitungsmodell

### 9.1 Erstellen einer Agentenidentität

Ein konformer Hersteller MUSS:

1. eine stabile lokale Agenten-ID zuweisen;
2. Wählen Sie den am genauesten passenden unterstützten Agententyp aus;
3. mindestens eine brauchbare Namensform oder einen expliziten, nicht identifizierten Zustand erfassen;
4. die Quelle importierter Aussagen beibehalten;
5. externe Identifikatoren als Aussagen hinzufügen, anstatt die lokale Identität zu ersetzen;
6. Sichtbarkeitsregeln vor dem Export anwenden.

### 9.2 Einen Beitrag erstellen

Ein konformer Hersteller MUSS:

1. den Urheber identifizieren oder erstellen;
2. das genaue Beitragsziel festlegen;
3. eine oder mehrere kontextbezogene Rollen zuweisen;
4. Bestellung nur dann erfassen, wenn ein Bestellkontext vorliegt;
5. Beziehungen, die sich auf einen bestimmten Beitrag beziehen, verknüpfen, anstatt sich auf die aktuelle Zugehörigkeit im Profil zu stützen;
6. Sichtbarkeitsstufen und eingeschränkte Daten klassifizieren;
7. die Herkunftsangabe beizubehalten, wenn der Beitrag von einer anderen Partei importiert oder geltend gemacht wird.

### 9.3 Identitätsvergleich

Ein Resolver SOLLTE die Belege in dieser Reihenfolge vergleichen:

1. verifizierte Schema-Identifikatoren;
2. Beziehungen zu maßgeblichen Quellen;
3. ausdrückliche vorherige Zusammenführung oder Aussagen über denselben Agenten;
4. übereinstimmende Namen, Zugehörigkeiten, Daten und kontextbezogene Belege;
5. implementierungsspezifische Ähnlichkeitssignale.

Ähnlichkeitssignale allein DÜRFEN KEINE irreversible automatische Zusammenführung bewirken.

### 9.4 Zusammenführen

Eine Zusammenführungsoperation MUSS:

1. Wählen Sie eine bestehende Bevollmächtigten-Identität aus oder erstellen Sie eine neue;
2. jeden früheren lokalen Bezeichner als Alias oder Ersatzreferenz beibehalten;
3. nicht doppelt vorhandene Aussagen und deren Herkunft zu bewahren;
4. widersprüchliche Aussagen beibehalten;
5. Beitragsverweise umleiten, ohne die Bedeutung des Beitrags zu verändern;
6. das Merge-Ereignis für die zukünftige Kompatibilität mit „`OMI-SPEC-160`“ protokollieren;
7. bleiben reversibel, bis die geltenden Aufbewahrungsrichtlinien eine endgültige Festlegung zulassen.

### 9.5 Aufteilung

Eine Split-Operation MUSS:

1. eindeutige Agenten-Identitäten erstellen;
2. Behauptungen und Beiträge anhand eindeutiger Belege neu bewerten;
3. den Originaldatensatz als historisch, mehrdeutig oder überholt beibehalten;
4. ungeklärte Zuordnungen festhalten, anstatt zu raten;
5. Herkunft und frühere Verweise beibehalten.

### 9.6 Angabe der Quelle

Ein Renderer SOLLTE einen Namen in dieser Reihenfolge auswählen:

1. beitragsbezogene `attributionName`;
2. bevorzugter Name, der der Zielsprache und dem Schriftsystem entspricht;
3. bevorzugter Name in einer anderen unterstützten Sprache oder Schrift;
4. ein gültiger, veröffentlichter oder pseudonymer Name;
5. ein weiterer reservierter Anzeigename;
6. ein zugelassenes, nicht offenes oder anonymes Etikett.

Ein Renderer DARF einen eingeschränkten Namen oder Bezeichner NICHT offenlegen, nur weil dieser in den Quelldaten enthalten ist.

## 10. Validierung und Fehlerbehandlung

### 10.1 Validierungsstufen

Die Validierung umfasst:

- Syntaxprüfung;
- strukturelle Validierung;
- semantische Validierung;
- Validierung der Referenzintegrität;
- Validierung des Identifikationsschemas;
- Überprüfung der Privatsphäre und Sichtbarkeit;
- Profilüberprüfung.

### 10.2 Fehlerzustände

| Bedingung | Klassifizierung | Erforderliches Verhalten |
|---|---|---|
| Fehlender Agent „`id`“ | Fehler | Die Agent-Identität ablehnen oder unter Quarantäne stellen. |
| Nicht unterstützter Agententyp | Nicht unterstützte Funktion | Als Erweiterung beibehalten oder die Unmöglichkeit der Verarbeitung melden. |
| Beitrag ohne Agens oder Ziel | Fehler | Beitrag ablehnen. |
| Beitrag ohne Rolle | Fehler | Den Beitrag ablehnen oder unter Quarantäne stellen. |
| Fehlerhafte Referenz zu Vermittler, Ziel, Zugehörigkeit oder Ersatz | Fehler | Melden Sie ungelöste Daten und bewahren Sie diese nach Möglichkeit auf. |
| Ungültige Schema-Syntax | Fehler | Melden; nicht als verifiziert kennzeichnen. |
| Resolver nicht verfügbar | Warnung | Behalten Sie die Assertion bei und melden Sie den ungelösten Status. |
| Konflikte bei verifizierten Identifikatoren | Fehler | Konflikt beibehalten; automatische Zusammenführung unterbinden. |
| Mehrere bevorzugte Namen im selben Kontext | Fehler | Melden und eine deterministische Konfliktbehandlung erzwingen. |
| Eingeschränkte Veröffentlichung | Sicherheitsfehler | Vor der Veröffentlichung sperren, schwärzen oder ersetzen. |
| Zuordnung zu einem unmöglichen Datumsintervall | Fehler | Meldung; Daten nicht stillschweigend neu anordnen. |
| Unbekannte Erweiterungseigenschaft | Warnung oder unterstützte Erweiterung | Gemäß den Erweiterungsrichtlinien beibehalten. |

### 10.3 Fehlende, Null- und leere Werte

- Eine fehlende Eigenschaft bedeutet, dass keine Aussage angegeben wird.
- `null` Darf NICHT als Ersatz für „enthalten“, „unbekannt“ oder „nicht zutreffend“ verwendet werden, es sei denn, ein Serialisierungsprofil definiert diese Zuordnung.
- Eine leere Zeichenfolge ist kein gültiger Name, Bezeichnerwert, Kontaktwert oder keine gültige Rolle.
- Ein leeres Array bedeutet, dass der Erzeuger versichert, dass in diesem Array für den serialisierten Kontext keine Werte vorhanden sind.
- „Unbekannt“, „nicht angegeben“, „anonym“ und „nicht zutreffend“ MÜSSEN explizite Semantik verwenden, wenn die Unterscheidung von Bedeutung ist.

### 10.4 Fehlerbeibehaltung

**REQ-IDN-110:** Ein Verbraucher, der eine Aussage nicht interpretieren kann, SOLLTE die Aussage, ihre Kennung, ihre Sichtbarkeit und ihre Herkunft für den Round-Trip-Export aufbewahren.

**REQ-IDN-111:** Ein Validator MUSS den Ort und die Klassifizierung jedes Fehlers im Identitätsmodell melden, ohne dabei vertrauliche Werte in Protokollen offenzulegen, die für ein breiteres Publikum bestimmt sind.

## 11. Erweiterbarkeit

### 11.1 Erweiterungspunkte

Erweiterungen können Folgendes definieren:

- weitere Agententypen;
- Verwendungsweisen von Namen;
- Identifikationsschemata;
- Verifizierungszustände;
- Zugehörigkeitsrollen;
- Kontaktarten;
- Beitragsrollen;
- Sichtbarkeitszustände;
- Herkunftsnachweis;
- profilspezifische Einschränkungen.

### 11.2 Unbekannte Dateiendungen

Ein konformer Client SOLLTE den Inhalt unbekannter Erweiterungen beibehalten, sofern dies unbedenklich ist. Er KANN die Semantik von Erweiterungen ignorieren, die er nicht implementiert, DARF die Erweiterung jedoch NICHT als Kern-Eigenschaft neu interpretieren.

Erweiterungen DÜRFEN NICHT:

- die Datenschutzvorschriften aufweichen;
- einen Kernagententyp neu definieren;
- ein Konto in einen Agenten umwandeln;
- eine Rolle als permanente Eigenschaft eines Akteurs behandeln;
- den Status der Identifikationsprüfung umgehen;
- Die Herkunft aus einer externen Aussage entfernen.

### 11.3 Regeln für Namensräume

Erweiterungsbegriffe SOLLTEN eine URI, ein registriertes Präfix oder einen kollisionsresistenten Namensraum verwenden. Ungekvalifizierte lokale Zeichenfolgen DÜRFEN nur innerhalb eines Profils oder Systems verwendet werden, das ihren Geltungsbereich definiert.

## 12. Versionierung und Kompatibilität

Diese Spezifikation folgt den Versionsrichtlinien der „OMI“.

### 12.1 Kompatibilitätsmaße

Es gelten folgende Abmessungen:

- Lesekompatibilität;
- Schreibkompatibilität;
- beidseitige Kompatibilität;
- Schemakompatibilität;
- Kompatibilität von Identitätsreferenzen;
- Kompatibilität mit der Datenschutzerklärung;
- Profilkompatibilität.

### 12.2 Kompatible Änderungen

Eine Neben- oder Patch-Version kann:

- eine optionale Eigenschaft hinzufügen;
- einen nicht in Konflikt stehenden Akteur oder Rollenterm hinzufügen;
- das Vergleichs- oder Anzeigeverhalten verdeutlichen;
- eine Kennungszuordnung hinzufügen;
- Füge ein Beispiel oder eine Validierungswarnung hinzu;
- Die Leitlinien zur Herkunftsangabe verfeinern, ohne die bestehende Bedeutung zu ändern.

### 12.3 Kompatibilitätsbrechende Änderungen

Zu den kompatibilitätsbrechenden Änderungen gehören:

- Änderung der Semantik der Identitätsgleichheit;
- Änderung der erforderlichen Identifikatorpersistenz;
- die Offenlegung der Identität, die bisher freiwillig war, zur Pflicht zu machen;
- die Bedeutung von „unbekannt“, „verheimlicht“, „anonym“ oder „pseudonym“ zu ändern;
- Ersetzen von Beitragsverweisen durch eingebettete Agent-Kopien;
- Änderung der Auslegung der Bestellung;
- Entfernen der erforderlichen Herkunfts- oder Verifizierungsangaben;
- die Standard-Sichtbarkeitseinstellungen so zu ändern, dass Daten offengelegt werden könnten.

### 12.4 Migration

Bei einer Migration MUSS Folgendes erhalten bleiben:

- Agenten-Identifikatoren oder explizite Ersatzalias;
- alle Verweise auf Beiträge;
- Namensformen und Schriften;
- Aussagen zu externen Identifikatoren und Verifizierungszustände;
- Zugehörigkeitskontext;
- Sichtbeeinträchtigungen;
- Herkunft;
- ungelöste Konflikte.

Die Migrationsabteilung MUSS jeden Informationsverlust melden.

### 12.5 Veraltete Funktionen

Eine veraltete Eigenschaft oder ein veralteter Begriff MUSS Folgendes angeben:

- Ersatz;
- betroffene Versionen;
- Kompatibilitätsverhalten;
- früheste Entfernungsversion;
- Migrationsanforderungen.

## 13. Interoperabilität

### 13.1 Externe Standards und Systeme

| Externer Standard oder System | Richtung | Abbildungsqualität | Anmerkungen |
|---|---|---|---|
| ORCID | Bidirektional | Bedingt verlustfrei | Die Herkunft von Identifikator und Verifizierung muss separat behandelt werden. |
| ROR | Bidirektional | Bedingt verlustfrei | Gilt für Identitäten und Zugehörigkeiten von Organisationen. |
| CRediT | Bidirektional | Bedingt verlustfrei | Ordnet Begriffe der Mitwirkungsrolle zu, nicht die Identität der Akteure. |
| JATS Metadaten der Mitwirkenden von XML | Bidirektional | Potenziell verlustbehaftet | Name, Rolle, Zugehörigkeit und Anonymitätsmodelle variieren je nach Profil. |
| Metadaten von Crossref-Mitwirkenden | Export und Import | Mögliche Datenverluste | Workflow- und personenbezogene Daten sind in den üblichen Hinterlegungsdatensätzen nicht enthalten. |
| Metadaten von DataCite-Beitragenden | Export und Import | Möglicherweise mit Datenverlust | Rollenvokabular und Namenskennungen erfordern eine Zuordnung. |
| CSL JSON names | Bidirektional | Potenziell verlustbehaftet | CSL name-Objekte repräsentieren nicht das vollständige Identitätsmodell von OMI. |
| Schema.org-Agenten | Bidirektional | Möglicherweise mit Informationsverlust | Kontext und Herkunft erfordern möglicherweise Erweiterungen. |

### 13.2 Aufbewahrung von Informationen

Zuordnungen SOLLTEN Folgendes beibehalten:

- lokale stabile Identität;
- Quellnamenstrings;
- Name, Sprache und Schrift;
- Kennzeichnungsschema und Wert;
- Beitragsrolle;
- Reihenfolge der Mitwirkenden;
- Zugehörigkeitsangaben und Kennungen;
- entsprechender Status;
- Anonymität oder nicht angegebener Status;
- Herkunft und Verifizierungsstatus, sofern das Zielsystem dies zulässt.

Ein Zuordnungsbericht MUSS ausgelassene oder vereinfachte Semantiken aufzeigen.

### 13.3 Verhalten bei Hin- und Rücklauf

Ein Rundlauf ist nur dann verlustfrei, wenn das Zielformat alle relevanten Semantiken hinsichtlich Identität, Rolle, Reihenfolge, Zugehörigkeit, Sichtbarkeit und Herkunft beibehalten kann. Andernfalls MUSS der Prozessor den Rundlauf als bedingt verlustfrei oder verlustbehaftet einstufen.

## 14. Überlegungen zu Sicherheit, Datenschutz und Integrität

Identitätsdaten können personenbezogene Daten, vertrauliche Identitäten von Gutachtern, Kontaktdaten, institutionelle Beziehungen, persistente Identifikatoren und historische Zuordnungen enthalten. Eine fehlerhafte Offenlegung oder Zusammenführung kann Einzelpersonen schaden und die wissenschaftliche Provenienz beeinträchtigen.

### 14.1 Datenminimierung

**REQ-IDN-200:** Ein Produzent MUSS nur diejenigen Identitäts- und Kontaktangaben angeben, die für den angegebenen Zweck und die Zielgruppe erforderlich sind.

### 14.2 Zugriffskontrolle

**REQ-IDN-201:** Eingeschränkte und private Aussagen MÜSSEN durch ihrer Einstufung entsprechende Zugriffskontrollen geschützt werden.

**REQ-IDN-202:** Bei öffentlichen Exporten MÜSSEN die Sichtbarkeitsregeln rekursiv auf Namen, Identifikatoren, Kontaktdaten, Zugehörigkeiten, Beiträge und Herkunftsnachweise angewendet werden.

### 14.3 Integrität der Identifikatoren

**REQ-IDN-203:** Ein Verbraucher MUSS den Verifizierungsstatus beibehalten und DARF die Vertrauensstufe NICHT erhöhen, nur weil ein Bezeichner syntaktisch gültig ist.

**REQ-IDN-204:** Resolver-Antworten MÜSSEN als externe Eingabe behandelt und vor der Verwendung validiert werden.

### 14.4 Sicherheit beim Einfädeln

**REQ-IDN-205:** Eine Zusammenführung auf der Grundlage eines probabilistischen Abgleichs MUSS einer Überprüfung oder einem reversiblen Workflow unterzogen werden, wenn dadurch die öffentliche Zuordnung geändert werden könnte.

### 14.5 Protokollierung

**REQ-IDN-206:** In Protokollen und Validierungsberichten SOLLTEN Datensatzkennungen oder geschwärzte Werte anstelle von privaten Kontaktdaten und Namen mit Zugangsbeschränkung verwendet werden.

### 14.6 Kontentrennung

Authentifizierungsdaten und Anbieter-Token MÜSSEN außerhalb von wissenschaftlichen Dokumenten und Paketen auf OMI verbleiben. Ein importiertes Manuskript DARF NICHT in der Lage sein, ohne einen expliziten vertrauenswürdigen Vorgang eine authentifizierte Kontoverknüpfung herzustellen.

## 15. Überlegungen zur Barrierefreiheit

Benutzeroberflächen, die Identitätsdaten anzeigen, SOLLTEN:

- den vollständigen, barrierefreien Namen unabhängig von der visuellen Darstellung des Namens anzeigen;
- Vermeiden Sie es, sich bei der Überprüfung oder der Erkennung des Status ausschließlich auf die Farbe zu verlassen;
- Textbeschriftungen für Identifikationsschemata und Verifizierungsstatus bereitstellen;
- die Reihenfolge der Mitwirkenden und den entsprechenden Status für assistive Technologien verfügbar machen;
- den Tastaturzugriff auf alternative Namen, Zugehörigkeiten und Herkunftsangaben beibehalten;
- Vermeiden Sie es, Namen so zu kürzen, dass unterscheidende Informationen entfernt werden, ohne dass eine vollständige Form verfügbar ist;
- Dem Benutzer die Korrektur falsch analysierter Namensbestandteile ermöglichen.

Das zugrunde liegende Modell MUSS die für eine barrierefreie Darstellung erforderlichen semantischen Unterscheidungen beibehalten.

## 16. Überlegungen zur Internationalisierung

### 16.1 Namen

Implementierungen MÜSSEN Unicode-Namenswerte unterstützen. Sie DÜRFEN NICHT davon ausgehen, dass:

- Jede Person hat einen Vornamen und einen Nachnamen;
- Der Nachname steht hinter dem Vornamen;
- Alle Komponenten werden durch Leerzeichen voneinander getrennt;
- Die Groß- und Kleinschreibung lässt sich problemlos vereinheitlichen;
- Ein Skript ist kanonisch;
- Die Transliteration ist reversibel;
- Ein Name ist sprachneutral.

### 16.2 Sprache und Schrift

Für die Angabe der Sprache SOLLTEN die BCP 47-Sprachkennungen verwendet werden. ISO 15924-Schriftsystemcodes KÖNNEN die Sprachkennungen bei Bedarf ergänzen.

### 16.3 Sortieren

Sortierschlüssel sind Verarbeitungsmetadaten und keine Identitäten. Ein lokalisierungsspezifisch generierter Sortierschlüssel DARF den Quellnamen NICHT überschreiben.

### 16.4 Datum und Uhrzeit

Reine Datumswerte DÜRFEN NICHT in Datums- und Zeitangaben umgewandelt werden, ohne dass ihre ursprüngliche Genauigkeit erhalten bleibt. Datums- und Zeitangaben SOLLTEN nach ISO 8601 formatiert sein und einen Zeitversatz oder einen angegebenen Zeitzonenkontext enthalten, wenn diese Unterscheidung von Bedeutung ist.

### 16.5 Bidirektionaler Text

Renderer MÜSSEN eine sichere Verarbeitung bidirektionalen Textes gewährleisten und DÜRFEN die Reihenfolge der gespeicherten Namen NICHT allein aufgrund der Richtung der umgebenden Schnittstelle ändern.

## 17. Beispiele

Die Beispiele dienen zur Orientierung, bis die kanonischen Schemata und Fixtures veröffentlicht werden.

### 17.1 Mindestanzahl an Personen und Mindestbeitrag

```json
{
  "agents": [
    {
      "id": "agent-001",
      "type": "person",
      "names": [
        {
          "id": "name-001",
          "display": "Judit Balogh",
          "given": "Judit",
          "family": "Balogh",
          "language": "hu",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-001",
      "agent": "agent-001",
      "target": "manuscript-001",
      "roles": [
        {
          "id": "role-001",
          "term": "author"
        }
      ],
      "order": 1,
      "orderContext": "author-list"
    }
  ]
}
```

In diesem Beispiel wird der Akteur vom Beitrag getrennt und die Reihenfolge kontextabhängig gestaltet.

### 17.2 Externer Identifikator und Zugehörigkeit

```json
{
  "id": "agent-002",
  "type": "person",
  "names": [
    {
      "id": "name-002",
      "display": "Katalin Kovács",
      "language": "hu"
    }
  ],
  "identifiers": [
    {
      "id": "identifier-001",
      "scheme": "orcid",
      "value": "0000-0002-1825-0097",
      "uri": "https://orcid.org/0000-0002-1825-0097",
      "subject": "agent-002",
      "verification": "self-asserted",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ],
  "affiliations": [
    {
      "id": "affiliation-001",
      "agent": "agent-002",
      "organization": "agent-org-001",
      "unit": "Department of History",
      "validFrom": "2024-09-01",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ]
}
```

### 17.3 Pseudonymer Beitrag

```json
{
  "agents": [
    {
      "id": "agent-pseudonym-001",
      "type": "person",
      "names": [
        {
          "id": "name-pseudonym-001",
          "display": "Researcher North",
          "usage": "pseudonym",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-pseudonym-001",
      "agent": "agent-pseudonym-001",
      "target": "review-001",
      "roles": [
        {
          "id": "role-reviewer-001",
          "term": "reviewer"
        }
      ],
      "visibility": "restricted"
    }
  ]
}
```

### 17.4 Ungültiger eingebetteter Mitwirkender

```json
{
  "contributions": [
    {
      "id": "contribution-invalid-001",
      "agent": {
        "fullName": "Example Author",
        "email": "author@example.org"
      },
      "target": "manuscript-001",
      "roles": []
    }
  ]
}
```

Dies ist ungültig, da der Beitrag einen kontoähnlichen Personeneintrag einbettet, anstatt auf einen Agenten zu verweisen, keine Beitragsrolle enthält und Kontaktdaten ohne Sichtbarkeitsklassifizierung offenlegt.

### 17.5 Ungültige automatische Zusammenführung

```json
{
  "merge": {
    "agents": ["agent-101", "agent-202"],
    "reason": "same-display-name"
  }
}
```

Dies ist ungültig, da die Übereinstimmung der Namen allein kein ausreichender Beweis für eine Identitätszusammenführung ist.

## 18. Verweise auf Normen

- Open Manuscript Initiative, *Grundprinzipien*, `OMI-SPEC-000`, Version `0.1.0`.
- Open Manuscript Initiative, *Scholarly Object Model*, `OMI-SPEC-120`, Version `0.1.0`.
- Open Manuscript Initiative., *Metadata Model*, `OMI-SPEC-140`, Version `0.1.0`.
- Open Manuscript Initiative: *Terminologie und Definitionen*.
- Open Manuscript Initiative: *Specification Lifecycle*.
- Open Manuscript Initiative, *Richtlinie zur Versionsverwaltung*.

## 19. Informative Literaturhinweise

- ORCID Identifikations- und Datensatz-Ökosystem.
- Register für Forschungseinrichtungen.
- CRediT-Taxonomie der Mitwirkendenrollen.
- JATS Metadaten des Autors.
- Metadaten der Crossref-Mitwirkenden.
- Metadaten von DataCite-Beitragenden.
- Zitierstil „Language name model“.

## 20. Stand der Umsetzung

Open Manuscript Studio enthält derzeit vorläufige identitätsbezogene Strukturen:

- `OmiPerson` mit strukturierten Namen, Zugehörigkeitsangaben und Kennungen;
- `User` mit einer Konto-ID, einer E-Mail-Adresse, einem Profil, ORCID, externen Anmeldedaten und Einstellungen;
- `WorkspaceMember` mit kontextbezogenen Arbeitsbereichsrollen.

Diese Strukturen veranschaulichen relevante Entwurfsarbeiten, setzen diese Spezifikation jedoch noch nicht um. Insbesondere weist das aktuelle Studio-Modell noch folgende Mängel auf:

- eindeutige Trennung zwischen Konto und Identität des Beauftragten;
- Beitragsobjekte, die unabhängig von Personen sind;
- kontextbezogene Zugehörigkeiten;
- Aussagen über externe Identifikatoren mit Herkunftsangabe;
- mehrere mehrsprachige Namensformen;
- Behandlung der Sichtbarkeit von geschützten Elementen;
- Identitätsabgleich und reversibles Zusammenführungsverhalten;
- Zuordnung von Anforderungen zu Code und Konformitätstests.

Die Klassifizierung der Beweiskraft wird in der „[Implementation Status Matrix](../governance/implementation-status-matrix.md)“ geführt.

## 21. Ungeklärte Fragen

| Problem | Auswirkung | Erforderliche Entscheidung | Nachverfolgung |
|---|---|---|---|
| Kanonisches Vokabular maschinenlesbarer Eigenschaften | Veröffentlichung des Schemas | Festlegung der genauen Serialisierungsnamen und Namensräume. | Zukünftige Schema-Ausgabe |
| Geltungsbereich der Agenten-Identität über Pakete und Repositories hinweg | Persistenz von Identifikatoren | Festlegen, wann lokale IDs bei der Übertragung unverändert bleiben. | Koordination von „`OMI-SPEC-160`“ |
| Register für kontrollierte Beitragsrollen | Interoperabilität | Entscheidung darüber, ob „OMI“ CRediT und lokale Rollen übernimmt, profiliert oder abbildet. | Zukünftiges Problem mit dem Register |
| Vokabular für den Verifizierungsstatus | Interoperabilität der Resolver | Festlegung gemeinsamer Mindestanforderungen an Status und Nachweise. | Zukünftige Validierungsproblematik |
| Anonyme Begutachtung | Datenschutz und Datenerhaltung | Abstimmung der geschützten Identität mit Begutachtungs- und Container-Modellen. | `OMI-SPEC-200` und `OMI-SPEC-330` |
| Austausch von Kontozuordnungen | Sicherheit | Feststellen, ob ein geschütztes Profil Kontozuordnungen serialisieren darf. | `OMI-SPEC-190` und `OMI-SPEC-310` |
| Momentaufnahmen zur Gruppenautorschaft und Konsortialmitgliedschaft | Namensnennung | Definition der Nachweise für die Mitgliedschaft und des zeitlichen Kontexts. | Zukünftiger Überarbeitungsentwurf |
| Ereignismodell für die Zusammenführung und Aufteilung von Identitäten | Herkunft | Verknüpfung von Operationen mit dem Versions- und Änderungsmodell. | `OMI-SPEC-160` |

## 22. Änderungshistorie

| Version | Datum | Status | Änderungsklassifizierung | Zusammenfassung |
|---|---|---|---|---|
| `0.1.0` | 06.08.2026 | Entwurf | Erster Entwurf | Aktivierung von `OMI-SPEC-150` und Definition von Akteuren, Namen, externen Identitätsaussagen, Zugehörigkeiten, Beiträgen, Kontentrennung, Datenschutz, Validierung sowie Anforderungen an die Interoperabilität. |

## 23. Danksagungen

Dieser Entwurf stützt sich auf die bestehende Terminologie des „OMI“, die Benutzer- und Arbeitsbereichs-Domänenmodelle des „Open Manuscript Studio“ sowie auf etablierte Praktiken im Bereich wissenschaftlicher Identifikatoren und Metadaten zu Mitwirkenden. Die Verantwortung für alle normativen Inhalte liegt weiterhin bei den menschlichen Betreuern.
