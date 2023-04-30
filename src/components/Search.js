import React from 'react';

const Search = ({setSearch, search}) => {
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className='shadow-lg py-2 px-5 rounded-lg my-5' type="search" placeholder='Search for a country...' />
        </div>
    );
};

export default Search;