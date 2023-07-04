import React from "react";
import UserForm from "../components/userForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Accordion from "../components/accordion";
import axios from "axios";
import Label from "../components/label";
import Button from "../components/button";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:8080/users");
      console.log(resp);
      setUsers(resp.data);
    })();
  }, []);

  return (
    <div className="max-w-screen-lg flex flex-col mx-auto p-4 min-h-[90vh]">
      <div className="w-full flex justify-end">
        <Link to={"/users/addUser"}>
          <div className="max-w-8 max-h-12 bg-green-500 rounded-lg px-2 py-2 flex items-center">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="text-white">Add User</div>
          </div>
        </Link>
      </div>

      {users ? (
        <div className="w-full my-4 ">
          <div className="my-2">
            <Label>Users List</Label>
          </div>
          <div className="overflow-y-auto border border-[#cbcbcb] bg-[#f5f5f5] rounded-md flex flex-col min-h-[450px] max-h-[650px]">
            {users.map((item) => {
              return (
                <Accordion title={item.name}>
                  <div>
                    {Object.entries(item).map(([key, value]) => {
                      return (
                        <div className="flex items-center">
                          <label className="font-medium text-lg mr-2">
                            {key} :{" "}
                          </label>
                          <div className="font-light items-center ">
                            {value}
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex">
                      <Link to={"/users/updateUsers"} state={{ item }}>
                        <Button variant="green"> Update</Button>
                      </Link>
                      <div className="mx-2" />
                      <Button variant="red"> Delete</Button>
                    </div>
                  </div>
                </Accordion>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full justify-center"> Loading </div>
      )}
    </div>
  );
};

export default UserPage;
