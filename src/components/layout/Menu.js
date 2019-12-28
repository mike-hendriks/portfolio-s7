import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from './../prismic-elements';

/**
 * Site header/nav component
 */
const Menu = (menuDoc) => {
  if (menuDoc) {
    return (
      <header className="site-header container">
        <RouterLink to="./">
          <div key="test" className="logo">Portfolio Mike Hendriks</div>
        </RouterLink>
        <nav>
          <ul>
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/leeswijzer">
              <span>Leeswijzer</span>
            </a>
          </li>

            {/* {menuDoc.menuDoc.data.menu_items.map(menuLink => (
              <MenuLink
                menuLink={menuLink}
              />
            ))} */}
          </ul>
        </nav>
      </header>
    );
  } else {
    return ('Menu not found');
  }
  return null;
};

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li key={RichText.asText(menuLink.page_title)}>
      <PrismicLink link={menuLink.page_link}>
        {RichText.asText(menuLink.page_title)}
      </PrismicLink>
    </li>
  );
};

export default Menu;