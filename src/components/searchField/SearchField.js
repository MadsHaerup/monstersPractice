import React from 'react';
import './SearchField.scss';
export const SearchField = ({placeholder, handleChange}) => {
  return (
    <input
        className="searchField"
        type="search"
        placeholder={placeholder} 
        onChange={handleChange}
    />
  )
}
