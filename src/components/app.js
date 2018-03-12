import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from '../containers/ColumnContainer';

import { createColumn } from '../redux/columns/operations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: 1
    }
    this.createColumn = this.createColumn.bind(this);
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
        />
      )
    });
  }

  render() {
    // console.log(this.props.columns);
    // console.log('columns: ' + this.props.columns.length);
    // console.log(this.props.cards);
    return (
      <div>
        <button
          onClick={this.createColumn}
          id="add-column-button"
          className="btn btn-primary">
            Add Column
          </button>
        {this.renderColumns()}
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