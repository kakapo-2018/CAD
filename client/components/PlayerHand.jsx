import React, { Component } from 'react';
import Question from './Question'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePlayerTurn, selectFunny } from '../actions';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = { array: ['hi', 'this', 'is', 'Emil'] }
  }
  render() { 
    console.log(this.props)

    return ( 
    

      
    <div>
       <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Take your pick</strong> Then pass to next player
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

      <Question />
{this.state.array.length>0 && this.state.array.map(words => {
            return <ul><input type='radio' name={words} value={this.props.players.currentPlayersTurn}id='' onClick={(e) => this.props.dispatch(selectFunny(e.target.value, e.target.name))} />
    <label for="answer1">{words}</label></ul>
})}

   


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