import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { filterByCode } from '../config';
import { Link } from 'react-router-dom';

const Info = ({country}) => {
    console.log(country)
    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if(country.borders && country.borders.length)
        axios.get(filterByCode(country.borders))
            .then(
                ({data}) => setNeighbors(data.map(c => c.name.common))
            )
    }, [country.borders])
    return (
        <div className='container max-w-screen-xl mx-auto my-5 flex items-center gap-10'>
            <img className='max-w-screen-sm rounded-2xl' src={country.flags.svg} alt={country.flags.alt} />
            <div>
                <h2 className='text-2xl font-semibold mb-2'>{country.name.common}</h2>
                <ul>
                    <li className='font-thin'><span className='font-normal'>Native name: </span>{country.name.official}</li>
                    <li className='font-thin'><span className='font-normal'>Population: </span>{country.population}</li>
                    <li className='font-thin'><span className='font-normal'>Region: </span>{country.region}</li>
                    <li className='font-thin'><span className='font-normal'>Capital: </span>{country.capital}</li>
                    <li className='font-thin'><span className='font-normal'>Languages: </span>{Object.values(country.languages).toString().replace(',', ', ')}</li>
                    <div>
                        <p className='mt-4 font-medium'>Border countries:</p>
                        {!country.borders || !country.borders.length ? (
                            <p className='text-gray-300'>There is no border countries</p>
                        ) : (
                        <ul className='flex gap-5 max-w-lg flex-wrap mt-2'>
                            {
                                neighbors.map(item => (
                                    <Link to={`/name/${item}`}><li className='bg-white py-1 px-4 rounded-lg shadow-lg hover:shadow-xl'>{item}</li></Link>
                                ))
                            }
                            <li></li>
                        </ul>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Info;