import React, { useEffect, useState } from "react";
import { getUsers } from "../../services";
import { UserCard } from "../../components";

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
    <div className="flex flex-col items-center justify-center gap-5 bg-[#422C76] top-0">
      <p className="text-white mt-5">
        {users.length} Registered
        {setUsers.length === 2 ? " users" : " user"}
      </p>

      <div className="m-auto">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default ListUsers;
