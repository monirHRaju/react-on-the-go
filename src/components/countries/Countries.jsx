import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);
    
    const handleVisitedCountries = (country) => {
        console.log('visited clicked', country)
    }
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Countries Visited: </h3>
            <div className='countries' >
                { countries.map(country =>  
                <Country 
                key={country.cca3.cca3} 
                country={country}
                handleVisitedCountries = {handleVisitedCountries}
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