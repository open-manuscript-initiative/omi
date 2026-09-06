import React, {useMemo} from 'react';
import {useLocation} from '@docusaurus/router';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {useLatestVersion} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import clsx from 'clsx';
import DocSidebarItems from '@theme/DocSidebarItems';

import sidebars from '../../../sidebars.js';

const SIDEBAR_ID = 'tutorialSidebar';

function getTranslatedLabel(item, translations) {
  const label = item.label ?? item.id;

  if (!label) return '';

  if (item.type === 'category') {
    const id = `sidebar.${SIDEBAR_ID}.category.${item.key ?? label}`;
    return translations[id] ?? label;
  }

  if (item.type === 'link') {
    const id = `sidebar.${SIDEBAR_ID}.link.${item.key ?? label}`;
    return translations[id] ?? label;
  }

  const id = `sidebar.${SIDEBAR_ID}.doc.${item.key ?? label}`;
  return translations[id] ?? label;
}

function getCategoryHref(link, pathByDocId) {
  if (!link) return undefined;

  if (link.type === 'generated-index') {
    return pathByDocId.get(link.slug);
  }

  if (link.type === 'doc') {
    return pathByDocId.get(link.id);
  }

  if (link.type === 'link') {
    return link.href;
  }

  return undefined;
}

function toRenderableSidebarItem(item, pathByDocId, docsPath, translations) {
  if (typeof item === 'string') {
    return {
      type: 'link',
      label: item,
      href: pathByDocId.get(item) ?? `${docsPath}/${item}`,
      docId: item,
    };
  }

  if (item.type === 'category') {
    return {
      type: 'category',
      label: getTranslatedLabel(item, translations),
      collapsible: item.collapsible ?? true,
      collapsed: item.collapsed ?? true,
      href: getCategoryHref(item.link, pathByDocId),
      className: item.className,
      customProps: item.customProps,
      items: item.items.map((child) =>
        toRenderableSidebarItem(
          child,
          pathByDocId,
          docsPath,
          translations,
        ),
      ),
    };
  }

  if (item.type === 'doc' || item.type === 'ref') {
    return {
      type: 'link',
      label: getTranslatedLabel(item, translations),
      href: pathByDocId.get(item.id) ?? `${docsPath}/${item.id}`,
      className: item.className,
      customProps: item.customProps,
      docId: item.id,
    };
  }

  if (item.type === 'link') {
    return {
      ...item,
      label: getTranslatedLabel(item, translations),
    };
  }

  return item;
}

/**
 * Render the documentation sidebar independently from the current route.
 *
 * Docusaurus normally provides these items only while a documentation page is
 * active. Resolving the routes from the current docs version makes the same
 * internal menu available on the homepage and every other website page too.
 */
export default function DocumentationSidebarMenu() {
  const {pathname} = useLocation();
  const mobileSidebar = useNavbarMobileSidebar();
  const docsVersion = useLatestVersion();
  const translations = usePluginData('omi-documentation-menu');
  const items = useMemo(() => {
    const pathByDocId = new Map(
      docsVersion.docs.map((doc) => [doc.id, doc.path]),
    );

    return sidebars[SIDEBAR_ID].map((item) =>
      toRenderableSidebarItem(
        item,
        pathByDocId,
        docsVersion.path,
        translations,
      ),
    );
  }, [docsVersion, translations]);

  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
      <DocSidebarItems
        items={items}
        activePath={pathname}
        onItemClick={(item) => {
          if (item.type === 'link' || (item.type === 'category' && item.href)) {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
}
