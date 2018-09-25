import React, { Component } from "react";
import { connect } from "react-redux";
import { selectQuestion } from "../actions/index";
import { bindActionCreators } from "redux";

class Question extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectQuestion: ['Why am I sticky?', 'I got 99 problems but _ aint one.','Daddy, why is Mommy crying?' ],
  //     num: Math.floor(Math.random()*3)
  //  }
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.questions.currentQuestion}</h1>
        {/* <h1>{this.state.selectQuestion[this.state.num]}</h1> */}
        {/* ready to be passed selectedQuestion from reducer */}
        {/* <p>_____ is the reason I drink heavily</p> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectQuestion: selectQuestion }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
