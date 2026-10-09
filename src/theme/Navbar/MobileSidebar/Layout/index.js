import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import DocumentationSidebarMenu from '@site/src/components/DocumentationSidebarMenu';

/**
 * Keep the documentation navigation in the mobile panel and expose the
 * language switcher there as well as in the desktop navbar.
 *
 * The documentation sidebar is rendered independently from the current route,
 * so the first menu click opens it directly on the homepage as well as on docs
 * and other public pages.
 */
export default function NavbarMobileSidebarLayout({header}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        'navbar-sidebar',
      )}>
      {header}
      <div className="omi-navbar-sidebar__content menu">
        <ul className="omi-navbar-sidebar__languages menu__list">
          <LocaleDropdownNavbarItem mobile dropdownItemsBefore={[]} dropdownItemsAfter={[]} />
        </ul>
        <DocumentationSidebarMenu />
      </div>
    </div>
  );
}
