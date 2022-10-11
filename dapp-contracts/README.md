# dapp-contracts

This project demonstrates the basic use of Hardhat. It contains a Message Contract with get and set function, a test file for it as well as a deployment script for it,

Contract ABI's are located inside artifacts folders after compiling the contracts for frontend web app dependency.

Try running some of the following tasks:

```js
// Compile solidty contracts, produces an artifacts
npx hardhat compile

// Run contracts test files
npx hardhat test

// Start local blockchain
npx hardhat node

// Deploy the contracts on local blockchain
npx hardhat run scripts/deploy.js --network localhost

// Deploy the contracts on mumbai(polygon testnet) blockchain
npx hardhat run scripts/deploy.js --network mumbai
```
