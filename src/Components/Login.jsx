import React, { useState } from 'react';

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    if (phoneNumber === 'admin') {
      props.adminLogin(phoneNumber);
    } else {
      props.connectWallet(phoneNumber);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emblem_of_India_%28Gold%29.svg/331px-Emblem_of_India_%28Gold%29.svg.png" alt="Image" className="image" />
      </div>
      <h1 className="">Welcome to E-voting</h1>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={phoneNumber}
        className="register-input"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>

      <style jsx>{`
        .login-container {
          text-align: center;
          text-align: center;
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }

        .image-container {
          margin-bottom: 10px; /* Space below the image */
          margin-top: -200px; /* Move image slightly above */
        }

        .image {
          max-width: 170px; /* Ensure image fits within its container */
          max-height: 170px; /* Ensure image fits within its container */
        }

        .welcome-message {
          margin-bottom: 2px; /* Space below the welcome message */
          font-size: 24px; /* Adjust font size as needed */
        }

        .login-button {
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          background-color: orange; /* Example button color */
          color: black;
          border: none;
          cursor: pointer;
          margin-top: 10px;
        }
        .register-input {
          width: 20%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          transition: border-color 0.3s ease; /* Add transition for smooth effect */
        }

        .register-input:focus {
          border-color: green; /* Change border color to light orange when focused */
          background-color: #FFD580;
        }

      `}</style>
    </div>
  );
};

export default Login;
