import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom";

import Login from './Login'
import Logout from './Logout'
import StartGame from './StartGame'
import PlayerReady from './PlayerReady'
import PlayerHand from './PlayerHand'
import EndRound from './EndRound'
import StartRound from './StartRound'
import Register from './Register'



const App = ({ auth }) => (

  <Router>
    <div className='app-container'>
      <div className=''>
      {console.log({auth})}
      {!auth.isAuthenticated ? (
          <Route exact path="/" component={Login} />     
        ) : (
          <Route exact path="/" component={StartGame} />
        )}
        <Route exact path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route exact path="/register" component={(Login, Register)} />
        <Route exact path='/startgame' component={StartGame} />
        <Route exact path='/playerready' component={PlayerReady} />
        <Route exact path='/playerhand' component={PlayerHand} />
        <Route exact path='/endround' component={EndRound} />
        <Route exact path='/startround' component={StartRound} />

      </div>


    </div>
  </Router>

)


const mapStateToProps = ({auth}) => {
  
  return {
    auth
  };
  
};

export default connect(mapStateToProps)(App)
