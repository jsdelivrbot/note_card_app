import React, {Component} from 'react';

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      note: this.props.note
    }
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "title") {
      this.setState({ title: e.target.value });
    }
    if (e.target.name === "note") {
      this.setState({ note: e.target.value });
    }
  }

  save() {
    let card = {
      key: this.props.selectedCard,
      title: this.state.title,
      note: this.state.note
    }
    this.props.saveChanges(card);
  }

  render() {
    return(
      <div className="my-modal">
          <img
            className="delete"
            src="../style/images/delete_icon.png"
            alt="delete.png"
            onClick={this.props.closeModal}
          />
          <h1>EDIT CARD</h1>
          <h3>{this.props.title}</h3>
          <p>{this.props.note}</p>
          <label>Title:</label>
          <input type="textfield" name="title" value={this.state.title} onChange={this.handleChange}/>
          <br />
          <label>Note:</label>
          <input type="textfield" name="note" value={this.state.note} onChange={this.handleChange}/>
          <br />
          <button className="btn btn-primary" onClick={this.save}>Save Changes</button>
        </div>
    );
  }
}