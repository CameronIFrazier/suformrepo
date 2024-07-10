import { useState } from "react";
import React from "react";
import bg from "./images/bg-intro-desktop.png";
import "./App.css";
import error from "./images/icon-error.svg";

function App() {
  const [efn, setEfn] = useState();

  const [eln, setln] = useState();

  const [em, setem] = useState();

  const [ps, setps] = useState();

  const changeEfn = (e) => {
    console.log(e.target.value);
    const value = e.target.value;

    if (!value) {
      setEfn("");
    }

    setEfn(value);
  };
  const changeln = (e) => {
    const value = e.target.value;
    setln(value);
  };
  const changeem = (e) => {
    const value = e.target.value;
    setem(value);
  };
  const changeps = (e) => {
    const value = e.target.value;
    setps(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="grid-middle">
          <div className="emptyBoxLol"> </div>
          <button className="trialButton">
            Try it free 7 days then 20/month. thereafter{" "}
          </button>

          <div className="box1">
            <h2 className="header">Learn to code by watching others</h2>
            <p className="paragraph">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </div>

          <form className="box2">
            <input
              type="text"
              className={`${efn === "" ? "error" : "normalState"}`}
              onChange={changeEfn}
              name="firstName"
              placeholder="First Name"
              value={efn}
            />{" "}
            <div className={`lilRedText ${efn === "" ? "invis" : ""}`}>
              First Name cannot be empty{" "}
            </div>
            <input
              type="text"
              className={eln === "" ? "error" : "normalState"}
              onChange={changeln}
              name="lastName"
              placeholder="Last Name"
            ></input>
            <div className="lilRedText">Last Name cannot be empty</div>
            <input
              type="text"
              className={`${em === "" ? "error" : "normalState"}`}
              onChange={changeem}
              name="email"
              placeholder="Email"
            ></input>
            <div className="lilRedText">Email cannot be empty</div>
            <input
              type="text"
              className={`${ps === "" ? "error" : "normalState"}`}
              onChange={changeps}
              name="password"
              placeholder="Password"
            ></input>
            <div className="lilRedText">Password cannot be empty</div>
            <button type="submit" onClick={handleSubmit} className="claim">
              Claim Your Free Trial
            </button>
          </form>
        </div>
      </div>
      <div className="wrapper">
        <img src={bg} alt="" className="bgimage" />
      </div>
    </>
  );
}

export default App;
