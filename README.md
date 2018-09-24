# CAD
Cards against dev-cademy

It's fun to play


## User Stories
As a user, I want to be able to:

### MVPs
* Login
* Select number of players and assign starting judge
* See initial board
* Have pop-up instructions of who to pass the game to
* Have players be able to see their cards and question
* Select an answer, submit and pass to next player
* Repeat for total number of players
* Pass to judge 
* Click hidden answers to reveal and select winner
* Next round and reassign judge to winning player or at end of round option to finish game

### Stretch
* At end game have scores displayed for players
* Multiple logins on one device
* Multiple devices logging
* Text-to-speech
* Custom cards
* Score/player history


## Views
* Login
* Register
* Starting board
* Individual player hands
* Popup instructions
* Select winner (judge view)
* Win screen

## Reducer States

### Players
``` 
{
  numOfPlayers: 5,
  currentJudge : "Player 1",
  currentPlayersTurn : "Player 2"
}
```
### Questions
```
{
  "currentQuestion" : "",
  "dealtQuestions" : ["",""]
}
```

### Answers
```
{
  playerHand: [
    {
      player: null,
      answerCards: [
        "",
        ""
      ]
    }
  ]
  dealtCards: ["", ""],
  toBeJudged: [
    {
      "player" : null,
      "cardText" : ""
    }
  ]  
}
```


## Actions

### PLAYERS
* SET_NUMBER_OF_PLAYERS - done!
* UPDATE_JUDGE
* UPDATE_PLAYER_TURN

## QUESTIONS
* SELECT_QUESTION - done!
* X UPDATE_DEALT_QUESTIONS - added to select question since it always happens at the same time

## ANSWERS
* FILL_ANSWERS_HANDS
* SELECT_ANSWER
* CLEAR_SELECTED_ANSWER
* UPDATE_DEALT_ANSWERS

## AUTH

