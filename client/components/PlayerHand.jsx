import React, { Component } from 'react';
import Question from './Question'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePlayerTurn } from '../actions';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    

      
    <div>
       <div className="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Take your pick</strong> Then pass to next player
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

    <Question />
      <ul><input type='radio' name='answer' value='' id='' />
        <label id="answer1">SmegmaR</label></ul>
      <ul><input type='radio' name='answer' value='' id='' />
        <label id="answer2">Laying an egg</label></ul>
      <ul><input type='radio' name='answer' value='' id='' />
        <label id="answer3">Cuddling</label></ul>
      <ul><input type='radio' name='answer' value='' id='' />
        <label id="answer4">Goat Sacrifices</label></ul>
      <ul><input type='radio' name='answer' value='' id='' />
        <label id="answer5">Harrison</label></ul>

    {(this.props.players.currentPlayersTurn%this.props.players.numOfPlayers != this.props.players.currentJudge - 1) && 
    <Link to={`/playerready`}><button type="button" className="btn btn-secondary" onClick={()=> this.props.dispatch(updatePlayerTurn(
      ((this.props.players.currentPlayersTurn)%(this.props.players.numOfPlayers))+1)
    )}>Submit</button></Link>}

    {(this.props.players.currentPlayersTurn%this.props.players.numOfPlayers == this.props.players.currentJudge - 1) && 
    <Link to={`/endround`}><button type="button" className="btn btn-secondary" onClick={()=> this.props.dispatch(updatePlayerTurn(
      ((this.props.players.currentPlayersTurn)%(this.props.players.numOfPlayers))+1)
    )}>End Round</button></Link>}
    </div> 
    
  );
  }
}

function mapStateToProps(state){
  return {
    players: (state.players)
  }
}

export default connect(mapStateToProps)(PlayerHand);