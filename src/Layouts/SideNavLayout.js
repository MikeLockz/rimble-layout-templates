import React, { useState } from "react";
import { Box, Heading, Icon } from "rimble-ui";
import "./SideNavLayout.css";

function SideNavLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="grid-container">
      <div className="menu-icon" onClick={e => setIsNavOpen(!isNavOpen)}>
        <Icon name="Menu" classNameName="header__menu" />
      </div>

      <header className="header">
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </header>

      <aside className={(isNavOpen ? "active" : "") + " sidenav"}>
        <div
          className="sidenav__close-icon"
          onClick={e => setIsNavOpen(!isNavOpen)}
        >
          <Icon name="Close" classNameName="sidenav__brand-close" />
        </div>
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Item One</li>
          <li className="sidenav__list-item">Item Two</li>
          <li className="sidenav__list-item">Item Three</li>
          <li className="sidenav__list-item">Item Four</li>
          <li className="sidenav__list-item">Item Five</li>
        </ul>
      </aside>

      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>

        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
        </div>

        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__copyright">&copy; 2018 MTH</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </footer>
    </div>
  );
}

export default SideNavLayout;
