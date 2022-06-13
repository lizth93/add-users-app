import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm.styled";
import UserInput from "./components/UserInput.styled";

const App = () => {
  const [users, setUser] = useState([]);

  const addUserHandler = (enteredData) => {
    setUser((prevUsers) => {
      const updateUsers = [...prevUsers];
      updateUsers.unshift({
        userName: enteredData.enteredValueName,
        id: Math.random().toString(),
        age: enteredData.enteredValueAge,
      });
      return updateUsers;
    });
  };

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler} />
      <UserInput items={users} />
    </div>
  );
};

export default App;
