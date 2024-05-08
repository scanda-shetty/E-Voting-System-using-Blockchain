// import { useState, useEffect } from 'react';
// import {ethers} from 'ethers';
// import {contractAbi, contractAddress} from './Constant/constant';
// import Login from './Components/Login';
// import Finished from './Components/Finished';
// import Connected from './Components/Connected';
// import Layout from './Components/Layout';
// import Header from './Components/Header';
// import './App.css';

// function App() {
//   const [provider, setProvider] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [isConnected, setIsConnected] = useState(false);
//   const [votingStatus, setVotingStatus] = useState(true);
//   const [remainingTime, setremainingTime] = useState('');
//   const [candidates, setCandidates] = useState([]);
//   const [number, setNumber] = useState('');
//   const [CanVote, setCanVote] = useState(true);


//   useEffect( () => {
//     getCandidates();
//     getRemainingTime();
//     getCurrentStatus();
//     if (window.ethereum) {
//       window.ethereum.on('accountsChanged', handleAccountsChanged);
//     }

//     return() => {
//       if (window.ethereum) {
//         window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
//       }
//     }
//   });


//   async function vote() {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract (
//         contractAddress, contractAbi, signer
//       );

//       const tx = await contractInstance.vote(number);
//       await tx.wait();
//       canVote();
//   }


//   async function canVote() {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract (
//         contractAddress, contractAbi, signer
//       );
//       const voteStatus = await contractInstance.voters(await signer.getAddress());
//       setCanVote(voteStatus);

//   }

//   async function getCandidates() {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract (
//         contractAddress, contractAbi, signer
//       );
//       const candidatesList = await contractInstance.getAllVotesOfCandiates();
//       const formattedCandidates = candidatesList.map((candidate, index) => {
//         return {
//           index: index,
//           name: candidate.name,
//           voteCount: candidate.voteCount.toNumber()
//         }
//       });
//       setCandidates(formattedCandidates);
//   }


//   async function getCurrentStatus() {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract (
//         contractAddress, contractAbi, signer
//       );
//       const status = await contractInstance.getVotingStatus();
//       console.log(status);
//       setVotingStatus(status);
//   }

//   async function getRemainingTime() {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract (
//         contractAddress, contractAbi, signer
//       );
//       const time = await contractInstance.getRemainingTime();
//       setremainingTime(parseInt(time, 16));
//   }

//   function handleAccountsChanged(accounts) {
//     if (accounts.length > 0 && account !== accounts[0]) {
//       setAccount(accounts[0]);
//       canVote();
//     } else {
//       setIsConnected(false);
//       setAccount(null);
//     }
//   }

//   async function connectToMetamask() {
//     if (window.ethereum) {
//       try {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         setProvider(provider);
//         await provider.send("eth_requestAccounts", []);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setAccount(address);
//         console.log("Metamask Connected : " + address);
//         setIsConnected(true);
//         canVote();
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       console.error("Metamask is not detected in the browser")
//     }
//   }


  

// const handleNumberChange = (newValue) => {
//     setNumber(newValue); // Assuming you are using useState to manage number state
// };

  

//   return (
//     <Layout>
//       { votingStatus ? (isConnected ? (<Connected 
//                       account = {account}
//                       candidates = {candidates}
//                       remainingTime = {remainingTime}
//                       number= {number}
//                       handleNumberChange = {handleNumberChange}
//                       voteFunction = {vote}
//                       showButton = {CanVote}/>) 
                      
//                       : 
                      
//                       (<Login connectWallet = {connectToMetamask}/>)) : (<Finished />)}
//     </Layout>
//   );
// }

// export default App;



















import { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import {contractAbi, contractAddress} from './Constant/constant';
import Register from './Components/Register';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Finished from './Components/Finished';
import Connected from './Components/Connected';
import Layout from './Components/Layout';
import Header from './Components/Header';
import './App.css';

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [voterName, setName] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [remainingTime, setremainingTime] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState('');
  const [CanVote, setCanVote] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect( () => {
    getCandidates();
    getRemainingTime();
    getCurrentStatus();
  });


  async function vote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );

      const tx = await contractInstance.vote(number);
      await tx.wait();
      canVote();
  }


  async function canVote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const voteStatus = await contractInstance.voters(await signer.getAddress());
      setCanVote(voteStatus);

  }

  async function getCandidates() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const candidatesList = await contractInstance.getAllVotesOfCandiates();
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          voteCount: candidate.voteCount.toNumber()
        }
      });
      setCandidates(formattedCandidates);
  }


  async function getCurrentStatus() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const status = await contractInstance.getVotingStatus();
      console.log(status);
      setVotingStatus(status);
  }

  async function getRemainingTime() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const time = await contractInstance.getRemainingTime();
      setremainingTime(parseInt(time, 16));
  }


  async function connectAdmin(phoneNumber){
    if (phoneNumber === 'admin') {
      setIsAdmin(true);
    }
  }
  // async function connectToMetamask(phoneNumber) {
  //   if (isConnected) {
  //     console.log('Already connected to MetaMask:', account);
  //     return; // Do nothing if already connected
  //   }
  
  //   if (window.ethereum) {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       await provider.send('eth_requestAccounts', []);
  //       const signer = provider.getSigner();
  
  //       // Check the mobile number and set the corresponding MetaMask account
  //       let address;
  //       if (phoneNumber === '8151944386') {
  //         // This address should correspond to the MetaMask account for the provided mobile number
  //         address = '0xc58D2f6E3893a0dAF53fAae383CfEfABB1ed301C';
  //       } else if (phoneNumber === '8983098791') {
  //         // This address should correspond to the MetaMask account for the provided mobile number
  //         address = '0xAc3aad780a071b7bf012F34a920206B28DDb8CD4';
  //       }  else {
  //         // Handle other cases or display an error if needed
  //         console.error('Invalid mobile number.');
  //         return;
  //       }
  
  //       setProvider(provider);
  //       setAccount(address); // Set the MetaMask account
  //       setIsConnected(true);
  //       console.log('Metamask Connected:', address);
  //       canVote(); // Call your canVote function
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   } else {
  //     console.error('Metamask is not detected in the browser');
  //   }
  // }
  
  const connectToMetamask = async (phoneNumber) => {
    // Retrieve registration data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    // Check if registration data exists
    if (Array.isArray(userData)) {
      // Find the user with the matching mobile number
      const user = userData.find(user => user.mobileNumber === phoneNumber);
      
      // If user exists
      if (user) {
        // Set the MetaMask account address from the user data
        const { voterId, name } = user;
        const address = voterId;
        const username = name;
        console.log(username, address)
        // Check if MetaMask is detected in the browser
        if (window.ethereum) {
          try {
            // Initialize provider with MetaMask
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            
            // Request accounts from MetaMask
            await provider.send('eth_requestAccounts', []);
            
            // Set signer
            const signer = provider.getSigner();
    
            // Set the provider and account states
            setProvider(provider);
            setAccount(address);
            setName(username);
            
            // Set isConnected state to true
            setIsConnected(true);
    
            // Log success message
            console.log('Metamask Connected:', address);
    
            // Call any other necessary functions here
            canVote(); // For example, call canVote function
          } catch (err) {
            // Log error if any
            console.error(err);
          }
        } else {
          // Log if MetaMask is not detected in the browser
          console.error('Metamask is not detected in the browser');
        }
      } else {
        // Log if the mobile number is not registered
        alert('Mobile number is not registered');
      }
    } else {
      // Log if userData is not an array
      console.error('User data is not in the expected format');
    }
  };
  
  
  

const handleNumberChange = (newValue) => {
    setNumber(newValue); // Assuming you are using useState to manage number state
};

  

return (
  <Layout>
    {isAdmin ? (
      <Admin 
        candidates={candidates}
              remainingTime={remainingTime}
              number={number}
              handleNumberChange={handleNumberChange}
      />
    ) : (
      <div>
        {votingStatus ? (
          isConnected ? (
            <Connected 
              account={account}
              voterName={voterName}
              candidates={candidates}
              remainingTime={remainingTime}
              number={number}
              handleNumberChange={handleNumberChange}
              voteFunction={vote}
              showButton={CanVote}
            />
          ) : (
            <Login connectWallet={connectToMetamask} adminLogin={connectAdmin}/>
          )
        ) : (
          <Finished candidates={candidates} />
        )}
      </div>
    )}
  </Layout>
);


}

export default App;