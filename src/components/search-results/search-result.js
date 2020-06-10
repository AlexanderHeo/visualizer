import React from 'react';
import PropTypes from 'prop-types';

import './search-result.css';

function SearchResult({ id, title, city, state, date, onResultClick }) {
  const onClick = () => onResultClick(id);

  return (
    <div
      className="search-result"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <h4>{title}</h4>
      <p>
        {city}, {state} &bull; {date}
      </p>
    </div>
  );
}

SearchResult.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onResultClick: PropTypes.func.isRequired,
};

export default SearchResult;
