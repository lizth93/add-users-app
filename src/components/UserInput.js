import UserItems from "./UserItems";

const UserInput = (props) => {
  return (
    <div className={props.className}>
      <ul>
        {props.items.map((user) => (
          <UserItems key={user.id}>
            {`${user.userName} (${user.age} Years old) `}
          </UserItems>
        ))}
      </ul>
    </div>
  );
};

export default UserInput;
