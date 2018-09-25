import {combineReducers} from 'redux'

import questions from './questions'
import answers from './answers'
import players from './players'
import auth from './auth'

export default combineReducers({
  questions,
  answers,
  players,
  auth
})
