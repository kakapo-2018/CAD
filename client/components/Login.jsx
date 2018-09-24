import React, { Component  } from 'react';
import {Link} from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>Login

        <Link to={`/startgame`}><button type="button" className="btn btn-secondary">Submit</button></Link>
      </div>
     );
  }
}
 
export default Login;