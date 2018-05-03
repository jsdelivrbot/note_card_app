import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  deleteCard() {
    let data = { key: this.props.cardKey, column: this.props.column }
    this.props.deleteCard(data);
  }

  editCard() {
    console.log('Editing card with id: ' + this.props.cardKey);
    console.log(this.props);
    this.props.editCard(this.props.cardKey);
  }

  render() {
    return (
      <div
        className="note-card .d-block"
        key={this.props.cardKey}
        draggable="true"
      >
        <img
          className="edit"
          src="../style/images/edit_icon.png"
          alt="edit.png"
          onClick={this.editCard}
        />
        <img
          className="delete"
          src="../style/images/delete_icon.png"
          alt="delete.png"
          onClick={this.deleteCard}
        />
        <h4>{this.props.title}</h4>
        <p>{this.props.note}</p>
        <p>ID: {this.props.cardKey}</p>
      </div>
    )
  }
}

export default Card;