import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import { siblings_all } from '../siblings';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { Component } from 'react';

function App () {

    const [siblings, setSiblings] = useState(siblings_all);
    const [searchfield, setSearchfield] = useState('')

    const onSearchChange = (event) =>{
        setSearchfield(event.target.value)
    }

    const filteredSiblings = siblings.filter(sibling => {
        return sibling.Nickname.toLowerCase().includes(searchfield.toLowerCase());
    })

        return (
            <div>
                <h1 className = 'tc textindex f2'>Umbrella Academy  Search  App</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList siblings = { filteredSiblings }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}


export default App;