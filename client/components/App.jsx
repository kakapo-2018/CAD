import React from 'react'

import {HashRouter as Router, Route} from "react-router-dom";

import Login from './Login'
import StartGame from './StartGame'
import PlayerReady from './PlayerReady'
import PlayerHand from './PlayerHand'
import EndRound from './EndRound'
import StartRound from './StartRound'



const App = () => (
  <Router>
  <div className='app-container'>
  

<Route exact path='/startgame' component={StartGame} />
<Route exact path='/playerready' component={PlayerReady} />
<Route exact path='/playerhand' component={PlayerHand} />
<Route exact path='/endround' component={EndRound} />
<Route exact path='/startround' component={StartRound} />


<Route exact path='/' component={Login} />

 
  </div>
  </Router>
)

export default App
