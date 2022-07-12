import React from "react";

function Search({ searchValues, onChangeSearch }) {

    
  function handleChange(event) {
    onChangeSearch(event.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchValues} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;