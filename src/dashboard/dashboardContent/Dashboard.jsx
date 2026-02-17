import { Outlet } from "react-router";
import Navber from "./header/Navber";

const Dashboard = () => {
  return (
    <div className="">
      <Navber />
      <Outlet />
    </div>
  );
};

export default Dashboard;
