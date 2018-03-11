import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { columnsSelectors } from 'redux/columns';
import { createCard } from '../actions';
import { deleteCard } from '../actions';
import Card from './card';
import { create } from 'domain';

class ColumnContainer extends Component {

  render() {
    return (
      <Column
        columns={this.props.columns}
        cards={this.props.cards}
        createCard={this.props.createCard}
        deleteCard={this.props.deleteCard}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    columns: columnsSelectors.getColumns(state),
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createCard: createCard, deleteCard: deleteCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);