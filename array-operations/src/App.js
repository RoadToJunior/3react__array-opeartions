const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <h2>
      Wiek użytkownika: <strong>{user.age}</strong>
    </h2>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);
class ListItems extends React.Component {
  userList = () => {
    let users = this.props.data.users;
    users = users.map((user) => <Item user={user} key={user.id} />);
    return users;
  };
  render() {
    return (
      <div>
        <button>Wszyscy</button>
        <button>Kobiety</button>
        <button>Mężczyźni</button>
        {this.userList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
