import UserItems from "./UserItems";

const UserInput = (props) => {
  return (
    <ul>
      {props.items.map((user) => (
        <UserItems>{`${user.userName} (${user.age} Years old) `}</UserItems>
      ))}
    </ul>
  );
};

export default UserInput;
