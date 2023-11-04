import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
