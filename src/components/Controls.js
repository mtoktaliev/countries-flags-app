import React, { useEffect, useState } from 'react';
import Search from './Search';
import SelectComponent from './SelectComponent';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
    { value: 'Asia', label: 'Asia' }
  ]

const Controls = ({handleSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        handleSearch(search, regionValue)
        // eslint-disable-next-line
    }, [search, region])
    return (
        <div className='flex justify-between items-center container max-w-screen-xl mx-auto'>
            <Search search={search} setSearch={setSearch} />
            <SelectComponent 
                options={options} 
                region={region}
                setRegion={setRegion}
            />
        </div>
    );
};

export default Controls;