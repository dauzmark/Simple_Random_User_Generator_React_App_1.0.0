import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//
import Card from "../public/Components/Card";

class App extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10").then(res => {
      const users = res.data.results;
      this.setState({ users: users });
    });
  }

  render() {
    return (
      <div className="container">
        <Card users={this.state.users} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
