import React from 'react';
import Select from 'react-select'

const SelectComponent = ({options, region, setRegion}) => {
    return (
        <div>
            <Select 
            options={options} 
            placeholder='Filter by region'
            isClearable
            isSearchable={false}
            value={region}
            onChange={setRegion}
            />
        </div>
    );
};

export default SelectComponent;