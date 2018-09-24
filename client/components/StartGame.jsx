import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
     <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> Enter info below to begin
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      <h1>Select Players</h1>
      <p>Pick number of players</p>

<Link to={`/playerready`}><button type="button" className="btn btn-secondary">Start</button></Link>
      
    </div> 
    );
  }
}
 
export default StartGame;