import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {DIRECTORY_REFRESH_MS, parseDirectorySnapshot, type DirectorySnapshot} from '../utils/serverDirectory';

import styles from './servers.module.css';

type Copy = {
  title: string;
  lead: string;
  loading: string;
  unavailable: string;
  empty: string;
  online: string;
  lastSeen: string;
  refreshed: string;
  open: string;
  version: string;
  updated: string;
};

const COPY: Record<string, Copy> = {
  hu: {
    title: 'OMI Studio-szerverek',
    lead: 'A listában szereplő szerverek önállóan működnek. Választás után a böngésző közvetlenül a kiválasztott Studio-példányhoz kapcsolódik; a kéziratok és a szerkesztési forgalom nem a címtáron keresztül halad.',
    loading: 'A szerverlista betöltése…',
    unavailable: 'A szerverjegyzék most nem érhető el. Próbálja meg később.',
    empty: 'Jelenleg nincs online, nyilvánosan listázott Studio-szerver.',
    online: 'Friss életjel',
    lastSeen: 'Utolsó életjel',
    refreshed: 'Lista frissítve',
    open: 'Szerver megnyitása',
    version: 'Verzió',
    updated: 'A nyilvános szerverek automatikusan regisztrálnak és naponta küldenek életjelet. A központi szerver saját bejegyzését is automatikusan kezeli. A lista kézi frissítés nélkül naponta frissül. Az elmúlt 48 órában jelző szerverek jelennek meg; ez nem valós idejű üzemállapot-ellenőrzés.',
  },
  de: {
    title: 'OMI Studio-Server',
    lead: 'Die aufgeführten Server arbeiten unabhängig voneinander. Nach der Auswahl verbindet sich der Browser direkt mit der gewählten Studio-Instanz; Manuskripte und Bearbeitungsverkehr laufen nicht über das Verzeichnis.',
    loading: 'Serverliste wird geladen…',
    unavailable: 'Das Serververzeichnis ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut.',
    empty: 'Derzeit sind keine öffentlichen Studio-Server online.',
    online: 'Aktuelles Lebenszeichen',
    lastSeen: 'Letztes Lebenszeichen',
    refreshed: 'Liste aktualisiert',
    open: 'Server öffnen',
    version: 'Version',
    updated: 'Öffentliche Server registrieren sich automatisch und senden täglich ein Lebenszeichen. Der zentrale Server verwaltet auch seinen eigenen Eintrag automatisch. Die Liste aktualisiert sich täglich ohne manuelles Neuladen. Angezeigt werden Server mit einem Lebenszeichen innerhalb der letzten 48 Stunden. Dies ist keine Echtzeit-Verfügbarkeitsprüfung.',
  },
  en: {
    title: 'OMI Studio servers',
    lead: 'Listed servers operate independently. After selection, your browser connects directly to that Studio instance; manuscripts and editing traffic do not pass through the directory.',
    loading: 'Loading the server list…',
    unavailable: 'The server directory is unavailable right now. Please try again later.',
    empty: 'There are no public Studio servers online right now.',
    online: 'Recent heartbeat',
    lastSeen: 'Last heartbeat',
    refreshed: 'List updated',
    open: 'Open server',
    version: 'Version',
    updated: 'Public servers register automatically and send a daily heartbeat. The central server also maintains its own entry automatically. The list refreshes each day without manual reloading. Servers with a signal in the last 48 hours are shown; this is not a real-time health check.',
  },
};

const REGISTRY_API = 'https://studio.openmanuscript.org/api/v1/server-registry/servers/daily';

export default function ServersPage(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const copy = COPY[i18n.currentLocale] ?? COPY.en;
  const [snapshot, setSnapshot] = useState<DirectorySnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout>;
    const controller = new AbortController();
    const load = async () => {
      let delay = DIRECTORY_REFRESH_MS;
      try {
        const response = await fetch(REGISTRY_API, {
          headers: {Accept: 'application/json'},
          cache: 'no-cache',
          signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10_000)]),
        });
        if (!response.ok) throw new Error(`Registry returned HTTP ${response.status}`);
        const data = parseDirectorySnapshot(await response.json());
        if (active) {
          setSnapshot(data);
          setUnavailable(false);
        }
      } catch {
        delay = 5 * 60_000;
        if (active) {
          setSnapshot(null);
          setUnavailable(true);
        }
      } finally {
        if (active) {
          setLoading(false);
          timer = window.setTimeout(() => { void load(); }, delay);
        }
      }
    };

    void load();
    return () => {
      active = false;
      controller.abort();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Layout title={copy.title} description={copy.lead}>
      <main className={styles.page}>
        <header className={styles.header}>
          <p className={styles.kicker}>Open Manuscript Initiative</p>
          <h1>{copy.title}</h1>
          <p>{copy.lead}</p>
        </header>
        <section className={styles.directory} aria-live="polite" aria-busy={loading}>
          {loading ? <p className={styles.notice}>{copy.loading}</p> : null}
          {!loading && unavailable ? <p className={styles.notice} role="status">{copy.unavailable}</p> : null}
          {!loading && !unavailable && snapshot?.servers.length === 0 ? <p className={styles.notice}>{copy.empty}</p> : null}
          <div className={styles.grid}>
            {snapshot?.servers.map((server) => {
              return (
                <article className={styles.card} key={server.id}>
                  <div className={styles.cardHeading}>
                    <h2>{server.name}</h2>
                    <span className={styles.online}>
                      <span aria-hidden="true" className={styles.dot} />
                      {copy.online}
                    </span>
                  </div>
                  <p className={styles.origin} dir="ltr">{server.origin}</p>
                  {server.softwareVersion ? (
                    <p className={styles.version}>{copy.version}: {server.softwareVersion}</p>
                  ) : null}
                  <p className={styles.version}>
                    {copy.lastSeen}: <time dateTime={server.lastSeenAt}>{new Date(server.lastSeenAt).toLocaleString(i18n.currentLocale)}</time>
                  </p>
                  <a className={styles.open} href={server.origin} target="_blank" rel="noopener noreferrer">
                    {copy.open}
                  </a>
                </article>
              );
            })}
          </div>
          {snapshot ? <p className={styles.updated}>{copy.refreshed}: <time dateTime={snapshot.generatedAt}>{new Date(snapshot.generatedAt).toLocaleString(i18n.currentLocale)}</time></p> : null}
          <p className={styles.updated}>{copy.updated}</p>
        </section>
      </main>
    </Layout>
  );
}
