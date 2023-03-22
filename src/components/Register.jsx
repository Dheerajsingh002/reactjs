import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='con'>
    <form className='myForm' action="">
      <label htmlFor="">Mobile</label>
      <input type="number" />
      <br />
      <label htmlFor="">Password</label>
      <input type="password" />
      <br />
      <label htmlFor="">Confirm Password</label>
      <input type="password" />
      <br />
      <button className='Register'>Register</button>
    </form>
  </div>
  )
}

export default Register

