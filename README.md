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

## Reducers

### Players

``` 
{
  "Numbers of Players" : 6,
  "Current Judge" : "Player 1",
  "Current Player's Turn" : "Player 2"
}

```
### Questions

```
{
  "Current Question" : "what's the deal with airline food?",
  "Previous Questions" : ["What's up?","How's it?"]
}
```
### Answers
```
{
  "Hand" : [
  {
    "Player" : 2
    "Cards" : ["first one" , "second one"]
    "Selected" : "Third one"
  }
    ],
  "Dealt Cards" : ["Negative one", "Negative two"],
  "To Be Judged" : [
    {
      "Player" : 1,
      "Card Text" : "Things"
    }
  ]
}
```



