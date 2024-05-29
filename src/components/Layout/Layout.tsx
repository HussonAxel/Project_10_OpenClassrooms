import  Header  from "../Header/Header";
import  Footer from "../Footer/Footer";

import { LayoutProps } from "./Layout.type";

import logo from "@assets/logo.svg"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header
        logo={logo}
        alt="KASA"
        links={[
          { text: "Accueil", path: "/" },
          { text: "A Propos", path: "/about" },
        ]}
      />
      <main>{children}</main>
      <Footer logo={logo} FooterCopyright="© 2020 Kasa. All rights reserved" />
    </div>
  );
};

export default Layout;
