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

const HeadingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  position: absolute;
  bottom: 0;
`;

const Connected = (props) => {
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
      {/* <h3>Welcome {props.voterName},</h3> */}
      <ConnectedAccount>Voter Id: {props.account}</ConnectedAccount>
      {props.showButton ? (
        <p className="connected-account">Thank You for Voting!</p>
      ) : (
        <div>
          <TableHeading>
            <h2>Cast Your Vote</h2>
          </TableHeading>
          <Table>
            <thead>
              <tr>
                <Th>Election Symbol</Th>
                <Th>Party</Th>
                <Th>Vote Count</Th>
                <Th>Vote</Th>
              </tr>
              <tr>
      <Th colSpan="4" style={{ borderBottom: "2px solid #ddd" }}></Th> 
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
                  <ThTd>
                    {/* Use a button for voting with confirmation */}
                    <VoteButton
                      onClick={() => {
                        const confirmed = window.confirm(
                          `Confirm vote for candidate ${index}?`
                        );
                        if (confirmed) {
                          props.handleNumberChange(index); // Call handleNumberChange with the candidate index
                          props.voteFunction(); // Call voteFunction to cast the vote
                        }
                      }}
                    >
                      Vote
                    </VoteButton>
                  </ThTd>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Connected;
