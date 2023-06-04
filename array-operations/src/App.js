import React from "react";
import "./App.css";

const Item = (props) => <li>{`owoc ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <Item key={item} content={item} />
        ))}
      </ul>
    );
  }
}
export default ListItems;
