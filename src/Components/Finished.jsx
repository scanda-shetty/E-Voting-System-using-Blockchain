import React, { useState } from "react";
import Register from "./Register";

const Finished = ({ candidates }) => {
    // Find the candidate with the highest vote count
    const winner = candidates.reduce((prev, current) => {
        return prev.voteCount > current.voteCount ? prev : current;
    });

    const [showRegister, setShowRegister] = useState(false);
    const [displayFinished, setDisplayFinished] = useState(true);

    const handleRegisterClick = () => {
        setShowRegister(true);
        setDisplayFinished(false); // Update displayFinished state to hide Finished component
    };

    return (
        <div className="login-container">
            {/* Conditionally render the "Voting is Finished" heading */}
            {displayFinished && (
                <div>
                <h1 className="welcome-message" onClick={handleRegisterClick}>
                    Voting has Ended!!
                </h1>
            <h2 style={{transform:"translate(50px, -80px)"}}>{`Winner: ${winner.name}`}</h2>
                </div>
            )}

            {/* Conditionally render the Register component */}
            {showRegister && <Register />}

            {/* Display the winner */}
        </div>
    );
};

export default Finished;
