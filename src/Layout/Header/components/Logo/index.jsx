

const Logo = ({ logoType }) => {
  const logo1 = "/logo.png";
  const logo2 = "/logo2.png";
  const logoSrc = logoType === "Home" ? logo1 : logo2;
  return (
    <div>
      <img src={logoSrc} alt="logo" />
    </div>
  );
};

export default Logo;
