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
    return (
      <div>
{/* <div className="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> Enter info below to begin
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> */}

        <div className="form-group">
            <h1>How many are in?</h1>
            <label id="player-number">Players</label>

            <form onSubmit={ (e) => {
                e.preventDefault()
                this.props.setNumberOfPlayers(document.getElementById('playerCount').value)
                this.props.selectQuestion()
                this.props.history.push(`/playerready`)
              } }>
              <input id='playerCount' type='text' name='playerCount'/>
              <button type='submit'>Start</button>
            </form>

        </div>

      </div>  
    )}
}

 
function mapStateToProps(state) {
  return {
    questions: state.questions,
    players: state.players
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectQuestion:selectQuestion, 
    setNumberOfPlayers:setNumberOfPlayers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame) ;