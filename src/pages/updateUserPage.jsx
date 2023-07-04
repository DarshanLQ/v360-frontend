import React from "react";
import UserForm from "../components/userForm";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdateUserPage = () => {
  const { state } = useLocation();
  const { item } = state;

  const handleSubmit = async (data) => {
    const x = await axios.put(
      `http://localhost:8080/users/${data.acc_id}`,
      data
    );
    console.log(x);
  };

  return (
    <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
      <UserForm state={item} handleSubmit={handleSubmit} />
    </div>
  );
};

export default UpdateUserPage;
