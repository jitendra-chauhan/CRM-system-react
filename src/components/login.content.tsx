import React, { useState } from "react";

import "../css/Login.scss";
import { Button, FluidInput } from "../common/inputField";

function LoginContent(prop: any) {
  const style = {
    margin: "15px 0",
  };

  return (
    <div className="login-container">
      <div className="title">Login</div>
      <FluidInput
        type="text"
        label="name"
        id="name"
        style={style}
        setValue={prop.setUserName}
      />
      <FluidInput
        type="password"
        label="password"
        id="password"
        style={style}
        setValue={prop.setPassword}
      />
      <Button
        buttonText="log in"
        buttonClass="login-button"
        onClick={prop.handleSubmit}
      />
    </div>
  );
}

export default LoginContent;
