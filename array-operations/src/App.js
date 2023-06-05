import React from "react";
import "./App.css";

const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
    },
  ],
};

const Item = (props) => <li>{`owoc ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    const users = this.users.map((item) => <Item key={item} content={item} />);

    return <ul>{Items}</ul>;
  }
}
export default <ListItems data={data} />;
