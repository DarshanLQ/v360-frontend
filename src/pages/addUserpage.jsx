import React from "react";
import UserForm from "../components/userForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const x = await axios.post("http://localhost:8080/users/new", data);
      console.log(x);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
      <UserForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddUserPage;
