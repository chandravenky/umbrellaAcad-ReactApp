import React from 'react';

const SearchBox = ({searchChange}) => {

    return (

        <div className = 'pa2 tc'>

            <input className = 'pa2 ba b--black bg-lightest-blue' type = 'search' placeholder = 'Search Child Heroes' onChange = {searchChange} />

        </div>
            )

}

export default SearchBox;