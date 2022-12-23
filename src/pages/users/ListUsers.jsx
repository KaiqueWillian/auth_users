import React, { useEffect, useState } from "react";
import { Button } from "../../components/index";
import { api } from "../../services/api";
import { format, parseISO } from "date-fns";

function ListUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.get("/Users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <>
      <p className="text-white">
        {users.length} Registered
        {setUsers.length === 2 ? " users" : " user"}
      </p>

      <div className="w-[375px] m-auto">
        {users.map((user) => (
          <div
            className="border rounded-lg mb-8 border-[#00e640] py-4 px-4"
            key={user.id}
          >
            <div className="flex flex-row items-center justify-between">
              <div>
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-[66px] h-[66px] rounded-full bg-white border-[#00e640] border"
                />
              </div>
              <div>
                <div className="flex flex-col items-center text-white">
                  <span>{user.name}</span>
                  <span>{format(parseISO(user.createdAt), "dd/MM/yyyy")}</span>
                </div>
              </div>
              <Button>
                <span>Details</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListUsers;
