
const initialState =        
{ 
  numOfPlayers: 0
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUMBER_OF_PLAYERS': 
      return ({
        numOfPlayers: action.number
      })

    default:
      return state 
  }
}

export default players