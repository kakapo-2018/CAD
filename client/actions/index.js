
///PLAYERS

export const setNumberOfPlayers = (total) => {
  return {
    type: 'SET_NUMBER_OF_PLAYERS',
    number: total
  }
}

export const updateJudge = (newJudgeId) => {
  return {
    type: 'UPDATE_JUDGE',
    judge: newJudgeId
  }
}

export const updatePlayerTurn = (newPlayer) => {
  return {
    type: 'UPDATE_PLAYER_TURN',
    newTurn: newPlayer
  }
}


///QUESTIONS
export const selectQuestion = () => {
  return {
    type: 'SELECT_QUESTION'
  }
}


///ANSWERS
export const fillAnswersHands = (playerCount) => {
  return {
    type: 'FILL_ANSWERS_HANDS',
    playerCount: playerCount
  }
}