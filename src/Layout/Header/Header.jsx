import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./components/Logo";
import container from "../../components/container";
const Header = () => {
  const { pathname } = useLocation();

  const [logoOption, setLogoOption] = useState(true);

  useLayoutEffect(() => {
    setLogoOption(pathname === "/");
  }, [pathname]);
  return (
    <div className="header">
      <Container>
        <Logo logoType={logoOption ? "Home" : "all"} />
        <h1>header</h1>
      </Container>
    </div>
  );
};

export default Header;
