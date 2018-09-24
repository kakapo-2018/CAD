import {combineReducers} from 'redux'

import questions from './questions'
import answers from './answers'
import players from './players'

export default combineReducers({
  questions,
  answers,
  players
})
