import React from 'react';
import './Menu.css'; // Подключение файла стилей
import Friends from "./Friends.svg"
import Upgrade from "./Upgrade.svg"
import Mine from "./Mine.svg"
import Tasks from "./Tasks.svg"
import Stream from "./Stream.svg"


const Menu = () => {
  return (
    <nav className="menu-bottom">

    <div className='menu-button'>
      <a className="menu-button-items" href="https://ya.ru/">
        <img src={Friends} alt="Friends Icon"/>
        <span>Friends</span>
      </a>
    </div>

    <div className='menu-button'>
      <a className="menu-button-items" href="https://ya.ru/">
        <img src={Upgrade} alt="Upgrade Icon" />
        <span>Upgrade</span>
      </a>
    </div>

    <div className='menu-button'>
      <a className="menu-button-items" href="https://ya.ru/">
        <img src={Mine} alt="Mine Icon" />
        <span>Mine</span>
      </a>
    </div>

    <div className='menu-button'>
      <a className="menu-button-items" href="https://ya.ru/">
        <img src={Tasks} alt="Mine Icon" />
        <span>Tasks</span>
      </a>
    </div>

    <div className='menu-button'>
      <a className="menu-button-items" href="https://ya.ru/">
        <img src={Stream} alt="Mine Icon" />
        <span>Stream</span>
      </a>
    </div>

    </nav>
  );
};

export default Menu;
