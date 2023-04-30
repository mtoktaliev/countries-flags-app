import React from 'react';

const List = ({children}) => {
    return (
        <div className='container max-w-screen-xl mx-auto grid grid-cols-4 gap-10'>
            {children}
        </div>
    );
};

export default List;