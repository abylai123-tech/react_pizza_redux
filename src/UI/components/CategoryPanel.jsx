import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory, sortPizza } from "../../BL/slices/catalogSlice";

export const CategoryPanel = () => {
  const dispatch = useDispatch();

  const [categoryBtn, setCategoryBtn] = useState([
    { name: "Все", isActive: true },
    { name: "Мясные", isActive: false },
    { name: "Вегетарианская", isActive: false },
    { name: "Гриль", isActive: false },
    { name: "Закрытые", isActive: false },
  ]);

  const handleClick = (name) => {
    const result = categoryBtn.map((elem) =>
      elem.name === name
        ? { ...elem, isActive: true }
        : { ...elem, isActive: false }
    );
    setCategoryBtn(result);
    dispatch(changeCategory(name));
  };

  const sortPizzas = (event) => {
    dispatch(sortPizza(event.target.value));
  };

  return (
    <>
      <div className="type_btns">
        {categoryBtn.map((element) => (
          <button
            key={element.name}
            className={`btn ${element.isActive ? "btn_active" : ""}`}
            onClick={() => handleClick(element.name)}
          >
            {element.name}
          </button>
        ))}
      </div>

      <div className="pizza-sort">
        <p>Сортировка по:</p>
        <select className="select_pizza" onChange={sortPizzas}>
          <option hidden>-выбор-</option>
          <option value="price">цене</option>
          <option value="name">алфавиту</option>
        </select>
      </div>
    </>
  );
};
