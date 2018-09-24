import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectQuestion, setNumberOfPlayers} from '../actions/index'
import {bindActionCreators} from 'redux'

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }

 

  render() {
    console.log('players', this.props.players)
    return (
      <div>
     {/* <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> Enter info below to begin
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> */}

        <div class="form-group">
            <h1>How many are in?</h1>
            <label id="player-number">Players</label>

<form onSubmit={ (e) => {
    e.preventDefault()
    console.log(this.props)
    console.log(document.getElementById('playerCount').value)
    this.props.setNumberOfPlayers(document.getElementById('playerCount').value)
  } }>
  <input id='playerCount' type='text' name='playerCount'/>
  <button type='submit'>Start</button>
</form>

<Link to={`/playerready`}><button 
type="button" 
className="btn btn-secondary"
onClick={this.props.selectQuestion}>Start</button></Link>

{/* <select className="form-control" id="player-number">
<option className='' value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
</select>
<input className="form-control" id="player-number2" type='submit' value='submit' onClick={console.log(document.getElementById('player-number'))} />
</div> */}
        </div>

      </div>  
    )}
}


{/* function setPlayers () {
  // let playerNumber = document.getElementById('player-number2').value;
  console.log('harrow', )
  
} */}

 
function mapStateToProps(state) {
  return {
    questions: state.questions,
    players: state.players
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectQuestion:selectQuestion, 
    setNumberOfPlayers:setNumberOfPlayers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame) ;