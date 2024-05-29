import { Link } from "react-router-dom";
import { FooterProps } from "./Footer.types";

const Footer: React.FC<FooterProps> = ({ logo, FooterCopyright }) => { 
  return (
    <footer className="footer">
      <Link to={"/"}>
        <img src = {logo} alt="Logo de Kasa" className="footerLogo" />
      </Link>
      <p className="listElement">{FooterCopyright}</p>
    </footer>
  )
};

export default Footer;