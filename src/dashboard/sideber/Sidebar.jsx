import { Link } from "react-router";

const Sidebar = () => {
  return (
    <ul className="  ">
      <Link to="/">
        <li className="p-2 mb-1">Dashboard</li>
      </Link>
      <Link to="/students">
        <li className="p-2 mb-1">Students</li>
      </Link>
    </ul>
  );
};

export default Sidebar;
