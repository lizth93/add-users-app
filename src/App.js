import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm.styled";

function App() {
  const [user, setUser] = useState([{ userName: "Luz Edith", id: 1, Age: 28 }]);

  return (
    <div>
      <AddUserForm />
    </div>
  );
}

export default App;
