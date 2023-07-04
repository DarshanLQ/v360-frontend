import React from "react";
import CustomInput from "../components/input";
import Label from "../components/label";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Label> name</Label>
      <CustomInput />
    </div>
  );
};

export default HomePage;
