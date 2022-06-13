import styled from "styled-components";
import AddUserForm from "./AddUserForm";

export default styled(AddUserForm)`
  max-width: 60rem;
  margin: 3rem auto;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  .form {
    min-width: -webkit-fill-available;
    line-height: 1.8;
    margin: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: transparent;

    input {
      min-width: -webkit-fill-available;
      border: 1px solid #74b816;

      &:focus {
        background-color: #e9fac8;
      }
    }
  }

  .btn {
    flex-grow: 0;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #5c940d;
    color: white;
    background: #74b816;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    border-radius: 3rem;
    max-width: 20rem;
  }
`;
