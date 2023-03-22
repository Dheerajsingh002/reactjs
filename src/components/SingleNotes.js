import React from 'react'

function SingleNotes(props) {
    const nstyle={
        border:'2px solid green',
        padding:'20px',
        borderRadius:'10px',
        backgroundColor:'#eff2e4'
    }
  return (
    <div className='SingleNotes' style={nstyle}>
        <p className='noteText'>{props.note}</p>
      
    </div>
  )
}

export default SingleNotes
