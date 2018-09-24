import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class PlayerReady extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
<div>
  <h2>Player {this.props.players.currentPlayersTurn} ready?</h2>
  <Link to={`/playerhand`}><button type="button" className="btn btn-secondary">Let's Go</button></Link>
</div>

     );
  }
}


function mapStateToProps(state){
  return {
    players: (state.players)
  }
}
 
export default connect(mapStateToProps)(PlayerReady)