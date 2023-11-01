import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from './Button';

export const CountryInfo = () => {
  const {state} = useLocation();
  

  /**
   * 
   * @param {*} nativeName 
   * @returns The native name of the country 
   */
  const findNativeName = (nativeName) =>{

    const keys = Object.keys(nativeName)

    for (const key of Object.keys(nativeName)){

     if (`${key}` === keys[0]){

      return nativeName[key].official;
     }
    }

  }

  /**
   * 
   * @param {*} languages 
   * @returns put space between the language name
   */
    const retrievLanguages = (languages) =>{

      let result ='';
      

      for (const value of Object.values(languages)){
         result = result.concat(' ',value);
      }

      return result
    }


  return (
    <>

    <button className='back-button'>
      Back
    </button>


    <div className='country-info'>
      <img
      alt=''
      src={state?.country.flags.svg}
      />  

    <div className='country-info-details'>
      <h1> {state?.country.name.common} </h1>
      <p> <strong>Native Name: </strong> {state.country === undefined ?'Empty' : findNativeName(state?.country.name.nativeName)} </p>
      <p> <strong>Population: </strong> {state?.country.population} </p>
      <p> <strong>Region: </strong> {state?.country.region} </p>
      <p> <strong>Sub Region: </strong> {state?.country.subregion} </p>
      <p> <strong>Capital: </strong> {state?.country.capital} </p>
      <p> <strong>Top Level Domain: </strong> {state?.country.population} </p>
      <p> <strong>Currencies : </strong> {state?.country.population} </p>
      <p> <strong>Language: </strong> { state.country === undefined ? ' ': retrievLanguages(state?.country.languages)} </p>
      <h3> <strong>Border Countries: </strong> {state.country === undefined ? null : state?.country.borders.map((border)=>{
        return (
          <>
          <button>
            {border}
          </button>
          </>
        )
      })} </h3>
    </div>
    </div>
   
    </>
  )
}
