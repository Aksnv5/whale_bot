// src/App.js
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainMenu from './components/MainMenu/MainMenu';
import Animation from './components/TestAnimation/TestAnimation'
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Здесь вы можете имитировать загрузку данных, используя setTimeout
    // или реальный запрос на сервер
    setTimeout(() => {
      setLoading(false);
    }, 300); // Замените на реальное время загрузки
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <MainMenu/>}
    </div>
  );
};

export default App;
