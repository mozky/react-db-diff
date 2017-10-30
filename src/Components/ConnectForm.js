import React from 'react'
import '../CSS/ConnectForm.css'

export default class ConnectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      host: '',
      user: '',
      password: '',
      database: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submit(this.state)
  }

  render() {
    const { host, user, password, database } = this.state

    return (
      <form className="ConnectForm" onSubmit={this.handleSubmit}>
        <label>
          Host:
          <input type="text" name="host" value={host} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          User:
          <input type="text" name="user" value={user} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Database:
          <input type="text" name="database" value={database} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" disabled={ !(host && user && database) } />
      </form>
    )
  }
}
