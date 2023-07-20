import './header.scss';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { FaBars, FaUser, FaCog, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import GCN_logo from '../../assets/icons/GCN-logo.png';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);

  const handleClick = () => {
    if (window.innerWidth >= 1200) {
      return null;
    }
    console.log(!menu);
    setMenu(!menu);
  };

  const handleClickSettings = () => setSettings(!settings);

  return (
    <header className="header">
      <div className="menu__container">

        <div className="menu__image-container">
          <NavLink to="/">
            <img src={GCN_logo} alt="" />
          </NavLink>
        </div>

        <nav className="navbar">
          <div className="navbar__toggle" onClick={handleClick}>
            <FaBars style={{ fill: 'white', fontSize: '20px' }} />
          </div>
          <div className={`navbar__overlay ${menu ? 'show' : ''}`} onClick={handleClick} />
          <ul className={`navbar__menu ${menu ? 'show' : ''}`}>
            <li className="navbar__back-btn" onClick={handleClick}>
              <span>Back</span>
              {' '}
              <FaAngleRight />
            </li>
            <li className="navbar__link" onClick={handleClick}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__link" onClick={handleClick}>
              <NavLink
                to="cab-list"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Cab List
              </NavLink>
            </li>
          </ul>
        </nav>

        <ul className="menu__right-section">

          <li className="menu__right-section-front">
            <select name="currency" id="currency-front">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="cop">COP</option>
            </select>
          </li>

          <li className="menu__right-section-front">
            <select name="lang" id="lang-front">
              <option value="esp">ESP</option>
              <option value="eng">ENG</option>
            </select>
          </li>

          <li className="menu__right-section-user">
            <FaUser style={{ fill: 'white', fontSize: '20px' }} />
          </li>

          <li className="menu__right-section-settings">
            <FaCog style={{ fill: 'white', fontSize: '20px' }} onClick={handleClickSettings} />
            <ul className={`menu__right-section-settings--open ${settings ? 'show' : ''}`}>
              <li>
                <select name="currency" id="currency">
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="cop">COP</option>
                </select>
              </li>
              <li>
                <select name="lang" id="lang">
                  <option value="esp">ESP</option>
                  <option value="eng">ENG</option>
                </select>
              </li>
            </ul>
          </li>

        </ul>

      </div>
    </header>
  );
};

export default Header;
