import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries 
    // console.log(countries);
    // visited highlight stat
    const [visited, setVisited] = useState([])

    const handleVisitedCountries = (country) => {
        const visitedCountries = [...visited, country]
        setVisited(visitedCountries)
        console.log('visited clicked', country)
    }
    //visited flag state
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags) 
        console.log(visitedFlags)
    }

    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Countries Visited:  {countries.length}</h3>
            <h4>visited Flags: {visitedFlags.length}</h4>
         
                {visited.map((country, index) => <li key={index}>{country.name.common}</li>)}
                {visitedFlags.map((flag, index) => <img src={flag} key={index} width='100px'></img>)}
         
            <div className='countries' >
                { countries.map(country =>  
                <Country 
                key={country.cca3.cca3} 
                country={country}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}
                >
                
                </Country>)}
            </div>
        </div>
    );
};

export default Countries;

/**
 * 1. inline css (style object)
 * 
*/