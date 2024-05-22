import React, { useState } from "react";

//Universal search functionality
function SearchForm({ searchFor }) {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  //Update fields
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              placeholder="Search Here"
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
