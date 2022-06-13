import { useState } from "react";
import Button from "./Button";
import ErrorModalStyled from "./ErrorModal.styled";

const AddUserForm = (props) => {
  const [error, setError] = useState("");
  const [enteredValueName, setEnteredValueName] = useState("");

  const [enteredValueAge, setEnteredValueAge] = useState("");

  const userNameChange = (e) => {
    setEnteredValueName(e.target.value);
  };

  const userAgeChange = (e) => {
    setEnteredValueAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      enteredValueName.trim().length === 0 ||
      enteredValueAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "Please check the values, not empty values",
      });
      return;
    }

    if (+enteredValueAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age number (>0)",
      });

      return;
    }

    const inputsComplete = {
      enteredValueName,
      enteredValueAge,
    };

    props.onAddUser(inputsComplete);

    setEnteredValueName("");
    setEnteredValueAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModalStyled
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={props.className}>
        <form className="form" onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Your name:</label>
            <input
              id="username"
              type={"text"}
              placeholder="Please put your name"
              onChange={userNameChange}
              value={enteredValueName}
            ></input>
          </div>
          <div>
            <label htmlFor="userage">Age (Years):</label>
            <input
              id="userage"
              type={"number"}
              placeholder="Please put your age"
              onChange={userAgeChange}
              value={enteredValueAge}
            ></input>
          </div>
          <Button className="btn" type="submit">
            Add User
          </Button>
        </form>
      </div>
    </div>
  );
};
export default AddUserForm;
