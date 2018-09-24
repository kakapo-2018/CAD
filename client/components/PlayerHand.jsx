import React, { Component } from 'react';
import Question from './Question'
import {Link} from 'react-router-dom';

class PlayerHand extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    

      
    <div>
       <div class="alert alert-dark alert-warning alert-dismissible fade show" role="alert">
  <strong>Take your pick</strong> Then pass to next player
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      <Question />

          <ul><input type='radio' name='answer' value='' id='' />
    <label for="answer1">Smegma</label></ul>
    <ul><input type='radio' name='answer' value='' id='' />
    <label for="answer1">Laying an egg</label></ul>
    <ul><input type='radio' name='answer' value='' id='' />
    <label for="answer1">Cuddling</label></ul>
    <ul><input type='radio' name='answer' value='' id='' />
    <label for="answer1">Goat Sacrifices</label></ul>
    <ul><input type='radio' name='answer' value='' id='' />
    <label for="answer1">Harrison</label></ul>
    
    <Link to={`/playerready`}><button type="button" className="btn btn-secondary">Submit</button></Link>

    if last round go to 
    <Link to={`/endround`}><button type="button" className="btn btn-secondary">End Round</button></Link>
    </div> 
    
  );
  }
}
 
export default PlayerHand;