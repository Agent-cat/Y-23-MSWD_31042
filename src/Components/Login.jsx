import axios from 'axios'
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center w-full h-full '>
      <input className='border-black border-2 px-4 py-2' id='username' type="text"  />
      <input className='border-black border-2 px-4 py-2 ml-6 mr-6' id='pass' type="text" />
      <button className='px-6 py-3 rounded-lg bg-red-600'
      onClick={()=>{
        const username = document.getElementById('username').value
        const pass = document.getElementById('pass').value
        axios.post('http://localhost:3008/signin', {username, pass})
        .then(res=>console.log(res))
      }}
       > Click Me</button>
    </div>
  )
}

export default Login
