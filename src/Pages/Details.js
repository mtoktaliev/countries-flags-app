import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { searchByCountry } from '../config';
import axios from 'axios';
import Info from '../components/Info';

const Details = () => {

    const {name} = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(searchByCountry(name))
        .then(
          ({data}) => setCountry(data[0])
          )
    }, [name])

    return (
        <div className='container max-w-screen-xl mx-auto my-5'>
            <button className='bg-white shadow-lg px-5 py-2 rounded-lg hover:shadow-2xl transition-all' onClick={() => navigate(-1)}>Back</button>
            {country && <Info country={country} />}
        </div>
    );
};

export default Details;