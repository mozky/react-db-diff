import React, { Component } from 'react'
import DBConnector from './Containers/DBConnector'
import './CSS/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="App-title">Database Differ</h1>
          <DBConnector />
        </div>
      </div>
    )
  }
}

export default App
