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
    var arr = [];
    if(this.props.columns.length === 0) {
      return <h4>Add column to start making notes</h4>
    };
    for (let i = 0; i < this.props.columns.length; i++) {
      arr.push(i);
    }
    return this.props.columns.map(column => {
      console.log('MAPPING');
      console.log(column);
      return <Column key={this.props.columns.indexOf(column)} id={this.props.columns.indexOf(column)}/>
    });
  }

  render() {
    console.log('columns: ' + this.props.columns.length);
    return (
      <div>
        <button
          onClick={this.handleClick.bind(this)}
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
  return { columns: state.columns};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createColumn: createColumn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);