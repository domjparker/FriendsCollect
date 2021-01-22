import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const FILTERED_ROBOTS = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <>
        <div className="tc">
          <h1>FriendsCollect</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={FILTERED_ROBOTS} />
        </div>
      </>
    );
  }
}

export default App;
