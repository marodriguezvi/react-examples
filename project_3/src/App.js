import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: Math.random().toString(), name, age }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUser} />
      <UserList users={users} />
    </Fragment>
  );
}

export default App;
