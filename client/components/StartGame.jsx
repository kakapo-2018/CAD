import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectQuestion} from '../actions/index'
import {bindActionCreators} from 'redux'

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props.questions)
    return ( 
    <div>
     <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> Enter info below to begin
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="select-players">
      <h1>How many are in?</h1>
      <p>Enter player number</p>
    <label for="player-number">Players</label>
    <select class="player-number" id="player-number">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    </div>

<Link to={`/playerready`}><button 
type="button" 
className="btn btn-secondary"
onClick={this.props.selectQuestion}>Start</button></Link>
      
    </div> 
    );
  }
}
 
function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectQuestion:selectQuestion}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame) ;