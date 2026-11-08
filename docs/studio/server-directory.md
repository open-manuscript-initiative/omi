---
title: Automatic server directory
description: Automatic discovery and daily updates for public Open Manuscript Studio servers.
---

The [Studio server directory](/servers) lists public installations with a verified signal in the last 48 hours. Each card shows the server address, software version and last signal; the page also shows when its data was generated.

Public production installations register automatically using their existing canonical HTTPS address. No separate registration, DNS TXT record, token or scheduled task is needed. The central registry verifies each remote server through a fresh challenge at its public Studio identity endpoint, and reads the metadata from that server. The central server maintains its own entry directly, without sending network requests to itself.

Servers signal after startup and approximately once every 24 hours. The website reads the central directory on opening and refreshes every 24 hours while open. Changes require no website editing, rebuild, deployment or manual browser refresh. A 48-hour freshness window allows for a delayed daily signal. Once an entry is no longer recent, it is omitted from the next list update and returns after a successful signal.

Local, development and HTTP installations are not automatically listed. Private production installations can opt out. No manuscripts, account details or credentials are published. A recent signal indicates discovery-endpoint availability; it is not a real-time guarantee that every feature is working.

The implementation must first be deployed to the central API, participating Studio APIs and the website. Afterwards discovery and daily updates require no separate operator setup. Existing manual registrations remain compatible. See the [server operator documentation](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/server/SERVER_DIRECTORY.md) for deployment details and private-installation opt-out.

Opening the server selector inside Studio always requests the current central list directly, with browser caching disabled. Closing and reopening it triggers another request. The chooser does not wait for the website’s daily refresh. If the central list is unavailable, any packaged fallback is explicitly unverified.
