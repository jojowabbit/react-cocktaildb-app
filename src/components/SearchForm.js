import React, { useEffect, useRef } from "react";

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    // console.log(searchValue.current.value) , use ref returns a object with current as key
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">Search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite here</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={handleSearch}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
