import _ from 'lodash';
import React, { Component } from 'react';
import Card from '../../containers/CardContainer';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: ""
    }; // set initial state
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "title") {
      this.setState({ title: event.target.value })
    };
    if (event.target.name === "note") {
      this.setState({ note: event.target.value })
    };
  }

  //This gets called whenever  button gets clicked to add a card
  createCard() {
    var newCard = {
      column: this.props.columnId,
      cardId: this.props.cardId,
      title: this.state.title,
      note: this.state.note
    }
    this.setState({ title: "", note: "" });
    this.props.createCard(newCard);
  }

  renderCards() {
    var cards = this.props.columns.columns[this.props.columnId]
    // console.log(this.props.cards);
    // console.log('CARDS');
    // console.log(cards);
    return cards.map(card => {
      return (
              <Card
                key={card}
                cardKey={card}
                title={this.props.cards[card].title}
                note={this.props.cards[card].note}
                column={this.props.cards[card].column}
                editCard={this.props.editCard}
              />
      )
    });
  }

  render() {
    return (
      <div className="column col-md-3" id={this.props.columnId}>
        <h2>Column {this.props.columnId + 1}</h2>
        <input
          onChange={this.handleChange}
          placeholder="Title"
          name="title"
          value={this.state.title}
        />
        <input
          onChange={this.handleChange}
          placeholder="Note"
          name="note"
          value={this.state.note}
        />
        <button onClick={this.createCard.bind(this)}className="btn btn-primary">Create Card</button>
        <div>{this.renderCards()}</div>
      </div>
    );
  }
}

export default Column;