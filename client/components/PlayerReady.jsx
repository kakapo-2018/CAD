import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fillAnswersHands } from "../actions/index";
import { bindActionCreators } from "redux";

import cards from "../../server/db.json";
const answerCards = cards.whiteCards;

import Logout from "./Logout";

class PlayerReady extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.players)
    return (
      <div>
        <h2>Player {this.props.players.currentPlayersTurn} ready?</h2>
        <Link to={`/playerhand`}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={e => {
              let thisHand = [];
              for (let i = 0; i < 7; i++) {
                let randomNumber = Math.floor(
                  Math.random() * answerCards.length + 1
                );
                let thisCard = answerCards[randomNumber];
                // console.log(thisCard)
                thisHand.push(thisCard);
              }
              // console.log("thisHand", thisHand)

              this.props.fillAnswersHands(
                this.props.players.currentPlayersTurn,
                thisHand
              );
            }}
          >
            Let's Go
          </button>
        </Link>

        <div>
          <Logout />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fillAnswersHands: fillAnswersHands
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerReady);
