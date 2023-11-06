import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import User from "./pages/user";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            key="1"
            path="/login"
            element={<Login />}
            // exact=
            // render={(props: RouteComponentProps<any>) => (
            //   <route.component name={route.name} {...props} {...route.props} />
            // )}
          />
          <Route key="2" path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
