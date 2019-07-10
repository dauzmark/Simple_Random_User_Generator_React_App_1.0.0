import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//
import Cards from "../public/Components/Cards";
import CardSearch from "../public/Components/CardSearch";

class App extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=12").then(res => {
      const users = res.data.results;
      this.setState({ users: users });
    });
  }

  delCard = userObj => {
    //console.log(userObj);
    const users = [...this.state.users];
    this.setState({ users: users.filter(user => user !== userObj) });
  };

  clearCard = () => {
    this.setState({ users: [] });
  };

  addCard = () => {
    // console.log("click");
    axios.get("https://randomuser.me/api/").then(res => {
      const users = res.data.results[0];
      //console.log(users);
      this.setState({ users: [...this.state.users, users] });
    });
  };

  randomCard = () => {
    axios.get("https://randomuser.me/api/?results=10").then(res => {
      const users = res.data.results;
      this.setState({ users: users });
    });
  };

  searchCard = name => {
    axios.get(`https://randomuser.me/api/?results=500`).then(res => {
      const users = res.data.results;
      //console.log(users);
      for (let user in users) {
        //console.log(users[user].name.first);
        if (users[user].name.first === name) {
          this.setState({
            users: users.filter(user => user.name.first === name)
          });
        } else {
          console.log(`The name ${name} does not exist in our database`);
        }
      }
    });
  };

  render() {
    //console.log(this.state.users);
    return (
      <div className="container">
        <h1 className="text-center">Random People Generator</h1>
        <Cards users={this.state.users} delCard={this.delCard} />
        <hr />
        <CardSearch searchCard={this.searchCard} />
        <hr />
        <div className="d-flex">
          <button className="btn btn-success m-2" onClick={this.addCard}>
            Add Card
          </button>
          <button className="btn btn-primary m-2" onClick={this.randomCard}>
            Get Random Card
          </button>
          <button className="btn btn-danger m-2" onClick={this.clearCard}>
            Clear All Cards
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
