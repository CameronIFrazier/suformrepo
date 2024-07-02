import {useState} from 'react';
import React from 'react';
import bg from "./images/bg-intro-desktop.png";
import './App.css';

function App() {
const [inputValue, setInputValue] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const change = (e) => {
const value = e.target.value;
setInputValue(value);

if(value === ''){
setInputValue('Cannot be left Empty');
}
}



  return (
    <>
      <div className='wrapper'>
        <img src={bg} alt="" className='bgimage' />
        <div className='boxcontainer'>
          <div className='box1'>box1
            <h2 className='header'>Learn to code by watching others</h2>
            <p className='paragraph'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. </p>
          </div>
          <div  className='box2'>box2 
          <input type ="text"  name ="firstName" placeholder='First Name' className='firstName'></input>
          <input type ="text" value={inputValue} onChange={change} name ="lastName" placeholder='Last Name' className='lastName' ></input>
          <input type ="text"  name ="email" placeholder='email' className='email'></input>
          <input type ="text"  name ="password" placeholder='password' className='password'></input>
          <button className='claim'></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;