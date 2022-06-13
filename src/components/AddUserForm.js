import { useState } from "react";

const AddUserForm = (props) => {
  const [isValidName, setIsValidName] = useState(true);
  const [enteredValueName, setEnteredValueName] = useState("");

  const [isValidAge, setIsValidAge] = useState(true);
  const [enteredValueAge, setEnteredValueAge] = useState("");

  const userNameChange = (e) => {
    if (enteredValueName.trim().length > 0) {
      setIsValidName(true);
    }
    setEnteredValueName(e.target.value);
  };

  const userAgeChange = (e) => {
    if (enteredValueAge.trim().length > 0) {
      setIsValidAge(true);
    }
    setEnteredValueAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredValueName.trim().length === 0) {
      isValidName(false);
    }

    if (enteredValueAge.trim().length === 0) {
      isValidAge(false);
    }

    const inputsComplete = {
      enteredValueName,
      enteredValueAge,
    };

    props.onAddUser(inputsComplete);

    setEnteredValueName("");
    setEnteredValueAge("");
  };

  return (
    <div className={props.className}>
      <form className="form" onSubmit={formSubmitHandler}>
        <div>
          <label>Your name:</label>
          <input
            type={"text"}
            placeholder="Please put your name"
            onChange={userNameChange}
            value={enteredValueName}
          ></input>
        </div>
        <div>
          <label>Age (Years):</label>
          <input
            type={"number"}
            placeholder="Please put your age"
            onChange={userAgeChange}
            value={enteredValueAge}
            required
          ></input>
        </div>
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};
export default AddUserForm;
