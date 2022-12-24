import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../";

function UserCard({ user }) {
  return (
    <div className="border rounded-lg mb-8 border-[#FF2F69] py-4 px-4 mx-5">
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
          </div>
        </div>

        <Link to={`/users/${user.id}`}>
          <Button>
            <span className="font-bold">Details</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
