import React, { useState, useEffect }  from 'react';
import './MainMenu.css';
import Icons from "./Icons.svg"
import Drop from "./Drop.svg"
import Coin from "./Coin.svg"
import Yellow from "./YellowDrop.svg"
import Friends from "./Friends.svg"
import Upgrade from "./Upgrade.svg"
import Mine from "./Mine.svg"
import Tasks from "./Tasks.svg"
import Stream from "./Stream.svg"
import Whale from "./Whale.png"
import Menu from '../Menu/Menu';


// Функция, возвращающая имя пользователя
const getUserName = () => {
    return "$WHALE_USER"; // Пример получения имени пользователя
  };

const getNumberDays = () => {
    // return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return 6000;
}


function getCorrectDayWord(days) {
    const lastDigit = days % 10;
    const lastTwoDigits = days % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `${days} дней`;
    }
  
    switch (lastDigit) {
      case 1:
        return `${days} день`;
      case 2:
      case 3:
      case 4:
        return `${days} дня`;
      default:
        return `${days} дней`;
    }
  }

const handleClick = () => {
  console.log("CLICK")
}



const MainMenu = () => {
    const username = getUserName()
    const countDays = getNumberDays()
    const [waterCoin, setWaterCoin] = useState(5);
    const [powerValue, setPowerValue] = useState(999); // Например, начальное значение 100
    const [isAnimating, setIsAnimating] = useState(false); // Состояние для анимации

    const donateCoin = 0



    // useEffect для увеличения anotherValue каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setPowerValue(prevPowerValue => {
        if (prevPowerValue + 4 > 999) {
          return 999; // Ограничиваем значение 999
        }
        return prevPowerValue + 4;
      });
    }, 1000); // 5000 мс = 5 секунд

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

    // Функция для обработки клика
    const handleClick = () => {
      if(powerValue - 4 > 0){
      setWaterCoin(prevWaterCoin => prevWaterCoin + 1); // Инкрементируем waterCoin
      setPowerValue(prevPowerValue => prevPowerValue - 4)

      // Запускаем анимацию
      setIsAnimating(true);

      // Убираем анимацию через 0.5 секунды (длительность анимации)
      setTimeout(() => setIsAnimating(false), 200);
    }
      else{
        console.log('Кончилась энергия')
      }
    };


    return (
    <div className='background-container'>
        <div className='up-menu'>
            <div className='account-menu'>
                <img className='user-icon' src={Icons}></img>
                <div className='vertical-text'>
                    <span className="user-name">{username}</span>
                    <span className='count-days'>В семье {getCorrectDayWord(countDays)}</span>
                </div>

                <div className='button-set'>
                    SET
                </div>
            </div>
        </div>

        <div className='stat-menu'>

            <div className='stat-block'>
              <img className='stat-icons' src={Drop}></img>
              <span className='stat-text'>{waterCoin}</span>
            </div>

            <div className='stat-block'>
              <img className='stat-coin' src={Coin}></img>
            <span className='stat-text'>{donateCoin}</span>
            </div>
        </div>


        <div className='click-zone' onClick={handleClick}>
        <img 
          className={`click-image ${isAnimating ? 'animate' : ''}`} 
          src={Whale} // Замените на источник вашего изображения
          alt="Clickable" 
        />
        </div>


        <div className='power-block'>
        <img src={Yellow}></img>
        <span className='power-text'>{powerValue}/999</span>
        </div>


        {/* <nav className='menu-bottom'>
          <div>
              <a className='menu-button' href='https://ya.ru/'>
              <img src={Friends}></img>
              <span>Friends</span>
            </a>
          </div>


          <div >
              <a className='menu-button'href='https://ya.ru/'>
              <img src={Upgrade}></img>
              <span>Upgrade</span>
            </a>
          </div>

          <div>
              <a className='menu-button'href='https://ya.ru/'>
              <img src={Mine}></img>
              <span>Mine</span>
            </a>
          </div>


          <div>
              <a className='menu-button'href='https://ya.ru/'>
              <img src={Tasks}></img>
              <span>Tasks</span>
            </a>
          </div>


          <div>
              <a className='menu-button'href='https://ya.ru/'>
              <img src={Stream}></img>
              <span>Stream</span>
            </a>
          </div>

        </nav> */}
        <Menu/>
    </div>
    )
};

export default MainMenu;
