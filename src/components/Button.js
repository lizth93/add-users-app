import styled from "styled-components";
const Button = (props) => {
  return (
    <button
      className={props.className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default styled(Button)`
  flex-grow: 0;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #5c940d;
  color: white;
  background: #74b816;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  border-radius: 2rem;
  max-width: 20rem;
  transition: all 0.5s;

  &:hover,
  &:active {
    background: #40c057;
    transform: translateY(0.1rem);
  }
`;
