import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from '../containers/ColumnContainer';

import { createColumn } from '../redux/columns/operations';

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
    // console.log('RENDERING COLUMNS');
    // console.log(this.props.columns);
    // console.log(this.props.columns.columns);
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
    console.log('PEaNUT BUTTER JelLY TIME');
    console.log('id: ' + id);
    console.log(typeof(id));
    if (typeof(id) === 'number') {
      this.setState({ selectedCard: id });
    }
    console.log(this.state.selectedCard);
  }

  closeModal() {
    console.log('closing');
    this.setState({ selectedCard: null})
  }

  saveChanges() {
    this.closeModal()
  }

  render() {
    let modal = <h1>NOT EDITING</h1>
    console.log('if statement');
    console.log('selected card: ' + this.state.selectedCard);
    console.log(this.state.selectedCard);
    if (this.state.selectedCard !== null) {
      modal = (
        <div className="my-modal">
          <img
            className="delete"
            src="../style/images/delete_icon.png"
            alt="delete.png"
            onClick={this.closeModal}
          />
          <h1>Modal</h1>
          <h3>{this.props.cards[this.state.selectedCard].title}</h3>
          <p>{this.props.cards[this.state.selectedCard].note}</p>
          <label>Title:</label>
          <input type="textfield" name="title" value={this.props.cards[this.state.selectedCard].title} />
          <br />
          <label>Note:</label>
          <input type="textfield" name="title" value={this.props.cards[this.state.selectedCard].note} />
          <br />
          <button className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
        </div>
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
  return bindActionCreators({ createColumn: createColumn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);