import React from 'react'

const Header = () => {
  return (
    <div className="header relative flex justify-between items-center p-4 border-2 border-blue-500">
      <div className="logo flex items-center gap-2 border-2 border-blue-500 ">
        <img className="w-12" src="/images/fm-logo.png" alt="" />
        <h1>FM BUS</h1>
      </div>
      <div className='menu flex gap-4 items-center justify-between'>
        <div className="nav flex gap-4 ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Routes</a>
        </div>
        <div className='user   flex items-center gap-2 border-2 border-blue-500 p-2'>
            <img className='w-12' src="../images/user.png" alt="icon" />
            <h2>Sign up/ Login</h2>
        </div>
      </div>
    </div>
  );
}

export default Header
