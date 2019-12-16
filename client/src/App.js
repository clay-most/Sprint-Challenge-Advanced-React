import React from 'react';
import List from "./component/List"
import useDarkMode from './hooks/useDarkMode'
import './App.css';

const Navbar = () => {
  const [darkMode,setDarkMode]=useDarkMode(false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      <div>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >DarkMode</div>
        <List></List>
      </div>
  );
};

export default Navbar;
