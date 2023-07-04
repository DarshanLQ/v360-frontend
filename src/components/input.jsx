import React from "react";

const CustomInput = ({ onChange, value, name }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type="text"
      className="w-[380px] max-w-[390px] max-h-[40px] border-[#cbcbcb] border rounded-lg py-4 px-2  outline-[#454545] focus:border-teal focus:outline-none focus:ring-0"
    />
  );
};

export default CustomInput;
