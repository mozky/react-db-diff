import React from 'react'
import Mysql from 'mysql'

import ConnectForm from '../Components/ConnectForm'

export default class DBConnector extends React.Component {
  constructor(props) {
    super(props)
    this.attemptConnect = this.attemptConnect.bind(this)
  }

  attemptConnect(connectionCredentials) {
    const connection = Mysql.createConnection(connectionCredentials)

    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error
      console.log('The solution is: ', results[0].solution)
    })

    connection.end()
  }

  render() {
    return (
      <ConnectForm submit={this.attemptConnect}/>
    )
  }
}
