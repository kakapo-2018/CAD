import React from 'react'

import Login from './Login'
import PlayerHand from './PlayerHand'
import StartGame from './StartGame'
import EndRound from './EndRound'



const App = () => (
  <div className='app-container'>
<Login />
  <StartGame />
  <PlayerHand />
  <EndRound />
  
  </div>
)

export default App
