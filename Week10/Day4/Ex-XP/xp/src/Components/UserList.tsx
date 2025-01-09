import { useEffect, useState } from "react";

interface UserI {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserState {
  users: UserI[];
  loading: boolean;
  error: string | null;
}

const UserList = () => {
  const [state, setState] = useState<UserState>({
    users: [],
    loading: true,
    error: null,
  });

  const fetchUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: UserI[] = await res.json();
      setState({ users: data, loading: false, error: null });
      return data;
    } catch (error: any) {
      setState({ users: [], loading: false, error: error.message });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error...{state.error}</p>}
      {state.users && !state.error && !state.loading && (
        <ul>
          {state.users.map((user) => {
            return (
              <li key={user.id}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default UserList;
