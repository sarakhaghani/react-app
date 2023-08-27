import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import Icon from "./Icon";

export default function Current() {
  return (
    <div class="row">
      <div class="col-6">
        <h1 id="city">Tehran</h1>
        <p>
          <span class="date" id="date"></span>
        </p>
        <ul>
          <li id="description">Sunny</li>
          <li>
            Humidity:{" "}
            <span id="humidity" class="humidity">
              11
            </span>
            %
          </li>
          <li>
            Wind:{" "}
            <span id="wind" class="wind">
              3
            </span>
            <span class="unit">km/h</span>
          </li>
        </ul>
      </div>
      <div class="col-6 middle-middle">
        <h3>
          <Icon />

          <span class="current-temp" id="currentTemp">
            32
          </span>
          <span class="celsius">℃</span>
        </h3>
      </div>
    </div>
  );
}
