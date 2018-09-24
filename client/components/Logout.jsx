import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'


class Logout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {auth, logout } = this.props
    return (
        <div className="navbar-end">
            {auth.isAuthenticated
              ? <Link to="/" onClick={this.props.logout} className="btn btn-secondary">Logout</Link>
              : 
                <Link  className="btn btn-secondary" to='/login'>Login</Link>
            }
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)