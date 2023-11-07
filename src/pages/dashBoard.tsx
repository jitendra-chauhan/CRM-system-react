import React, { useEffect, useState } from "react";

import { DeshBoardContent } from "../components/deshBoard.content";
import SideNavBar from "../components/sideNavBar";
import { dashBoardCountQuery } from "../querys/dashBoard.query";

function DashBoard() {
  const [UserCount, setUserCount] = useState(0);
  const apiCall = async () => {
    const { value } = await dashBoardCountQuery({
      id: sessionStorage.getItem("id"),
    });
    console.log("DashBoard : value ::: ", value);
    setUserCount(value?.data?.dashBoardCount?.userCount);
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <SideNavBar />
      <DeshBoardContent UserCount={UserCount} />
    </>
  );
}

export default DashBoard;
