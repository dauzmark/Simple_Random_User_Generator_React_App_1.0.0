import React from "react";

export default class CardSearch extends React.Component {
  state = {
    card: ""
  };

  handleChange = e => {
    this.setState({ card: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchCard(this.state.card);
    this.setState({ card: "" });
  };

  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Card"
          value={this.state.card}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button className="input-group-text">Search</button>
        </div>
      </form>
    );
  }
}
