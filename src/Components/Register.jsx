// import axios from 'axios';
// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const Admin = () => {
//   const [name, setName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [voterID, setVoterID] = useState('');

//   const handleRegister = async () => {
//     try {
//       const userData = {
//         name,
//         mobileNumber,
//         voterID,
//       };

//       // Fetch existing data from IPFS
//       const existingDataHash = 'QmQDyMHrjkVJL2QqwzZXspeBMV29BpKfUWyQ1T9vb3qFyV';
//       const existingDataResponse = await axios.get(
//         `https://ipfs.io/ipfs/${existingDataHash}`
//       );
//       let existingData = existingDataResponse.data || '';

//       // If there's existing data, add a newline separator before appending the new data
//       if (existingData) {
//         existingData += '\n';
//       }

//       // Append new user data to the existing data
//       existingData += JSON.stringify(userData);

//       // Pin the updated data back to IPFS with the same hash
//       const updatedResponse = await axios.post(
//         'https://api.pinata.cloud/pinning/pinJSONToIPFS',
//         { data: existingData },
//         {
//           headers: {
//             'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
//             'pinata_secret_api_key': process.env.REACT_APP_PINATA_SECRET_API_KEY,
//           },
//         }
//       );

//       console.log('Updated data pinned to IPFS with hash:', updatedResponse.data.IpfsHash);

//       // Clear form fields after successful registration
//       setName('');
//       setMobileNumber('');
//       setVoterID('');
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Register</h2>
//       <Form>
//         <Form.Group className="mb-3" controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="mobileNumber">
//           <Form.Label>Mobile Number</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter mobile number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="voterID">
//           <Form.Label>Voter ID</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter voter ID"
//             value={voterID}
//             onChange={(e) => setVoterID(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={handleRegister}>
//           Register
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Admin;



import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [voterId, setVoterId] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Retrieve existing user data array from localStorage or initialize an empty array
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];

    // Combine registration data into an object
    const userData = { name, mobileNumber, voterId };

    // Add the new user data to the existing array
    const updatedUserData = [...existingUserData, userData];

    // Save the updated user data array to localStorage
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    // Set registered state to true to display registration success message
    setRegistered(true);
  };

  return (
    <div className="register-container">
      <div className="image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emblem_of_India_%28Gold%29.svg/331px-Emblem_of_India_%28Gold%29.svg.png" alt="Image" className="image" />
      </div>
      <h4>Register yourself for the upcoming Elections</h4>
      {/* Name input */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="register-input"
      />
      {/* Mobile Number input */}
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="register-input"
      />
      {/* Voter ID input */}
      <input
        type="text"
        placeholder="Voter ID"
        value={voterId}
        onChange={(e) => setVoterId(e.target.value)}
        className="register-input"
      />
      {/* Registration button */}
      <button className="login-button" onClick={handleRegister}>Register</button>
      {/* Display registration success message */}
      {registered && <div>Registration successful!</div>}
      <style jsx>{`
        .login-container {
          text-align: center;
        }

        .image-container {
          margin-bottom: 10px; /* Space below the image */
          margin-top: -100px; /* Move image slightly above */
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
        .regiter-container {
          text-align: center;
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }

        .register-input {
          width: 100%;
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

        .register-button {
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          background-color: orange; /* Example button color */
          color: white;
          border: none;
          cursor: pointer;
          padding: 10px 20px;
          transition: background-color 0.3s ease;
        }

        .register-button:hover {
          background-color: #ff7f50; /* Change button color on hover */
        }

        .registration-success {
          margin-top: 20px;
          padding: 10px;
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          border-radius: 5px;
          color: #155724;
        }
      `}</style>
    </div>
  );
};

export default Register;

