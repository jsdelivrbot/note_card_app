import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from './column';

import { createColumn } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: 1
    }
  }

  handleClick() {
    this.props.createColumn();
    if (this.state.lists < 4) {
      console.log('Creating column');

      var num = this.state.lists + 1;
      this.setState({ lists: num })
    }
  }

  renderColumns() {
    console.log('rendering columns');
    var arr = [];
    for (let i = 0; i < this.state.lists; i++) {
      arr.push(i);
    }
    return _.map(arr, column => {
      return <Column key={column}/>
    });
  }

  render() {
    console.log('columns: ' + this.props.columns);
    return (
      <div>
        <button
          onClick={this.handleClick.bind(this)}
          id="add-column-button"
          className="btn btn-primary">
            Add Column
          </button>
        {/* <Column /> */}
        {this.renderColumns()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { columns: state.columns};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createColumn: createColumn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);