import React, { useState } from 'react'
import SingleNotes from './SingleNotes';

export default function Inputs() {
    const [notes,AddNotes]=useState([]);
    const [abc,setNotes]=useState('');
    function Updatenotes()
    {
        // eslint-disable-next-line no-restricted-globals
        setNotes(event.target.value);
    }
    function AddElement()
    {
        const news = [...notes,abc];
        AddNotes(news);

    }
    const nstyle={
        listStyle:'none',
        display:'flex',
        gridTemplateColumn:'repeat(2,1fr)',
        gap:'20px'

        
    }
    
  return (
    <div>
        <input onChange={Updatenotes}  type="text" />
        <button onClick={AddElement}>Submit</button>
        <ul style={nstyle}>
         {notes.map((value,index)=><li key={index}><SingleNotes note={value}/></li>)}
        </ul>
      
    </div>
  )
}
