import {useState} from 'react';
import React from 'react';
import bg from "./images/bg-intro-desktop.png";
import './App.css';
import error from "./images/icon-error.svg";

function App() {
const[fnvisibility, fnsetVisiblity] = useState({
  visibility: 'hidden'
})
const[lnvisibility, lnsetVisiblity] = useState({
  visibility: 'hidden'
})
const[emvisibility, emsetVisiblity] = useState({
  visibility: 'hidden'
})
const[psvisibility, pssetVisiblity] = useState({
  visibility: 'hidden'
})

const[efn,setefn]=useState('')
const [fninputStyle, fnsetInputStyle] =useState({
  color: 'black',
  borderColor: 'black',
  width: '97%',
  height: '2rem',
  borderRadius: ".3rem"
});
const[eln,setln]=useState('')
const [lninputStyle, lnsetInputStyle] =useState({
  color: 'black',
  borderColor: 'black',
  width: '97%',
  height: '2rem',
  borderRadius: ".3rem"
});
const[em,setem]=useState('')
const [eminputStyle, emsetInputStyle] =useState({
  color: 'black',
  borderColor: 'black',
  width: '97%',
  height: '2rem',
  borderRadius: ".3rem"
});
const[ps,setps]=useState('')
const [psinputStyle, pssetInputStyle] =useState({
  color: 'black',
  borderColor: 'black',
  width: '97%',
  height: '2rem',
  borderRadius: ".3rem"
});


const changefn = (e) => {
const value = e.target.value;
setefn(value);
}
const changeln = (e) => {
  const value = e.target.value;
  setln(value);
  
  }
  const changeem = (e) => {
    const value = e.target.value;
    setem(value);
    }
    const changeps = (e) => {
      const value = e.target.value;
      setps(value);
      }

const submittedEmpty = (e) => {
if(efn === ''){
  fnsetInputStyle({
    color: 'red',
    borderColor: 'red',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
    
  })
  fnsetVisiblity({
    visibility: "visible"
  })
}else{
  fnsetInputStyle({
    color: 'black',
    borderColor: 'black',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  fnsetVisiblity({
    visibility: "hidden"
  })
}
if(eln === ''){
  lnsetInputStyle({
    color: 'red',
    borderColor: 'red',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  lnsetVisiblity({
    visibility: "visible"
  })
}else{
  lnsetInputStyle({
    color: 'black',
    borderColor: 'black',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  lnsetVisiblity({
    visibility: "hidden"
  })
}
if(em === ''){
  emsetInputStyle({
    color: 'red',
    borderColor: 'red',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  emsetVisiblity({
    visibility: "visible"
  })
}else{
  emsetInputStyle({
    color: 'black',
    borderColor: 'black',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  emsetVisiblity({
    visibility: "hidden"
  })
}
if(ps === ''){
  pssetInputStyle({
    color: 'red',
    borderColor: 'red',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  pssetVisiblity({
    visibility: "visible"
  })
}else{
  pssetInputStyle({
    color: 'black',
    borderColor: 'black',
    width: '97%',
    height: '2rem',
    borderRadius: ".3rem"
  })
  pssetVisiblity({
    visibility: "hidden"
  })
}

}




  return (
    <>
      <div className='wrapper'>
        <img src={bg} alt="" className='bgimage' />
       <div className='grid-middle'>
        <div className='emptyBoxLol'> </div>
        <button className='trialButton'>Try it free 7 days then 20/month. thereafter </button>

          <div className='box1' >
            <h2 className='header'>Learn to code by watching others</h2>
            <p className='paragraph'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. </p>
          </div>

          <div  className='box2'> 
          <input type ="text" style={fninputStyle}  onChange={changefn} name ="firstName" placeholder='First Name' className='firstName'></input>
          <div className='lilRedText' style={fnvisibility}>First Name cannot be empty </div>
          <input type ="text" style={lninputStyle}  onChange={changeln} name ="lastName" placeholder='Last Name' className='lastName' ></input>
          <div className='lilRedText' style={lnvisibility}>Last Name cannot be empty</div>
          <input type ="text" style={eminputStyle}  onChange={changeem}  name ="email" placeholder='Email' className='email'></input>
          <div className='lilRedText' style={emvisibility}>Email cannot be empty</div>
          <input type ="text" style={psinputStyle}  onChange={changeps}  name ="password" placeholder='Password' className='password'></input>
          <div className='lilRedText' style={psvisibility}>Password cannot be empty</div>
          <button onClick = {submittedEmpty} className='claim'> Claim Your Free Trial</button>
          </div>
          
          </div> 
      </div>
    </>
  );
}

export default App;