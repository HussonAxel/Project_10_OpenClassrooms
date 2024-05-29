import { NavLink } from "react-router-dom";
import { HeaderProps } from "./Header.type";

const Header: React.FC<HeaderProps> = ({logo, alt, links}) => {
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt={alt} />
      </NavLink>
      <ul className="listWrapper">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>{link.text}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Header