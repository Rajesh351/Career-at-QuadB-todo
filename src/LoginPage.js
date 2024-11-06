import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from './redux/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(store => store.auth);
  
  // State to hold username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login button click
  const handleLogin = () => {
    // For now, just toggling login state
    // You can add validation or API call here with username & password if needed
    dispatch(setLogin(!login));
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        
        {/* Username Input */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border rounded-md"
        />
        
        {/* Password Input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-md"
        />
        
        {/* Login Button */}
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
