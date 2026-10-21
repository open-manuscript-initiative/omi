import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './servers.module.css';

type DirectoryServer = {
  id: string;
  name: string;
  origin: string;
  softwareVersion: string | null;
  status: 'online' | 'offline';
};

type Copy = {
  title: string;
  lead: string;
  loading: string;
  unavailable: string;
  empty: string;
  online: string;
  offline: string;
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
    offline: 'Nem érhető el',
    open: 'Szerver megnyitása',
    version: 'Verzió',
    updated: 'Az állapot automatikusan frissül.',
  },
  de: {
    title: 'OMI Studio-Server',
    lead: 'Die aufgeführten Server arbeiten unabhängig voneinander. Nach der Auswahl verbindet sich der Browser direkt mit der gewählten Studio-Instanz; Manuskripte und Bearbeitungsverkehr laufen nicht über das Verzeichnis.',
    loading: 'Serverliste wird geladen…',
    unavailable: 'Das Serververzeichnis ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut.',
    empty: 'Derzeit sind keine öffentlichen Studio-Server online.',
    online: 'Aktuelles Lebenszeichen',
    offline: 'Nicht erreichbar',
    open: 'Server öffnen',
    version: 'Version',
    updated: 'Der Status wird automatisch aktualisiert.',
  },
  en: {
    title: 'OMI Studio servers',
    lead: 'Listed servers operate independently. After selection, your browser connects directly to that Studio instance; manuscripts and editing traffic do not pass through the directory.',
    loading: 'Loading the server list…',
    unavailable: 'The server directory is unavailable right now. Please try again later.',
    empty: 'There are no public Studio servers online right now.',
    online: 'Recent heartbeat',
    offline: 'Unavailable',
    open: 'Open server',
    version: 'Version',
    updated: 'Status refreshes automatically.',
  },
};

const REGISTRY_API = 'https://studio.openmanuscript.org/api/v1/server-registry/servers';

export default function ServersPage(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const copy = COPY[i18n.currentLocale] ?? COPY.en;
  const [servers, setServers] = useState<DirectoryServer[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(REGISTRY_API, {
          headers: {Accept: 'application/json'},
          cache: 'no-store',
          signal: AbortSignal.timeout(10_000),
        });
        if (!response.ok) throw new Error(`Registry returned HTTP ${response.status}`);
        const data = await response.json() as {servers?: DirectoryServer[]};
        if (!Array.isArray(data.servers)) throw new Error('Registry response is invalid.');
        if (active) {
          setServers(data.servers);
          setUnavailable(false);
        }
      } catch {
        if (active) setUnavailable(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    void load();
    const timer = window.setInterval(() => { void load(); }, 60_000);
    return () => {
      active = false;
      window.clearInterval(timer);
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
          {!loading && !unavailable && servers.length === 0 ? <p className={styles.notice}>{copy.empty}</p> : null}
          <div className={styles.grid}>
            {servers.map((server) => {
              const online = server.status === 'online';
              return (
                <article className={styles.card} key={server.id}>
                  <div className={styles.cardHeading}>
                    <h2>{server.name}</h2>
                    <span className={online ? styles.online : styles.offline}>
                      <span aria-hidden="true" className={styles.dot} />
                      {online ? copy.online : copy.offline}
                    </span>
                  </div>
                  <p className={styles.origin} dir="ltr">{server.origin}</p>
                  {server.softwareVersion ? (
                    <p className={styles.version}>{copy.version}: {server.softwareVersion}</p>
                  ) : null}
                  {online ? (
                    <a className={styles.open} href={server.origin} target="_blank" rel="noopener noreferrer">
                      {copy.open}
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>
          <p className={styles.updated}>{copy.updated}</p>
        </section>
      </main>
    </Layout>
  );
}
