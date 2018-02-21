import _ from 'lodash';
import React, { Component } from 'react';

import { createCard } from '../actions';

export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: 1 }; // set initial state
  }

  //This gets called whenever  button gets clicked to add a card
  handleClick() {
    console.log('Creating Card');
    console.log(this.state);
    var cards = this.state.cards;
    console.log('type: ' + typeof(cards));
    var newState = cards + 1;
    console.log('newState: ' + newState);
    this.setState({ cards: newState,
                    tomato: 'butter' })
    console.log(this.state);
  }

  renderCards() {
    console.log('rendering cards');
    var arr = [];
    for (let i = 0; i < this.state.cards; i++) {
      arr.push(i);
    }
    return _.map(arr, card => {
      // return <div>CARD: {card}</div>
      return <input
                className=".d-block"
                key={card}
                type="textfield" />
    });
    // this.state.cards.map(() => {
    //   return (
    //     <div>
    //       <h3>Card</h3>
    //     </div>
    //   )
    // })
  }

  render() {
    return (
      <div className="column col-md-3">
        <h1>Column</h1>
        {/* <p>this.state.cards: {this.state.cards}</p> */}
        <button onClick={this.handleClick.bind(this)}className="btn btn-primary">Create Card</button>
        <div className="input-group">{this.renderCards()}</div>
      </div>
    );
  }
}