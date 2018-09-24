import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Question from './Question'

class EndRound extends Component {
  constructor(props) {
    super(props);
    this.state = { message : [
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      }]
     }
  }


  render() { 
    console.log(this.state)


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
  className='hiddenanswer' 
  style={{filter: 'blur(5px)'}}>{answer.color}</ul>})}

  


{/* /* <ul>answers 1 hidden</ul>
<ul>'this.props.toBeJudged'</ul>
<ul style={{filter: 'blur(5px)'}}>answers 3 hidden</ul>
<ul>answers 4 hidden</ul>
<ul>answers 5 hidden</ul> */}

<Link to={`/startround`}><button type="button" className="btn btn-secondary">Select Winner</button></Link>


</div>

     );
  }
}
 
export default EndRound;