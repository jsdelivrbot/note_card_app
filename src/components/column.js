import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createCard } from '../actions';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: 1,
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
  handleClick() {
    console.log('Creating Card');
    var cards = this.state.cards;
    var newState = cards + 1;
    this.setState({ cards: newState,
                    tomato: 'butter' });
    var newCard = {
      column: this.props.id,
      title: this.state.title,
      note: this.state.note
    }
    console.log(newCard);
  }

  renderCards() {
    console.log('rendering cards');
    var arr = [];
    for (let i = 0; i < this.state.cards; i++) {
      arr.push(i);
    }
    return arr.map(card => {
      return <input
                className=".d-block"
                key={card}
                type="textfield" />
    });
  }

  render() {
    console.log("id:", this.props.id);
    return (
      <div className="column col-md-3" id={this.props.id}>
        <h1>Column</h1>
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
        <button onClick={this.handleClick.bind(this)}className="btn btn-primary">Create Card</button>
        <div className="input-group">{this.renderCards()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cards: state.cards };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);