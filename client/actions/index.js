export const selectQuestion = () => {
  return {
    type: 'SELECT_QUESTION'
  }
}

export const setNumberOfPlayers = (total) => {
  return {
    type: 'SET_NUMBER_OF_PLAYERS',
    number: total
  }
}

export const fillAnswersHands = (playerCount) => {
  return {
    type: 'FILL_ANSWERS_HANDS',
    playerCount: playerCount
  }
}