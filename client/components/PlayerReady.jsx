import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PlayerReady extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
<div>
  <h2>Player ... ready?</h2>
  <Link to={`/playerhand`}><button type="button" className="btn btn-secondary">Let's Go</button></Link>
</div>

     );
  }
}
 
export default PlayerReady; 