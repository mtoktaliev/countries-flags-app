import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className='bg-gray-600 w-full py-3'>
            <div className='container max-w-screen-xl mx-auto'>
                <Link to='/'>
                <h1 class="text-white text-2xl font-bold">
                    Where in the world?
                </h1>
                </Link>
            </div>
        </div>
    );
};

export default Header;