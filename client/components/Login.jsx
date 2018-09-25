import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser, loginError} from '../actions/login'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {       
      user_name: '',
      password: '' 
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
    componentDidMount() {
      this.props.dispatch(loginError(""));
  }
    updateDetails(e) {
      this.setState({[e.target.name]: e.target.value})
  }
    submit(e) {
      e.preventDefault()
      let {user_name, password} = this.state
      this.props.dispatch(loginUser({user_name, password}))
  }

  render() { 
    const {auth} = this.props
    return (
      <div>
        <form onSubmit={this.submit} className="form">
        <h1>Login</h1>
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <label>Username
        <input required placeholder="User Name" type="text" name="user_name" className="form-control" onChange={this.updateDetails}/>
        </label>
        <label>Password
        <input required placeholder="Password" type="password" name="password" className="form-control" onChange={this.updateDetails}/>
        </label>
        <div>
        <button type="submit" className="btn btn-secondary">Login</button>
        </div>
        <br/>
        <p>Or register here!</p>
        <br/>
        <Link to={`/register`}><button type="button" className="btn btn-secondary">Register</button></Link>
        </form>
      </div>
     );
  }
}
 

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)