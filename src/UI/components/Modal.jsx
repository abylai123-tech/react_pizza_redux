import { useState } from "react";

import "./Component.css";

export const Modal = ({ closeModalMain }) => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const closeModal = () => {
    closeModalMain();
  };

  const closeModalBG = () => {
    closeModalMain();
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));
    closeModal();
  };

  return (
    <div className="modal" onClick={closeModalBG}>
      <div
        className="modal-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Авторизация</h2>
          <button onClick={closeModal}>x</button>
        </div>
        <div className="modal-main">
          <p className="description">
            Для совершения покупок необходимо авторизоваться!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="login"
              placeholder="Login"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <input type="submit" value="Войти" />
          </form>
        </div>
      </div>
    </div>
  );
};
