import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ nameFilter, handleUser }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={nameFilter}
        onChange={handleUser}
      />
    </label>
  );
};

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleUser: PropTypes.func.isRequired,
};
