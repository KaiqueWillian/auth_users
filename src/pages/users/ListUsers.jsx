import React, { useEffect, useState } from "react";
import { Button } from "../../components/index";
import { api } from "../../services/api";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

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
      <p className="text-white mt-5">
        {users.length} Registered
        {setUsers.length === 2 ? " users" : " user"}
      </p>

      <div className="w-auto m-auto">
        {users.map((user) => (
          <div
            className="border rounded-lg mb-8 border-[#FF2F69] py-4 px-4 mx-5"
            key={user.id}
          >
            <div className="flex flex-row items-center justify-between">
              <div>
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-[66px] h-[66px] rounded-full border-white border"
                />
              </div>
              <div>
                <div className="flex flex-col items-center text-white">
                  <span className="font-bold">{user.name}</span>
                  <span>{format(parseISO(user.createdAt), "dd/MM/yyyy")}</span>
                </div>
              </div>

              <Link>
                <Button>
                  <span className="font-bold">Details</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListUsers;
