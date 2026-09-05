---
id: vision
title: Vision
sidebar_position: 1
description: Die Vision und Philosophie hinter dem „Open Manuscript Initiative“.
---

# Vision

## Wissenschaftliches Schreiben neu denken

Seit Jahrzehnten werden wissenschaftliche Manuskripte mit Textverarbeitungsprogrammen erstellt, die ursprünglich für Bürodokumente entwickelt wurden.

Diese Anwendungen verlangen von den Autoren, eher typografische als wissenschaftliche Entscheidungen zu treffen. Fragen wie Schriftgröße, Zeilenabstand, Einrückungen oder manuelles Layout haben wenig mit wissenschaftlicher Kommunikation zu tun, doch die Arbeitsabläufe im Verlagswesen zwingen Autoren und Lektoren immer wieder dazu, die Struktur anhand der visuellen Formatierung nachzuvollziehen.

Das Ergebnis ist bekannt:

- uneinheitliche Formatierung;
- versteckte Dokumentartefakte;
- inkompatible Vorlagen;
- wiederholte Konvertierung und Bereinigung;
- doppelte Metadaten-Einträge;
- sowie Informationsverluste zwischen Autoren-, Begutachtungs- und Publikationssystemen.

OMI geht von einer anderen Prämisse aus: Die wissenschaftliche Handschrift sollte während ihres gesamten Lebenszyklus ein strukturiertes, transportables Objekt bleiben.

## Bedeutung vor Erscheinung

Autoren sollten beschreiben, **was** ein Inhalt ist, und nicht nur, **wie** er aussehen soll.

Ein Manuskript ist keine Ansammlung von Schriftarten und Formatierungen. Es handelt sich vielmehr um eine strukturierte Zusammenstellung wissenschaftlicher Konzepte wie beispielsweise:

- Titel, Autoren und Zugehörigkeit;
- Zusammenfassung und Schlagwörter;
- Abschnitte und Überschriften;
- Zitate, Abbildungen und Tabellen;
- Anmerkungen, Zitate und Quellenangaben;
- Danksagungen, Angaben zur Finanzierung und Erklärungen zur Datenverfügbarkeit;
- Anmerkungen, Überarbeitungen und Prüfungsunterlagen.

Diese Elemente definieren die wissenschaftliche Bedeutung. Ihre Darstellung kann dann für eine Fachzeitschrift, ein Repositorium, einen Buch-Workflow, eine Web-Veröffentlichung, eine Druckausgabe oder ein Archivierungspaket generiert werden, ohne dass das Manuskriptmodell neu geschrieben werden muss.

## Einmal strukturieren

OMI verwendet ein semantisches Manuskriptmodell. Anstatt die Struktur während der Konvertierung immer wieder neu aufzubauen, wird sie als Daten erster Klasse beibehalten.

Dadurch kann ein Manuskript zwischen den Phasen der Erstellung, der Begutachtung, der redaktionellen Bearbeitung und der Veröffentlichung wechseln, ohne dass dabei seine wissenschaftliche Identität, seine Metadaten und seine Verknüpfungen verloren gehen.

Das gleiche Prinzip gilt für Mitwirkende, Zitate, Anmerkungen und den Versionsverlauf: Sie sollten Workflow-Übergänge als aussagekräftige Objekte überstehen und nicht jedes Mal, wenn eine Datei den Besitzer wechselt, zu reinem Text reduziert werden.

## Überall veröffentlichen

Die aktuelle Referenzimplementierung von „Open Manuscript Studio“ zeigt bereits die Richtung dieses Modells auf. Ein strukturiertes Manuskript kann als portables „OMI“-Datenformat bereitgestellt und in verlagsorientierte Ausgabedateien umgewandelt werden, darunter:

- JATS XML;
- semantisches HTML;
- DOCX;
- EPUB;
- PDF;
- IDML;
- XPress-Tags;
- FrameMaker MIF;
- Scribus SLA;
- und LaTeX.

Zukünftige Adapter können weitere Ziele für Verlage, Repositorien, Langzeitarchivierung und die Hinterlegung von Metadaten hinzufügen, ohne das wissenschaftliche Quellenmodell zu ändern.

Die Darstellung wird zum Ergebnis. Die Bedeutung bleibt die Quelle.

## Von Grund auf offen konzipiert

Das „Open Manuscript Initiative“ ist ein Projekt auf Basis offener Standards. Seine Spezifikationen, Schemata, Dokumentationen und Referenzimplementierungen sollen unter offenen Lizenzen öffentlich zugänglich bleiben.

Jeder sollte in der Lage sein,:

- die Spezifikationen umsetzen;
- kompatible Autorensoftware oder Veröffentlichungssoftware entwickeln;
- Konverter und Validatoren erstellen;
- Plugins und Integrationen entwickeln;
- OMI-Workflows mit der Veröffentlichungs- oder Repository-Infrastruktur verknüpfen;
- und die „OMI“-Manuskripte unabhängig von einem bestimmten Anbieter oder Hosting-Dienst zu bewahren.

Keine proprietäre Anwendung sollte die alleinige Kontrolle über das wissenschaftliche Objekt erhalten.

## „Local-first“ und interoperabel

Portabilität bedeutet auch, dass Autoren die Eigentumsrechte an ihren Manuskripten nicht an eine bestimmte Cloud-Plattform abtreten müssen, nur um moderne wissenschaftliche Werkzeuge nutzen zu können.

OMI Daher wird eine „Local-First“-Architektur unterstützt, bei der Manuskripte auf dem Computer des Autors verbleiben, in portablen „OMI“-Paketen gespeichert oder in Ordnern abgelegt werden können, die vom vom Autor gewählten Speicheranbieter synchronisiert werden. Serverdienste werden dort genutzt, wo sie einen echten Mehrwert bieten – Konten, Zusammenarbeit, Peer-Review, Integration in Veröffentlichungssysteme oder direkte Ferndienste –, und nicht als Voraussetzung für den Besitz des Manuskripts.

Externe Plattformen wie OJS und OMP sind weiterhin maßgebend für den Status ihres jeweiligen Workflows. OMI erfolgt die Integration über explizite APIs und Profile, anstatt das Manuskriptmodell direkt an die Datenbank einer anderen Anwendung zu koppeln.

## Die Rezension ist Teil des wissenschaftlichen Objekts

Peer-Reviews sollten nicht als nebensächlicher Text betrachtet werden, der ein Dokument umgibt. „OMI“ modelliert Review-Aufträge, Anmerkungen, Kommentare und Identitätsgrenzen als strukturierte wissenschaftliche Workflow-Daten.

Die Referenzimplementierung unterstützt bereits das doppelblinde Begutachtungsverfahren sowie rollenbasierte Arbeitsabläufe für Autoren, Herausgeber und Gutachter. Langfristiges Ziel ist es, den Begutachtungsstatus portabel und interoperabel zu gestalten und dabei die für den Publikationsworkflow erforderlichen Vertraulichkeitsregeln einzuhalten.

## Identität ohne Bindung

Die Authentifizierungsidentität und die Identität als wissenschaftlicher Autor stehen zwar miteinander in Zusammenhang, sind jedoch nicht dasselbe.

Ein Konto gibt an, wer einen Dienst nutzen darf. Ein Mitwirkenden-Datensatz enthält Angaben zu Urheberschaft, Zugehörigkeit, ORCID und wissenschaftlicher Rolle. OMI hält diese Konzepte voneinander getrennt, sodass externe Identitätsanbieter verknüpft werden können, ohne die Urheberschaft neu zu definieren oder einen Authentifizierungsanbieter in das Manuskriptformat einzubetten.

## Nachhaltigkeit durch Dienstleistungen

Auch offene Standards erfordern eine nachhaltige Wartung. OMI bietet optionale gehostete oder professionelle Dienste an, wie zum Beispiel:

- verwaltete Infrastruktur für Zusammenarbeit und Arbeitsabläufe;
- Validierungs- und Interoperabilitätsdienste;
- Integration von Publikationssystemen;
- Repository- und Archivierungsadapter;
- Unterstützung bei der institutionellen Einführung;
- Übersetzungs- oder KI-gestützte Dienstleistungen;
- sowie Managed Hosting.

Diese Dienste können das Ökosystem zwar erweitern, sollten jedoch niemals den Zugang zum Standard, zum Manuskriptmodell oder zur offenen Referenzimplementierung einschränken.

## Mehr als nur ein Dateiformat

OMI ist nicht einfach nur ein weiteres Dokumentformat. Es handelt sich um ein Ökosystem aus interoperablen Komponenten:

- semantische Spezifikationen;
- ein wissenschaftliches Objektmodell;
- tragbare Behälter für Manuskripte;
- Validierungsregeln und Konformitätsklassen;
- Referenzimplementierungen;
- APIs und Integrationsprofile;
- Veröffentlichungs- und Konvertierungstools;
- Überprüfung der Arbeitsabläufe;
- sowie Architektur für die Langzeitarchivierung.

Open Manuscript Studio ist die aktuelle Referenzimplementierung, mit der diese Konzepte in einer realen Umgebung für die Erstellung, Überprüfung und Veröffentlichung von Inhalten über Web-, Desktop- und mobile Clients hinweg umgesetzt werden.

## Die Gemeinschaft steht an erster Stelle

Wissenschaftliche Kommunikation ist Teil der akademischen Gemeinschaft. Das „Open Manuscript Initiative“ begrüßt Beiträge von Forschern, Verlagen, Softwareentwicklern, Bibliothekaren, Universitäten, Fachzeitschriften und Forschungseinrichtungen.

Durch offene Zusammenarbeit kann sich die Spezifikation an den wissenschaftlichen Anforderungen orientieren und muss sich nicht an den Einschränkungen eines proprietären Editors oder einer proprietären Publikationsplattform orientieren.

## Unser Ziel

Wir stellen uns einen Arbeitsablauf vor, bei dem sich Forscher auf ihre wissenschaftliche Arbeit konzentrieren können, während die Software Struktur, Identität und Zusammenhänge während des gesamten Publikationszyklus bewahrt.

Das Manuskript bleibt sowohl für Maschinen als auch für Menschen verständlich.

Publikationssysteme übernehmen die Verantwortung für die Darstellung.

Die Überprüfung bleibt strukturiert und nachvollziehbar.

Wissen bleibt übertragbar.

Das Verlagswesen wird interoperabel.

> **Schreibe ganz natürlich.**  
> Einmal strukturieren.  
> Überall veröffentlichen.**
