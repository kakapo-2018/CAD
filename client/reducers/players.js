

const initialState =        
{ 
  numOfPlayers: 5,
  currentJudge: 1,
  currentPlayersTurn: 2
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUMBER_OF_PLAYERS': 
      return { ...state, numOfPlayers: action.number}
    case 'UPDATE_JUDGE':
      return { ...state, currentJudge: action.judge}
    case 'UPDATE_PLAYER_TURN':
      return { ...state, currentPlayersTurn: action.newTurn}
    default:
      return state 
  }
}

export default players