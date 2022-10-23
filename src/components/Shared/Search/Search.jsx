import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { GiSettingsKnobs } from 'react-icons/gi';

import './styles.scss'
import SearchDropdown from './SearchDropdown';

const Search = () => {
      const [showSearch, setShowSearch] = useState('DropdownSearch DisNone')
      return (
            <>
                  <div className='search'>
                        <div className='search-icon'>
                              <IoMdSearch size={25} />
                        </div>
                        <div className='search-input'>
                              <input type="text" placeholder='Search' />
                        </div>
                        <div className='search-icon'>
                              <GiSettingsKnobs onClick={() => setShowSearch(showSearch === 'DropdownSearch DisNone' ? 'DropdownSearch DisBlock' : 'DropdownSearch DisNone')} size={25} />
                        </div>
                        <div className={showSearch}>
                              <SearchDropdown />
                        </div>
                  </div>
            </>
      )
}

export default Search;