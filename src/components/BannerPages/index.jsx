import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { toTitleCase } from '../../services/utils';
import './BannerPages.scss';

const BannerPages = ({ pageName }) => (
  <div className="banner-pages">
    <div className="banner-pages__container">
      <div className="banner-pages__body">
        <h2>{pageName.toUpperCase()}</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <FaAngleRight />
            </li>
            <li>{toTitleCase(pageName)}</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default BannerPages;
