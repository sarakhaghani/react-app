import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`the tempreture in Tehran is ${response.data.main.temp}`);
  }

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=42ab2c2ee73f7e1a2ff24479d6688080&units=metric";

  axios.get(url).then(handleResponse);

  return <h2>Hello from weather</h2>;
}
