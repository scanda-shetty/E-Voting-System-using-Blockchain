// import axios from 'axios';
// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const Admin = () => {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);

//   const handleRegister = async () => {
//     try {
//       // Ensure that both name and image are provided
//       if (!name || !image) {
//         console.error('Name and image are required.');
//         return;
//       }
  
//       // Create a FormData object to send the image file
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('image', image);
  
//       // Send data to Pinata API
//       const response = await axios.post(
//         'https://api.pinata.cloud/pinning/pinFileToIPFS',
//         formData,
//         {
//           headers: {
//             'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
//             'pinata_secret_api_key': process.env.REACT_APP_PINATA_SECRET_API_KEY,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
  
//       // Log IPFS hash where image data is stored
//       console.log('Image pinned to IPFS with hash:', response.data.IpfsHash);
  
//       // Clear form fields after successful registration
//       setName('');
//       setImage(null);
//     } catch (error) {
//       console.error('Error pinning image:', error);
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

//         <Form.Group className="mb-3" controlId="image">
//           <Form.Label>Image</Form.Label>
//           <Form.Control
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
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


import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  margin: 0 auto; /* Center the container horizontally */
  max-width: 800px; /* Limit the width of the container */
  padding-top: 80px;
  border-radius: 10px;
`;

const TopRight = styled.div`
  position: absolute;
  top: 120px;
  right: 0px;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px; /* Add padding */
  border-radius: 5px; /* Add border radius */
  background-color: green; /* Add background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

const ConnectedAccount = styled.p`
  text-align: center; /* Center the text */
  margin-bottom: 20px;
  background-color: #E0FFFF; /* Cyan background color */
  padding: 10px; /* Add padding for spacing */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add box shadow */
  border-bottom: 2px solid #333; /* Add bottom border */
  color: blue;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ThTd = styled.td`
  padding: 8px;
  border: none; /* Remove borders */
  text-align: center; /* Center the content */
`;

const Th = styled.th`
  border: none;
`;

const VoteButton = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;

const TableHeading = styled.div`
  text-align: center;
  margin-bottom: 10px;
  position: relative;
`;


const Admin = (props) => {
  // Function to convert seconds to hours:minutes:seconds format
  const formatTime = (seconds) => {
    seconds = Math.floor(seconds / 10);  // Divide the time by 10
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes}:${remainingSeconds}`;
  };

  return (
    <Container>
      <TopRight>Remaining Time: {formatTime(props.remainingTime)}</TopRight>
      <div>
        <TableHeading>
          <h2>Admin Dashboard</h2>
        </TableHeading>
        <Table>
          <thead>
            <tr>
              <Th>Election Symbol</Th>
              <Th>Party</Th>
              <Th>Vote Count</Th>
            </tr>
            <tr>
              <Th colSpan="3" style={{ borderBottom: "2px solid #ddd" }}></Th> 
            </tr>
          </thead>
          <tbody>
            {props.candidates.map((candidate, index) => (
              <tr key={index}>
                <ThTd>
                  <StyledImage
                    src={require(`../assets/images/${index}.png`)} // Path to your image
                    alt={`Symbol ${index}`}
                  />
                </ThTd>
                <ThTd>{candidate.name}</ThTd>
                <ThTd>{candidate.voteCount}</ThTd>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Admin;
