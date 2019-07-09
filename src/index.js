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
  // componentDidMount() {
  //   axios.get("https://randomuser.me/api/?results=10").then(res => {
  //     const users = res.data.results;
  //     this.setState({ users: users });
  //   });
  // }

  delCard = userObj => {
    //console.log(userObj);
    const users = [...this.state.users];
    this.setState({ users: users.filter(user => user !== userObj) });
  };

  addCard = () => {
    // console.log("click");
    axios.get("https://randomuser.me/api/").then(res => {
      const users = res.data.results[0];
      console.log(users);
      this.setState({ users: [...this.state.users, users] });
    });
  };

  //TO BE EDITED!!!!!!!!!!
  searchCard = name => {
    axios.get(`https://randomuser.me/api/?results=1&name=${name}`).then(res => {
      const users = res.data.results;
      console.log(users);
    });
  };

  render() {
    //console.log(this.state.users);
    return (
      <div className="container">
        <Cards users={this.state.users} delCard={this.delCard} />
        <hr />
        <CardSearch searchCard={this.searchCard} />
        <button
          className="btn btn-lg btn-success btn-block"
          onClick={this.addCard}
        >
          Add Card
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
