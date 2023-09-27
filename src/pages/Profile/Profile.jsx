import React, { useState, useEffect } from 'react';
import "./newpro.css";

import AdCard from '../../components/AdCard/AdCard'
import axios from 'axios';

// import icons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from 'react-icons/io';

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from 'react-icons/bs';

import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';

// api key
const APIkey = 'bcf2048bc3be154bded8f277f580ba2e';

const Profile = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Doha');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [date, setDate] = useState(new Date());

  const fetchData = (location, date) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
  };

  const handleNextDayClick = () => {
    // increment the date by 1 day
    const newDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    setDate(newDate);
    // fetch the data for the new location and date
    fetchData(location, newDate);
  };

  useEffect(() => {
    // fetch the data for the current location and date
    fetchData(location, date);
  }, [location, date]);


  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // if input value is not empty
    if (inputValue !== '') {
      // set location
      setLocation(inputValue);
    }

    // select input
    const input = document.querySelector('input');

    // if input value is empty
    if (input.value === '') {
      // set animate to true
      setAnimate(true);
      // after 500 ms set animate to false
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    // clear input
    input.value = '';

    // prevent defaults
    e.preventDefault();
  };

  // // fetch the data
  // useEffect(() => {
  //   // set loading to true
  //   setLoading(true);
  
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;
  
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       // set the data after 1500 ms
  //       setTimeout(() => {
  //         setData(res.data);
  //         // set loading to false
  //         setLoading(false);
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setErrorMsg(err);
  //     });
  // }, [location, date]);
  

 
  // error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 2000);
    // clear timer
    return () => clearTimeout(timer);
  }, [errorMsg]);

  // if data is false show the loader
  if (!data) {
    return (
      <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
        <div>
          <ImSpinner8 className='text-5xl animate-spin text-white' />
        </div>
      </div>
    );
  }

  // set the icon according to the weather
  let icon1;

  switch (data.weather[0].main) {
    case 'Clouds':
      icon1 = <IoMdCloudy className='iconclouds'/>;
      break;
    case 'Haze':
      icon1 = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon1 = <IoMdRainy className='text-31cafb' />;
      break;
    case 'Clear':
      icon1 = <IoMdSunny className='text-ffde33' />;
      break;
    case 'Drizzle':
      icon1 = <BsCloudDrizzleFill className='text-31cafb' />;
      break;
    case 'Snow':
      icon1 = <IoMdSnow className='text-31cafb' />;
      break;
    case 'Thunderstorm':
      icon1 = <IoMdThunderstorm />;
      break;
  }
  

  return (
    <div className='test'>
      <div className="ad">
        <AdCard />
      </div>
    <div className='container'>
      {errorMsg && (
        <div className='w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md'>{`${errorMsg.response.data.message}`}</div>
      )}
      {/* form */}
      <form
        className= 'header'
      >
        <div className='header__search'>
          <input
            onChange={(e) => handleInput(e)}
            className='header__search-input'
            type='text'
            placeholder='Search by city or country'
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className='header__search-button '
          >
            <IoMdSearch className='header__search-buttonn' />
          </button>
        </div>
      </form>
      {/* card */}
      <div className='weather-box'>
        {loading ? (
          <div className='w-full6 h-full6 flex6 justify-center6 items-center6'>
            <ImSpinner8 className='text-white7 text-5xl7 animate-spin7' />
          </div>
        ) : (
          <div>
            {/* card top */}
            <div className='weather-box__city'>
              
              {/* icon */}
              <div className='iconweather'>{icon1}</div>
              <div>
                {/* country name */}
                <div className='countryname'>
                  {data.name}, {data.sys.country}
                </div>
                {/* date */}
                <div className='date'>
                  {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                  {date.getUTCFullYear()}
                </div>
              </div>
            </div>
            {/* card body */}
            <div className='my-2011'>
              <div className='flex11 justify-center11 items-center11'>
                {/* temp */}
                <div className='datatemp'>
                  {parseInt(data.main.temp)}
                </div>
                {/* celsius icon */}
                <div className='text-4xl12'>
                  <TbTemperatureCelsius />
                  
                </div>

              </div>
              {/* weather description */}
              <div className='capitalize1 text-centerr'>
                {data.weather[0].description}
              </div>
            </div>
            {/* card bottom */}
            <div className='weather-box__details fonttext '>
              <div className='ahya'>
                <div className='flex16 items-center16 gap-x'>
                  {/* icon */}
                  <div className='eye'>
                    <BsEye />
                  </div>
                  <div>
                    Visibility{' '}
                    <span className='ml-213'>{data.visibility / 1000} km</span>
                  </div>
                </div>
                <div className='flex13 items-center13 gap-x'>
                  {/* icon */}
                  <div className='thermo'>
                    <BsThermometer />
                  </div>
                  <div className='flex14'>
                    Feels like &nbsp;
                    <div className='flex15 ml-215'>
                      {parseInt(data.main.feels_like)}
                      <TbTemperatureCelsius />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex15 justify-between15'>
                <div className='flex items-center gap-x'>
                  {/* icon */}
                  <div className='water'>
                    <BsWater />
                  </div>
                  <div>
                    Humidity &nbsp;
                    <span className='ml-2'>{data.main.humidity} %</span>
                  </div>
                </div>
                <div className='windcase'>
                  {/* icon */}
                  <div className='wind'>
                    <BsWind />
                  </div>
                  <div>
                    Wind <span className='ml-2'>{data.wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
    </div>
  );
};
export default Profile;