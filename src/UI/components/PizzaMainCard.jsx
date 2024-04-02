import pizza1 from "../../assets/pizzas/01.jpg";

export const PizzaMainCard = ({ props, selectTypePizzaMain, buyPizzaMain }) => {
  const selectTypePizza = (id) => {
    selectTypePizzaMain(id);
  };

  const buyPizza = () => {
    const argument = props.type.find((elem) => elem.isSelect);
    buyPizzaMain({ pizza: props.name, ...argument });
  };

  return (
    <div className="pizza_item">
      <img src={pizza1} alt="" />
      <p className="pizza_name">{props.name}</p>
      <div className="pizza_choice">
        {props.type.map((elem) => (
          <button
            className={`pizza_choice_btn ${
              elem.isSelect ? "choice_btn_active" : ""
            }`}
            key={elem.id}
            onClick={() => selectTypePizza(elem.id)}
          >
            {elem.name}
          </button>
        ))}
      </div>
      <div className="pizza_buy">
        <p className="pizza_price">
          от <span>{props.type.find((elem) => elem.isSelect).price}</span>{" "}
          &#8376;
        </p>
        <button className="pizza_btn_buy" onClick={() => buyPizza()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill=""
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          Добавить
        </button>
      </div>
    </div>
  );
};
