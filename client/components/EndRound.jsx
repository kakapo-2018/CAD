import React, { Component } from 'react';
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

answers 1 hidden
answers 2 hidden
<button onClick> Submit </button>

</div>

     );
  }
}
 
export default EndRound;