import { FaSignInAlt, FaSignAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>

      <ul>
          <li>
              <Link to="/login">
                  <FaSignInAlt /> Login
              </Link>
          </li>
          <li>
              <Link to="/register">
                  <FaUser /> Register
              </Link>
          </li>
      </ul>
      Header
    </div>
  );
};

export default Header;
