
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectQuestion} from '../actions/index'
import {bindActionCreators} from 'redux'

const StartRound = (props) => {
   return ( 
<div>
  <h2>And the winner is {props.judge}</h2>
  Start new round?
  <Link to={`/playerready`}><button type="button" className="btn btn-secondary" onClick={props.selectQuestion}>Let's Go</button></Link>
  <Link to={`/startgame`}><button type="button" className="btn btn-secondary">Finish Up</button></Link>
</div>

     )
}
 
 
function mapStateToProps(state) {
  console.log('this is state', state)
  return{
    judge: state.players.currentJudge,
    questions: state.questions
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectQuestion:selectQuestion}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StartRound) ;