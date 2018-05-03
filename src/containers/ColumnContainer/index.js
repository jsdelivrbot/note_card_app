import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { columnsSelectors } from '../../redux/columns';
import { createCard } from '../../redux/cards/operations';
import { deleteCard } from '../../actions';
// import Card from './card';
import Column from '../../components/column';
import { create } from 'domain';

class ColumnContainer extends Component {

  render() {
    return (
      <Column
        columnId={this.props.columnId}
        columns={this.props.columns}
        cards={this.props.cards}
        createCard={this.props.createCard}
        deleteCard={this.props.deleteCard}
        editCard={this.props.editCard}
        cardId={this.props.cardId}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    columns: state.columns,
    cards: state.cards,
    cardId: state.cardCounter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createCard: createCard, deleteCard: deleteCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);