import cards from '../../server/db.json'
const answerCards = cards.whiteCards

const initialState =        
{ 
  playerHand: [],
  dealtCards: [],
  toBeJudged: []
}

const answers = (state = initialState, action) => {
  switch (action.type) {
    case 'FILL_ANSWERS_HANDS':
      return 
    default:
      return state 
  }
}

export default answers