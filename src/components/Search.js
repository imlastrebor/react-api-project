import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={props.inputValue}
        onChange={props.searchHandler}
      />
    </div>
  );
};

export default Search;
