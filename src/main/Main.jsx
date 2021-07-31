import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./main.css";
function Main() {

    const [countries, setCountries] = useState([
    ]);

    // https://disease.sh/v3/covid-19/countries
    // going to using USEEFFECT = it runs a piece of code based o a given condition


    useEffect(() => {
   
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2,
                        }));
                        setCountries(countries);
                });
        };
        getCountriesData();
    }, []);




    return (
        <div class="main">

            <div className="main__header">
                <h1> COVID-19 TRACKER</h1>
                <FormControl className="main__dropdown">
                    <Select variant="outlined" value="abc">

                        {
                            countries.map(country => (
                                <MenuItem value={country.value}> {country.name} </MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>
            </div>

        </div>

        // header
        // title + dropdown input

        // info box
        // info box
        // info box

        // table
        // graph
        // map
    );
}

export default Main;
