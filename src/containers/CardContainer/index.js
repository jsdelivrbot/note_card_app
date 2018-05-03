import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteCard } from '../../redux/cards/operations';

import Card from '../../components/Card';

class CardContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.deleteCard = this.deleteCard.bind(this);
  // }

  // deleteCard() {
  //   console.log(this.props.cardKey);
  //   console.log('butter');
  //   let data = { key: this.props.cardKey, column: this.props.column }
  //   this.props.deleteCard(data);
  // }

  render() {
    console.log('CARD CONTAINER');
    console.log(this.props);
    return (
      <Card
        key={this.props.key}
        cardKey={this.props.cardKey}
        title={this.props.title}
        note={this.props.note}
        column={this.props.column}
        deleteCard={this.props.deleteCard}
        editCard={this.props.editCard}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Card);