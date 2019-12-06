import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <>
      <button
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      >Dark Mode</button>
    </>
  );
};

export default DarkModeButton;
