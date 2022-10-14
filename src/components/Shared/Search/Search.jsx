import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { GiSettingsKnobs } from 'react-icons/gi';

import './styles.scss'

const Search = () => {
  return (
    <div className='search'>
        <div className='search-icon'>
              <IoMdSearch size={25} />
        </div>
        <div className='search-input'>
              <input type="text"  placeholder='Search'/>
        </div>
        <div className='search-icon'>
              <GiSettingsKnobs size={25} />
        </div>
        
    </div>
  )
}

export default Search;