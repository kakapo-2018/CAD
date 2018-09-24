import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class StartRound extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
<div>
  <h2>And the winner is....</h2>
  Start new round?
  <Link to={`/playerready`}><button type="button" className="btn btn-secondary">Let's Go</button></Link>
  <Link to={`/startgame`}><button type="button" className="btn btn-secondary">Finish Up</button></Link>
</div>

     );
  }
}
 
export default StartRound;