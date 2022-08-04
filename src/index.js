import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";
import styled from "styled-components";

import GlobalStyles from "./globalStyles";

const Button = styled.button`
  background-color: var(--primary);
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    box-shadow: 0 0 rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }  
`


function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <GlobalStyles />
        <Shop />
        <Button className="btn" onClick={() => setLogin(false)}>
          Выйти
        </Button>
      </>
    );
  } else {
    return (
      <>
        <GlobalStyles />
        <h2>Нужно залогиниться!</h2>
        <Button className="btn" onClick={() => setLogin(true)}>
          Войти
        </Button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
