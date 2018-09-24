import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Question from './Question'
import {connect} from 'react-redux'
import {updateJudge, updatePlayerTurn} from '../actions/index'
import {bindActionCreators} from 'redux'

class EndRound extends Component {
  constructor(props) {
    super(props);
    this.state = { message : [
      {
        color: "red",
        value: 1
      },
      {
        color: "green",
        value: 2
      },
      {
        color: "blue",
        value: 3
      }],
      currentSel: ''
     }
  }


  render() { 
    console.log(this.state)
    let selected = 0;

    return ( 

<div>


  <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>And for the most lols...</strong> select the winner of the round
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

  <Question />

  {this.state.message.map(answer => {
  return <ul 
  className='hiddenanswer' ><input type='radio' name='answer' value={answer.value} id='' 
  onClick={(e) => selected = e.target.value}/>


  <label for="answer" style={{filter: 'blur(5px)'}}
  onClick={(e)=> {e.target.style.filter = 'blur(0px)'}}>{answer.color}</label></ul>})
}



{/* /* <ul>answers 1 hidden</ul>
<ul>'this.props.toBeJudged'</ul>
<ul style={{filter: 'blur(5px)'}}>answers 3 hidden</ul>
<ul>answers 4 hidden</ul>
<ul>answers 5 hidden</ul> */}

<Link to={`/startround`}><button type="button" className="btn btn-secondary" 

onClick={() => {
  this.props.dispatch(updateJudge(selected)); this.props.dispatch(updatePlayerTurn((selected%this.props.players)+1))} }

>Select Winner</button></Link>


</div>

     );
  }
}

function mapStateToProps(state) {
  return{
    judge: state.currentJudge,
    players: state.players.numOfPlayers
  }
}


 
export default connect(mapStateToProps)(EndRound);