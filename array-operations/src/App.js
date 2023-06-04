import React from "react";
import "./App.css";

class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}
export default ListItems;
