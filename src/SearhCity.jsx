import React, { useState } from 'react';

const SearhCity = ({ fetchWeatherInfo }) => {
  const [city, setCity] = useState('');
  const handleChange = e => {
    setCity(e.target.value);
  };
  const search = event => {
    event.preventDefault();
    fetchWeatherInfo(city);
    setCity('');
  };
  console.log(city);
  return (
    <div className="menu">
      <span className="menu-city">Введите город</span>
      <form className="name-form" onSubmit={search}>
        <input type="text" className="name-form__input" value={city} onChange={handleChange} />
        <button className="name-form__btn btn" type="submit">
          Show
        </button>
      </form>
    </div>
  );
};
export default SearhCity;
