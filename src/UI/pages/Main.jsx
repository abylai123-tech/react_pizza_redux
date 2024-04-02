import { useSelector } from "react-redux";

import { Logo } from "../components/Logo";
import { PizzaMainCard } from "../components/PizzaMainCard";
import { CategoryPanel } from "../components/CategoryPanel";
import { CartBtn } from "../components/CartBtn";

import { Link } from "react-router-dom";

import "./styles/Main.css";

const MainPage = ({ basket, infoBasket, selectTypePizzaApp, buyPizzaApp }) => {
  const pizzas = useSelector(({ catalogSlice }) => catalogSlice.pizzas);

  const selectTypePizzaMain = (id) => {
    selectTypePizzaApp(id);
  };

  const buyPizzaMain = (pizza) => {
    buyPizzaApp(pizza);
  };

  return (
    <div className="wrapper mainPage">
      <div className="header">
        <Logo />
        <Link to={basket.length ? "/cart" : "/"}>
          <CartBtn infoBasket={infoBasket} />
        </Link>
      </div>

      <div className="pizza_type">
        <CategoryPanel />
      </div>

      <div className="pizzas">
        <h1 className="pizza_items_title">Все пиццы</h1>

        <div className="pizza-items">
          {pizzas.length ? (
            pizzas.map((elem) => (
              <PizzaMainCard
                key={elem.id}
                props={elem}
                selectTypePizzaMain={selectTypePizzaMain}
                buyPizzaMain={buyPizzaMain}
              />
            ))
          ) : (
            <p className="empty-description">В данном разделе пока нет пицц</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
