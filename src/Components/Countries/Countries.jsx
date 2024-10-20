import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = (country) => {
       const newVisitedCountry = [...visitedCountry, country];
       setVisitedCountry(newVisitedCountry);
    }

    const handleVisitedFlags = (country) =>{
        const newVisitedFlags = [...visitedFlags, country];
        setVisitedFlags(newVisitedFlags)
    }


    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
            <h4>Visited Country: {visitedCountry.length}</h4>
            <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>

            </div>
                <div className="flags-container">
                    {
                        visitedFlags.map(flag=> <img src={flag} key={flag.cca3}></img>)
                    }
                </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} country={country}  handleVisitedCountry = {handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;