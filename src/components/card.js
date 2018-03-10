import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteCard } from '../actions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard() {
    console.log(this.props.cardKey);
    console.log('butter');
    let data = { key: this.props.cardKey, column: this.props.column }
    this.props.deleteCard(data);
  }

  render() {
    return (
      <div
        className="note-card .d-block"
        key={this.props.cardKey}
      >
        <img
          className="delete"
          src="../style/images/delete_icon.png"
          alt="delete.png"
          onClick={this.deleteCard}
        />
        <h4>{this.props.title}</h4>
        <p>{this.props.note}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Card);