import React, { useState } from "react";
import Label from "./label";
import CustomInput from "./input";
import Button from "./button";
import { useEffect } from "react";

const UserForm = ({ state, handleSubmit }) => {
  const [formState, setFormState] = useState({
    accountId: "",
    name: "",
    videoKey: "",
    certificateKey: "",
    urlPattern: "",
    d: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state) {
      setFormState({
        accountId: state.accountId,
        name: state.name,
        videoKey: state.videoKey,
        certificateKey: state.certificateKey,
        urlPattern: state.urlPattern,
        d: state.d,
      });
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formState);
  };

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className="flex flex-wrap flex-grow">
        <Field
          name={"accountId"}
          value={formState.accountId}
          label={"Account Id"}
          onChange={handleChange}
        />
        <Field
          name={"name"}
          value={formState.name}
          label={"Name"}
          onChange={handleChange}
        />
        <Field
          name={"certificateKey"}
          label={"Certificate Key"}
          value={formState.certificateKey}
          onChange={handleChange}
        />
        <Field
          name={"videoKey"}
          label={"Video Key"}
          value={formState.videoKey}
          onChange={handleChange}
        />
        <Field
          name={"urlPattern"}
          label={"Url Pattern"}
          value={formState.urlPattern}
          onChange={handleChange}
        />
        <Field
          name={"d"}
          label={"D value"}
          value={formState.d}
          onChange={handleChange}
        />
      </div>
      <Button> Submit </Button>
    </form>
  );
};

const Field = ({ label, name, onChange, value }) => {
  return (
    <div className="flex justify-start max-w items-start flex-col mr-6 mt-4 w-[400px]">
      <Label>{label}</Label>
      <CustomInput value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default UserForm;
