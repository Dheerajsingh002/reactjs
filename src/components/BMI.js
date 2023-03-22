import React  from  'react';
import './BMI.css';
import { useState } from 'react';
import { buildTimeValue } from '@testing-library/user-event/dist/utils';

function BMI() {
    var weight;
    var heightinfeet;
    var heightininch;
    function Calculate()
    {
       // eslint-disable-next-line no-restricted-globals
       weight=event.target.value;
       // eslint-disable-next-line no-restricted-globals
       heightinfeet=event.target.value;
       // eslint-disable-next-line no-restricted-globals
       heightininch=event.target.value;
       var tin=(heightinfeet*12)+heightininch;
       var cm=tin*2.345;
       var m=cm/100;
       var BMIs=weight/(m*m);
       console.log(BMIs);
      
    }
   
   
  return (
    
    <div>
        <form action="" className='f1'>
            <label htmlFor="" >Weight</label>
            <input onChange={weight} type="number" />
            <br></br>
            <label htmlFor="" >Heightft</label>
            <input onChange={heightinfeet} type="number" />
            <br></br>
            <label htmlFor="">Heightinc</label>
            <input onChange={heightininch} type="number" />
            <br />
            <button onClick={Calculate}>Calculate</button>
            {/* <p>{BMIss}</p> */}
        </form>
      
    </div>
  )
}

export default BMI
