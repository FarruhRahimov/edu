import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./components/Logo";
import Container from "../../components/Container";
import Menu from "./components/Menu";
import style from "./style.module.css";

const Header = () => {
  const { pathname } = useLocation();

  const [logoOption, setLogoOption] = useState(true);

  useLayoutEffect(() => {
    setLogoOption(pathname === "/");
  }, [pathname]);
  return (
    <div className="header">
      <Container>
        <div className={style.header_in}>
          <Logo logoType={logoOption ? "Home" : "all"} />
          <Menu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
