Commands needed 
- mkdir inbox
- cd inbox
- npm init

To Install Solidity compiler in nodejs
- npm install solc@0.5.8

To Install gananche for web3
- npm install --save mocha ganache-cli web3

testing
- const { Web3 } = required('web3');
- change test: 'mocha' in package.json
- npm run test

deployment
- npm install @truffle/hdwallet-provider
- const HDWalletProvider = require('@truffle/hdwallet-provider');
- node deploy.js