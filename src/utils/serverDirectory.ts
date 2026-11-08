export const DIRECTORY_REFRESH_MS = 24 * 60 * 60 * 1000;
const MAX_HEARTBEAT_AGE_MS = 48 * 60 * 60 * 1000;

export type DirectoryServer = {
  id: string;
  name: string;
  origin: string;
  softwareVersion: string | null;
  lastSeenAt: string;
};

export type DirectorySnapshot = {
  generatedAt: string;
  servers: DirectoryServer[];
};

export function parseDirectorySnapshot(value: unknown, now = Date.now()): DirectorySnapshot {
  if (!value || typeof value !== 'object') throw new Error('Invalid directory.');
  const data = value as Record<string, unknown>;
  const generatedAt = typeof data.generatedAt === 'string' ? Date.parse(data.generatedAt) : NaN;
  if (!Array.isArray(data.servers) || !Number.isFinite(generatedAt) || generatedAt > now + 60_000 || now - generatedAt >= DIRECTORY_REFRESH_MS) {
    throw new Error('Invalid or expired directory.');
  }
  const servers: DirectoryServer[] = [];
  const origins = new Set<string>();
  for (const item of data.servers) {
    if (!item || typeof item !== 'object') throw new Error('Invalid server.');
    const server = item as Record<string, unknown>;
    if (server.status !== 'online') continue;
    const seenAt = typeof server.lastSeenAt === 'string' ? Date.parse(server.lastSeenAt) : NaN;
    if (!Number.isFinite(seenAt) || seenAt > now + 60_000 || now - seenAt > MAX_HEARTBEAT_AGE_MS) continue;
    if (typeof server.id !== 'string' || !server.id || typeof server.name !== 'string' || !server.name.trim() || typeof server.origin !== 'string') {
      throw new Error('Invalid server.');
    }
    const url = new URL(server.origin);
    if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
      throw new Error('Invalid server origin.');
    }
    if (origins.has(url.origin)) continue;
    origins.add(url.origin);
    servers.push({
      id: server.id,
      name: server.name,
      origin: url.origin,
      softwareVersion: typeof server.softwareVersion === 'string' ? server.softwareVersion : null,
      lastSeenAt: new Date(seenAt).toISOString(),
    });
  }
  return {generatedAt: new Date(generatedAt).toISOString(), servers};
}
