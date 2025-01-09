import { ReactElement } from "react";

interface UserI {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard = ({
  name = "Paul",
  age = 32,
  role = "Developer",
}: UserI): ReactElement => {
  return (
    <div>
      <h2>User Card:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};
export default UserCard;
