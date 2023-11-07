import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

import LoginContent from "../components/login.content";
import { loginQuery } from "../querys/login.query";
import SideNavBar from "../components/sideNavBar";
import { UserContent } from "../components/user.content";
import { getAllUserQuery } from "../querys/user.query";
// import { URL } from "../common/constants";

function User() {
  //   const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  //   const [password, setPassword] = useState("");

  //   console.log("sessionStorage.getItem(id) ::", sessionStorage.getItem("id"));

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     console.log("hello :: ,", username, password);

  //     const { value, done } = await loginQuery({
  //       userName: username,
  //       password: password,
  //     });
  //     console.log("data :: ", done);
  //     console.log("data :: ", value);
  //     if (value.data?.login) {
  //       sessionStorage.setItem("id", value.data?.login?.id);
  //       //   navigate(`/Chat/${sessionStorage.getItem("id")}`);
  //     } else if (value?.errors[0]?.message && !done) {
  //       alert(value.errors[0].message);
  //     }
  //   };

  const getUserData = async () => {
    const { value } = await getAllUserQuery();
    console.log("value  :: user :: ", value);

    setUserData(value?.data?.getAllUsers);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <SideNavBar />
      <UserContent data={userData} setUserData={setUserData} />
      {/* <LoginContent
        logo={logo}
        setUserName={setUserName}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      /> */}
    </>
  );
}

export default User;
