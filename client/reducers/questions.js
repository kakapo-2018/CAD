import cards from '../../server/db.json'
const questionCards = cards.blackCards

const initialState =        
{
  currentQuestion: "",
  dealtQuestions: []
}

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_QUESTION':
      let randomNumber = Math.floor((Math.random() * questionCards.length) + 1);
      let selectedQuestion = questionCards[randomNumber].text
      return ({
          currentQuestion: selectedQuestion,
          dealtQuestions: [...state.dealtQuestions, selectedQuestion]
        })

    default:
      return state
  }
}

export default questions
