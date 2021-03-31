import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
        <div className = "f1 tc">
        <h1>Hello World!</h1>
        <p>Venky's React App</p>
        <p>{this.props.greeting}</p>
        </div>
        );
    }
}
export default Hello;