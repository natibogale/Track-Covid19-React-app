import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import "./main.css";
import InfoBox from "../InfoBox";
import Map from "../Map";

function Main() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});

    // https://disease.sh/v3/covid-19/countries
    // going to using USEEFFECT = it runs a piece of code based o a given condition


useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
        setCountryInfo(data)
    }); 
}, []);


    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }));
                    setCountries(countries);
                });
        };
        getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
        const url = countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data)
                setCountry(countryCode);
            });
    };
    return (
        <div class="main">
            <div className="main__left">
                <div className="main__header">
                    {/*  header */}
                    {/*  title + dropdown input */}
                    <h1> COVID-19 TRACKER</h1>
                    <FormControl className="main__dropdown">
                        <Select
                            variant="outlined"
                            value={country}
                            onChange={onCountryChange}
                        >
                            <MenuItem value="worldwide"> Worldwide </MenuItem>

                            {countries.map((country) => (
                                <MenuItem value={country.value}> {country.name} </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="main__stats">
                    <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
                    <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
                    <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />

                    {/* info box corona virus cases */}
                    {/* info box  corona virus recoveries*/}
                    {/* info box */}
                </div>
                <Map />
            </div>

            <Card className="main__right">
                <CardContent>
                    <h3>Live cases by country</h3>
                    {/* table */}

                    <h3>Worldwide new cases</h3>
                    {/* graph */}
                </CardContent>

            </Card>
        </div>
    );
}

export default Main;
