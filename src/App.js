import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm.styled";
import UserInput from "./components/UserInput.styled";

const App = () => {
  const [user, setUser] = useState([
    { userName: "Luz Edith", id: 1, age: 28 },
    { userName: "Walter", id: 2, age: 29 },
  ]);

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
      <UserInput items={user} />
    </div>
  );
};

export default App;
