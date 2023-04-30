import React from 'react';

const Card = ({country, onClick}) => {
    return (
        <div onClick={onClick} className='bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer'>
            <img className='block w-full h-40 object-cover object-center shadow-lg' src={country.flags.svg} alt="img" />  
            <div className='p-5'>
                <h3 className='text-lg font-semibold'>{country.name.common}</h3>
                <ul>
                    <li className='font-light'><span className='font-normal'>Population </span>{country.population.toLocaleString()}</li>
                    <li className='font-light'><span className='font-normal'>Region </span>{country.region}</li>
                    <li className='font-light'><span className='font-normal'>Capital </span>{country.capital[0]}</li>
                </ul>
            </div>
        </div>
    );
};

export default Card;