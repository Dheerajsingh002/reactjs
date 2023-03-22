import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='con'>
      <form className='myForm' action="">
        <label htmlFor="">Mobile</label>
        <input type="number" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" />
        <br />
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;
