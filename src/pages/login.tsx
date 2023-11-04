import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

import LoginContent from "../components/login.content";
import { loginQuery } from "../querys/login.query";
import SideNavBar from "../components/sideNavBar";
// import { URL } from "../common/constants";

function Login() {
  //   const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  console.log("sessionStorage.getItem(id) ::", sessionStorage.getItem("id"));

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("hello :: ,", username, password);

    const { value, done } = await loginQuery({
      userName: username,
      password: password,
    });
    console.log("data :: ", done);
    console.log("data :: ", value);
    if (value.data?.login) {
      sessionStorage.setItem("id", value.data?.login?.id);
      //   navigate(`/Chat/${sessionStorage.getItem("id")}`);
    }
    if (value?.errors[0]?.message && !done) {
      alert(value.errors[0].message);
    }
  };

  return (
    <>
      <SideNavBar />
      <LoginContent
        logo={logo}
        setUserName={setUserName}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
