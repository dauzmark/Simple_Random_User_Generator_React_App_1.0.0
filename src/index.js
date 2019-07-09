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

  delCard = userObj => {
    console.log(userObj);
    const users = [...this.state.users];
    this.setState({ users: users.filter(user => user !== userObj) });
  };

  render() {
    console.log(this.state.users);
    return (
      <div className="container">
        <Card users={this.state.users} delCard={this.delCard} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
