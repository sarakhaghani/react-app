import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Form() {
  return (
    <form id="search-form" class="mb-4">
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            class="form-control"
            id="city-input"
          />
        </div>
        <div class="col-3">
          <input type="submit" value="search" class="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
