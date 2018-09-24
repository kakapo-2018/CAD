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
  "numbersOfPlayers" : 6,               // from SET_NUMBER_OF_PLAYERS
  "currentJudge" : "Player 1",          //default initial state
  "currentPlayersTurn" : "Player 2"     //default
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
  "hand" : [
  {
    "player" : 2
    "cards" : ["" , ""]
    "selected" : ""
  }
    ],
  "dealtCards" : ["", ""],
  "toBeJudged" : [
    {
      "player" : 1,
      "cardText" : ""
    }
  ]
}
```


## Actions
bracketed numbers indicate rough sequence

### PLAYERS
* SET_NUMBER_OF_PLAYERS (1)
* UPDATE_JUDGE (6)
* UPDATE_PLAYER_TURN (5)&(6)

## QUESTIONS
* SELECT_QUESTION (3)
* UPDATE_DEALT_QUESTIONS (2)

## ANSWERS
* FILL_ANSWERS_HANDS (2)
changes hand cards
* SELECT_ANSWER (4)
changes toBeJudged card text
* CLEAR_SELECTED_ANSWER (6)
* UPDATE_DEALT_ANSWERS (2)

## AUTH

