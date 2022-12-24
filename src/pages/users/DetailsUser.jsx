import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../services";
import { Button } from "../../components";
import { format, parseISO } from "date-fns";

function DetailsUser() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserById(id);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <div className="bg-[#422C76] h-screen flex items-center justify-center">
      <div className="flex justify-center items-center gap-5">
        <div className="m-auto">
          <div className="border rounded-lg mb-8 border-[#FF2F69] py-4 px-4 mx-5">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-center justify-center gap-5">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-[66px] h-[66px] rounded-full border-white border"
                />

                <div className="text-white">
                  <p>Name</p>
                  <span className="font-bold">{user.name}</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-center text-white">
                  <p>Registered</p>
                  <span>{format(parseISO(user.createdAt), "dd/MM/yyyy")}</span>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/users"}>
            <Button>Previous</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsUser;
