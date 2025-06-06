# Project: Collateralized Loan Smart Contract Development

In this project, you will develop, deploy, and interact with a simple collateralized loan contract on the Ethereum blockchain using Solidity. This contract will manage loans backed by Ethereum as collateral, offering hands-on experience with real-world financial smart contracts.

## Getting Started

Use the following command to clone the repo:

```
git clone https://github.com/TartarusDevtech/Collateralized-Loan.git
cd Collateralized-Loan

```

Once you have the starter code, head over to the `starter` directory. You will notice one folder: `hardhat-js` . We have mostly been using Hardhat with JavaScript.

### Dependencies

We will mostly use Hardhat for this project to write, deploy, and test the smart contract.

### Installation

If you are using Udacity's workspace, you do **NOT** need to install any software packages. 

If you are using your local environment, head over to `hardhat-js` and install the necessary dependencies using the following command.

```
npm install
```

You will also find a file `.env.example` , you will need to create a `.env` file similar to that.

```
INFURA_API_KEY=
ACCOUNT_PRIVATE_KEY=
```

Add your wallet private key and [infura](https://www.infura.io/) API key.

## Testing

Head over to `test` folder and create a new file to write the tests.

### **Project Deliverables**

### 1. Deploy the Smart Contract on Sepolia Testnet

- Successfully deploy your Collateralized Loan smart contract to the Sepolia testnet.

### 2. Write the Smart Contract and Hardhat Test Script

- Develop and finalize the Solidity code for the Collateralized Loan contract.
- Write comprehensive test scripts using Hardhat to validate the contract's functionalities.

### 3. Etherscan Verification

- Provide a link to the Sepolia Etherscan page confirming the successful deployment of your contract.
- The Etherscan link should display the contract address and transaction details on the Sepolia testnet.

### 4. GitHub Repository Link

- Submit the link to your GitHub repository containing the project.
- The repository should include:
  - The Solidity smart contract code.
  - Hardhat test scripts.
  - A README file containing the Sepolia Etherscan link of the deployed contract

### **Notes for Submission**

- Ensure that the GitHub repository is public and accessible.
- Double-check the Etherscan link to ensure it directs to the correct contract and network.
- The smart contract code should be well-commented for clarity and understanding.
- Hardhat Test Scripts should cover all critical paths and edge cases in the contract functionality.
- The README must contain the Sepolia Etherscan link of the deployed contract.

## License

[License](LICENSE.txt)
