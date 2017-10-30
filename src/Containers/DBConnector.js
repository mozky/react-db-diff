import React from 'react'

import ConnectForm from '../Components/ConnectForm'

export default class DBConnector extends React.Component {
  constructor(props) {
    super(props)
    this.attemptConnect = this.attemptConnect.bind(this)
  }

  attemptConnect(connectionCredentials) {
    // const connection = Mysql.createConnection(connectionCredentials)
    //
    // connection.connect()
    //
    // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //   if (error) throw error
    //   console.log('The solution is: ', results[0].solution)
    // })
    //
    // connection.end()
    fetch('//localhost:4200/connect', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(connectionCredentials),
    })
      .then(function(response) {
        if (response.ok && response.status === 200) return response.json()
      })
      .then((body) => {
        console.log(body)
      })
  }

  render() {
    return (
      <ConnectForm submit={this.attemptConnect}/>
    )
  }
}
