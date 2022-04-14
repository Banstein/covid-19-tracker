/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './OneCountry.css';

function OneCountry({ name, today_confirmed }) {
  return (
    <NavLink to={`/${name}`}>
      <li className="card">
        <div>
          <img className="map" src="https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/ad/vector.svg" alt="map" />
          <i className="fa-regular fa-circle-right" />
        </div>
        <h5>{name}</h5>
        <h6>{today_confirmed}</h6>
      </li>
    </NavLink>
  );
}

OneCountry.propTypes = {
  name: PropTypes.string.isRequired,
  today_confirmed: PropTypes.number.isRequired,
};

export default OneCountry;
