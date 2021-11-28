import React from 'react';
import './Searchbox.css';

let Searchbox = ({searchChange}) => {
    return (
        <div className='search'>
            <input 
                type='search' 
                placeholder='search something' 
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;