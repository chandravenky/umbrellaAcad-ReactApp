import React from 'react';
import CardList from '../components/CardList';
import { siblings } from '../siblings';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            siblings: siblings,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render () {

        const {siblings, searchfield} = this.state;

        const filteredSiblings = siblings.filter(sibling => {
            return sibling.Nickname.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (
            <div>
                <h1 className = 'tc textindex f2'>Umbrella Academy  Search  App</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList siblings = { filteredSiblings }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}
}

export default App;