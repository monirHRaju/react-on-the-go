import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false)
    // console.log(handleVisitedCountries)
    const handleVisited = () => {
        //toggle process 1
        // if(visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }

        // toggle process 2
        setVisited(visited ? false : true)

        // toggle process 3
        setVisited(!visited)
        
        //call another function for count visited country
        //call multiple functions in a button
        handleVisitedCountries(country)
    }
    
    return (
        <div className={`country ${visited && 'visited' }`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} width='100px' alt="" />
            <h3 className='country-title'>{country.name.common}</h3>  
            <p>{country.capital.capital}</p>  
            <p>Population: {country.population.population}</p>  
            <p>Area: {country.area.area} a {country.area.area > 30000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;

// {
//     "name": {
//         "common": "Jamaica",
//         "official": "Jamaica"
//     },
//     "ccn3": {
//         "ccn3": "388"
//     },
//     "currencies": {
//         "currencies": {
//             "JMD": {
//                 "name": "Jamaican dollar",
//                 "symbol": "$"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Kingston"
//         ]
//     },
//     "region": {
//         "region": "Americas"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "jam": "Jamaican Patois"
//         }
//     },
//     "area": {
//         "area": 10991
//     },
//     "cca3": {
//         "cca3": "JAM"
//     },
//     "population": {
//         "population": 2961161
//     },
//     "continents": {
//         "continents": [
//             "North America"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/jm.png",
//             "svg": "https://flagcdn.com/jm.svg",
//             "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
//         }
//     }
// }