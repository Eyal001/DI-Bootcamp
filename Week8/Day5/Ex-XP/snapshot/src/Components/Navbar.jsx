import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/beaches">Beaches</Link>
        </li>
        <li>
          <Link to="/mountains">Mountains</Link>
        </li>
        <li>
          <Link to="/foods">Foods</Link>
        </li>
        <li>
          <Link to="/funny">Funny</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
