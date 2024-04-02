import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";

import cart_icon from "../../assets/icons/cart.png";
import trash from "../../assets/icons/trash.png";

import "./styles/Cart.css";

export const Cart = () => {
  return (
    <div className="wrapper cartPage">
      <div className="header">
        <Logo />
      </div>
      <div className="line"></div>
      <main className="cart_main">
        <section className="cart_section">
          <div className="cart_title">
            <div className="cart_text">
              <img src={cart_icon} alt="" />
              <h1>Корзина</h1>
            </div>
            <div className="trash_text">
              <img src={trash} alt="" />
              <p>Очистить корзину</p>
            </div>
          </div>
          <div className="cart_items"></div>
          <div className="cart_price">
            <div className="cart_price-count">
              <p>
                Всего пицц: <span className="countPizzas">0</span> шт.
              </p>
            </div>
            <div className="cart_price-total">
              <p>
                Сумма заказа: <span className="totalPrice">0</span> P
              </p>
            </div>
          </div>
          <div className="cart_pay">
            <Link to="/">
              <button className="returnMain">Вернуться назад</button>
            </Link>
            <button>Оплатить сейчас</button>
          </div>
        </section>
      </main>
    </div>
  );
};
