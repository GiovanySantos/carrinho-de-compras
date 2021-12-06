import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
    color: ${theme ? "#fff" : "#181A1B"};
    background: ${theme ? "#181A1B" : "#fff"};
  `;

  return (
    <div className='header p-3 d-flex justify-content-between align-items-center text-center'>
      <h4>Contrate seu plano</h4>
      <Button
        className='theme'
        onClick={() => setTheme(!theme)}
        getTheme={theme}>
        {theme ? " Dark" : " Light"}
      </Button>
    </div>
  );
};

export default Header;
