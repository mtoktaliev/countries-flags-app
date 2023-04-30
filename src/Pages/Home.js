import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../components/List";
import { ALL_COUNTRIES } from "../config";
import Card from "../components/Card";
import Controls from '../components/Controls';
import { Link } from "react-router-dom";

const Home = ({countries, setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    
    const handleSearch = (search, region) => {
        let data = [...countries];
        if(region) {
            data = data.filter(c => c.region.toLowerCase().includes(region.toLowerCase()))
        }
        if(search) {
            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data)
    }
  
    useEffect(() => {
        if(!countries.length)
        axios.get(ALL_COUNTRIES)
        .then(
          ({data}) => setCountries(data)
          )
          // eslint-disable-next-line
        }, [])

    useEffect(() => {
        handleSearch()
        // eslint-disable-next-line
    }, [countries])
    
    return (
        <div>
          <Controls handleSearch={handleSearch} />
          <List>
            {
                filteredCountries.map(country => (
                    <Link to={`/name/${country.name.common.toLowerCase()}`}>
                        <Card country={country} />
                    </Link>
                ))
            }
        </List>  
        </div>
    );
};

export default Home;