// const axios = require('axios');

// async function main() {
//   const Voting = await ethers.getContractFactory("Voting");

//   try {
//     // Fetch JSON data from the provided link
//     const response = await axios.get('https://coffee-managing-swan-971.mypinata.cloud/ipfs/QmUHpoP4Tx5CWEWckJCXMY7ALN6mWdQ5KqKV4u9kT4rfra');
    
//     // Log the fetched data to check its structure
//     console.log("Fetched data:", response.data);

//     // Extract names from JSON data into an array
//     const namesArray = response.data.map(item => item.name);
//     console.log(namesArray)
//     // Start deployment, passing the extracted names array as argument
//     const Voting_ = await Voting.deploy(["Congress", "BJP", "Communist", "Others"], 20);

//     console.log("Contract address:", Voting_.address);
//   } catch (error) {
//     console.error('Error fetching or parsing JSON data:', error);
//     process.exit(1);
//   }
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });


const fs = require('fs').promises;

async function main() {
  // Read the JSON file containing party names
  const partyData = await fs.readFile('./scripts/party.json');
  const partyNames = JSON.parse(partyData);

  // Extract party names from the JSON object
  const parties = Object.values(partyNames);

  const Voting = await ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(parties, 5);
  console.log("Contract address:", Voting_.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });






// const axios = require('axios'); // Import axios for making HTTP requests

// async function getCandidateNamesFromPinata() {
//   try {
//     const response = await axios.get('https://example.com/pinata/candidate-names'); // Replace the URL with the actual endpoint provided by Pinata
//     return response.data.candidateNames; // Assuming the response contains an object with candidate names under the key 'candidateNames'
//   } catch (error) {
//     throw new Error('Error fetching candidate names from Pinata: ' + error.message);
//   }
// }

