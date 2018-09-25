import cards from '../../server/db.json'
// const answerCards = cards.whiteCards

const initialState =        
{ 
  playerHand: [],
  dealtCards: [],
  toBeJudged: []
}

const answers = (state = initialState, action) => {
  switch (action.type) {
    case 'FILL_ANSWERS_HANDS':
      return {
        ...state, 
        playerHand: [...state.playerHand, {player: action.player, answerCards:action.cards}]
      }
    case 'SELECT_ANSWER':
      return {
        ...state, 
        toBeJudged: [...state.toBeJudged, {player: action.player, cardText:action.selectText}]
      }
    case 'CLEAR_SELECTED_ANSWERS':
      return {
        ...state, 
        toBeJudged: []
      }
    default:
      return state 
  }
}

export default answers