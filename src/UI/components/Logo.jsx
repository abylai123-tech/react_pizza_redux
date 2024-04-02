import logo from "../../assets/icons/logo.png";

export const Logo = () => {
  return (
    <div className="header_icon_title">
      <img src={logo} alt="" />
      <div>
        <p className="header_title">PIZZA</p>
        <p className="header_text">самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};
