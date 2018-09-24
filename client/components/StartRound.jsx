import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectQuestion} from '../actions/index'
import {bindActionCreators} from 'redux'

class StartRound extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
<div>
  <h2 > And the winner is....</h2>
  Start new round?
  <Link to={`/playerready`}><button type="button" className="btn btn-primary"
  onClick={this.props.selectQuestion}>Let's Go</button></Link>

  <Link to={`/startgame`}><button type="button" className="btn btn-secondary margin-bottom:4px"
  >Finish Up</button></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartRound) ;