import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

/**
 * Keep the website navigation in one panel.
 *
 * Docusaurus normally places the site links and the documentation sidebar in
 * two horizontally sliding panels. That makes the left menu button reveal an
 * intermediate menu before visitors can reach the documentation navigation.
 * Rendering both sources in one scrollable panel makes the first click useful.
 */
export default function NavbarMobileSidebarLayout({header, primaryMenu}) {
  const secondaryMenu = useNavbarSecondaryMenu();

  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        'navbar-sidebar',
      )}>
      {header}
      <div className="omi-navbar-sidebar__content menu">
        {primaryMenu}
        {secondaryMenu.content ? (
          <div className="omi-navbar-sidebar__documentation">
            {secondaryMenu.content}
          </div>
        ) : null}
      </div>
    </div>
  );
}
