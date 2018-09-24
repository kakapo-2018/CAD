import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Question from './Question'

class EndRound extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
<div>

  <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>And for the most lols...</strong> select the winner of the round
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  <Question />

<ul>answers 1 hidden</ul>
<ul>answers 2 hidden</ul>
<ul>answers 3 hidden</ul>
<ul>answers 4 hidden</ul>
<ul>answers 5 hidden</ul>
<Link to={`/startround`}><button type="button" className="btn btn-secondary">The winner is...</button></Link>


</div>

     );
  }
}
 
export default EndRound;