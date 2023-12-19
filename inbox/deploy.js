const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'defy critic soup zero announce creek struggle abuse setup rather else surprise',
    'https://goerli.infura.io/v3/0557a86890a7415086ba02b46a4e44d3',
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account: ",accounts[0]);
    const contract = await new web3.eth.Contract(interface)
        .deploy({ data: bytecode, arguments: ["Hii, How are you?"] })
        .send({ from: accounts[0], gas: '1000000', gasPrice: web3.utils.toWei('0', 'gwei') });
    
    console.log("Contract got deployed to ", contract.options.address);
    provider.engine.stop();
}

deploy();