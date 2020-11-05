import React, { Component } from "react";

import "./Home.css";

const kira = require("./assets/kira.png");
const ben = require("./assets/ben.png");
const ash = require("./assets/ash.png");
const mike = require("./assets/mike.png");
const david = require("./assets/david.png");
const sarah = require("./assets/sarah.png");
const tanner = require("./assets/tan.png");
const kylee = require("./assets/ky.png");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-header">Christmas Assignments</div>
        <div className="list">
          <div className="list-item">
            <img src={kira} alt="kira" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁 →
            </span>
            <img src={ash} alt="kylee" height="100" width="100" />
          </div>
          <div className="list-item">
            <img src={ben} alt="ben" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={kylee} alt="david" height="100" width="100" />
          </div>
          <div className="list-item">
            <img src={ash} alt="ash" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={david} alt="tanner" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={mike} alt="mike" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={tanner} alt="sarah" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={david} alt="david" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={kira} alt="ben" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={sarah} alt="sarah" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={ben} alt="mike" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={tanner} alt="tanner" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={mike} alt="kira" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={kylee} alt="kylee" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={sarah} alt="ash" height="100" width="100" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
