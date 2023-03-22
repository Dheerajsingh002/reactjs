import React from 'react';
import './Gridd.css';

function Gridd(props) {
    var h=150;
    
    const nstyle={
        borderRadius:'18px',
        width:"100%"
    }
  return (
    <>
    <div className='con'>
        <div className="con1"  ><img src={props.img1} alt="" height={h} style={nstyle} /></div>
        <div className="con2"><img src={props.img2} alt="" height={h} style={nstyle} /></div>
        <div className="con3"><img src={props.img3} alt="" height={h}  style={nstyle} /></div>
        <div className="con4"><img src={props.img4} alt="" height={h}  style={nstyle} /></div>
       
        
    </div>
    <div className='con'>
        <div className="con1"><img src={props.img5} alt="" height={h}  style={nstyle} /></div>
        <div className="con2"><img src={props.img6} alt="" height={h}  style={nstyle} /></div>
        <div className="con3"><img src={props.img7} alt="" height={h}  style={nstyle} /></div>
        <div className="con4"><img src={props.img8} alt="" height={h}  style={nstyle} /></div>
        /
       
    </div>
    
    </>
    
    
  )
}

export default Gridd
