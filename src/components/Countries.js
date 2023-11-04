import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Filter from './Filter';
const url = 'https://restcountries.com/v3.1/all'
export const Countries = () => {

    
    const [countries, setCountries] = useState([]);
    const fetchCountries = async ()=>{
        const res = await fetch(url)
        const countries = await res.json()
        setCountries(countries)
    }
    useEffect(()=>{
        fetchCountries();
    }, [])
  return (
    <>
    <Filter
     searchInput={null}
     setSearchInput={null}
     setFiltered={null}
     setCountries={setCountries}
     countries={countries}
    />
    <section className='grid'>

    {countries.map((country)=>{
        const {id} = country
        return( 
            <Link to={`/countries/${country.name.common}`} state={{country}}>
        <article key={id}>
            <img
            alt=''
            src={country.flags.svg}
            />
            <div className='details'> 

            <h1>{country.name.common} </h1>
            <p> <strong>Population: </strong> {country.population} </p>
            <p> <strong>Region: </strong> {country.region} </p>
            <p> <strong>Capital: </strong> {country.capital} </p>
            
            </div>
        </article>
             </Link>
    )} )}
    </section>
    </>
  )
}
