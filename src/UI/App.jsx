import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { Routes, Route } from "react-router-dom";

import { Cart } from "./pages/Cart";
import MainPage from "./pages/Main";

const App = () => {
  const [dataPizza, setDataPizza] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [basket, setBasket] = useState([]);
  const [infoBasket, setInfoBasket] = useState({
    total_sum: 0,
    total_amount: 0,
  });
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModalMain = () => {
    setIsModal(false);
  };

  const selectTypePizzaApp = (id) => {
    const newPizzas = pizzas.map((elem) => {
      const [pizzaId, _] = id.split("_");

      if (pizzaId === elem.id) {
        const newType = elem.type.map((item) =>
          item.id === id
            ? { ...item, isSelect: true }
            : { ...item, isSelect: false }
        );
        return { ...elem, type: newType };
      } else {
        return elem;
      }
    });

    setPizzas(newPizzas);
  };

  const checkAuthUser = () => {
    const user = localStorage.getItem("user");
    return user ?? false;
  };

  const buyPizzaApp = (pizza) => {
    const check = checkAuthUser();

    if (check) {
      if (basket.length) {
        const isBasket = basket.some((elem) => elem.id === pizza.id);
        if (isBasket) {
          const validPizza = basket.map((elem) =>
            elem.id === pizza.id ? { ...elem, count: elem.count + 1 } : elem
          );
          setBasket(validPizza);
        } else {
          setBasket([...basket, pizza]);
        }
      } else {
        setBasket([...basket, pizza]);
      }

      setInfoBasket({
        total_sum: infoBasket.total_sum + pizza.price,
        total_amount: infoBasket.total_amount + 1,
      });
    } else {
      openModal();
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={
            <MainPage
              basket={basket}
              infoBasket={infoBasket}
              selectTypePizzaApp={selectTypePizzaApp}
              buyPizzaApp={buyPizzaApp}
            />
          }
        />
      </Routes>

      {isModal ? <Modal closeModalMain={closeModalMain} /> : null}
    </div>
  );
};

export default App;