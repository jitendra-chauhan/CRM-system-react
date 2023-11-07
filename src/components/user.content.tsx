// import Popup from "reactjs-popup";
import "../css/user.scss";
import React, { useState } from "react";
import Popup from "./popUp";
import { addUserQuery } from "../querys/user.query";

export function UserContent(prop: any) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formData = async (e: any) => {
    const userName = e.target.userName.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    e.preventDefault();
    const { value } = await addUserQuery({
      userName,
      firstName,
      lastName,
    });
    togglePopup();

    prop.setUserData(value?.data?.addUser);
  };

  return (
    <div className="dataTable">
      <table className="tableView">
        <tr>
          <th>User Name</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
        </tr>
        {prop?.data?.map((val: any, key: any) => {
          return (
            <tr key={key}>
              <td>{val.userName}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.role}</td>
            </tr>
          );
        })}
      </table>

      <input type="button" value="Click to Open Popup" onClick={togglePopup} />

      {isOpen && (
        <Popup
          content={
            <>
              <form action="#" onSubmit={formData}>
                <label htmlFor="userName">User Name : </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="please enter user name"
                  required
                />
                <br />
                <label htmlFor="firstName">First Name : </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="please enter first name"
                  required
                />
                <br />
                <label htmlFor="lastName">Last Name : </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="please enter last name"
                  required
                />
                <br />
                <button type="submit" id="submit">
                  Submit
                </button>
              </form>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
