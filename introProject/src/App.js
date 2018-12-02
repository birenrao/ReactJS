import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Hi, I am react app</h1>
         <Person name="Biren" age="36"/>
         <Person  name="palak" age="33">My Hobby: Cricket</Person>
         <Person  name="Nikunj" age="36"/>
      </div>      
    );

  }
}

export default App;
