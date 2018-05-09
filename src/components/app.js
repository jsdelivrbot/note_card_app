import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from '../containers/ColumnContainer';
import EditModal from './EditModal';

import { createColumn } from '../redux/columns/operations';
import { editCard } from '../redux/cards/operations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: 1,
      selectedCard: null
    }
    this.createColumn = this.createColumn.bind(this);
    this.editCard = this.editCard.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  createColumn() {
    this.props.createColumn();
    if (this.state.lists < 4) {
      var num = this.state.lists + 1;
      this.setState({ lists: num })
    }
  }

  renderColumns() {
    if(this.props.columns.columns.length === 0) {
      return <h4>Add column to start making notes</h4>
    };
    return this.props.columns.columns.map(column => {
      return (
        <Column
          key={this.props.columns.columns.indexOf(column)}
          columnId={this.props.columns.columns.indexOf(column)}
          editCard={this.editCard}
        />
      )
    });
  }

  editCard(id) {
    if (typeof(id) === 'number') {
      this.setState({ selectedCard: id });
    }
  }

  closeModal() {
    this.setState({ selectedCard: null})
  }

  saveChanges(card) {
    this.props.editCard(card);
    this.closeModal()
  }

  render() {
    let modal;
    if (this.state.selectedCard !== null) {
      modal = (
        <EditModal
          closeModal={this.closeModal}
          saveChanges={this.saveChanges}
          selectedCard = {this.state.selectedCard}
          title={this.props.cards[this.state.selectedCard].title}
          note={this.props.cards[this.state.selectedCard].note}
        />
      )
    }
    return (
      <div>
        <button
          onClick={this.createColumn}
          id="add-column-button"
          className="btn btn-primary">
            Add Column
          </button>
        {this.renderColumns()}
        <div>
          {modal}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { columns: state.columns, cards: state.cards };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createColumn, editCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);