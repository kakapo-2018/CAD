

const initialState =        
{ 
  numOfPlayers: 0,
  activeJudge: 1
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUMBER_OF_PLAYERS': 
      return { ...state, numOfPlayers: action.number}
    case 'UPDATE_JUDGE':
      return { ...state, activeJudge: action.judge}

    default:
      return state 
  }
}

export default players