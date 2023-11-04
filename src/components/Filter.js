import React, { useState } from "react";
const url = "https://restcountries.com/v3.1/region/";
const resetURl = 'https://restcountries.com/v3.1/all'

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  const regions = [
    { id: 0, description: 'Filter by Region'},
    { id: 1, description: "Africa" },
    { id: 2, description: "America" },
    { id: 3, description: "Asia" },
    { id: 4, description: "Europe" },
    { id: 5, description: "Oceania" },
  ];


  const filterByRegion = (value) => {
    console.log("something just happened", value);
    debugger;
    value == 0 ? reset(): fetchCountriesByRegion(regions[value].description);
  };

  const fetchCountriesByRegion = async (region) => {
    const res = await fetch(url + region);
    const data = await res.json();
    setCountries(data);
  };
  const reset = async () => {
    const res = await fetch(resetURl);
    const data = await res.json();
    setCountries(data);
  }

  const search = (searchInput) => {
    console.log(Array.isArray(countries))
    debugger
    searchInput.split('').length > 1 ? countries.filter((el)=> el.name ===  searchInput): reset()
    
    
  }
  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
          autoComplete="off"
          onChange={(e)=> search(e.target.value)}
        />
      </form>

      <div className="region-filter">
        <select
          name="select"
          id="select"
          className="select"
          onChange={(e) => filterByRegion(e.target.value)}
          value={regions.description}
        >
          {regions.map((region) => {
            return (
              <>
                <option value={region.id}>{region.description}</option>
              </>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Filter;
