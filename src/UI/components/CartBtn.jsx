import icon_cart from "../../assets/icons/icon_cart.png";

export const CartBtn = ({ infoBasket }) => {
  return (
    <button className="cart_btn">
      <div className="total_price">
        <p className="price">{infoBasket.total_sum}</p>
        <p className="val">KZT</p>
      </div>
      <div className="line"></div>
      <div className="total_count">
        <img src={icon_cart} alt="" />
        <p className="count">{infoBasket.total_amount}</p>
      </div>
    </button>
  );
};
