import React, { useEffect, useState } from "react";
import { getUsers } from "../../services";
import { Button, UserCard } from "../../components";
import { Link } from "react-router-dom";

function ListUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
      } catch (error) {}
    };
    fetchUsers();
  }, []);

  if (!users) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[#422C76]">
      <div className="m-auto flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between mt-5">
          <Link to={"/"}>
            <Button>Previous</Button>
          </Link>
          <p className="text-white">
            {users.length}
            {users.length > 1 ? " Users" : " User"}
          </p>
        </div>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default ListUsers;
