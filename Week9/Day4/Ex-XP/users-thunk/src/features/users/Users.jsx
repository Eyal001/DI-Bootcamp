import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
const Users = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Users list:</h1>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "failed" && <h1>Error: Failed to load users</h1>}

      {users &&
        users.map((user) => {
          return (
            <div className="user" key={user.id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          );
        })}
    </>
  );
};

export default Users;
