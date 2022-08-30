import React, { useState } from "react";
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
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
