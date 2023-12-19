const assert = require('assert');
const ganache = require('ganache-cli');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');
const { memoryUsage } = require('process');

let accounts;
let contract;

beforeEach( async () => {
    // Getting a list of all accounts 
    // In this case promise is made for the accounts
    // web3.eth.getAccounts()
    // .then(accounts => {
    //     console.log(accounts);
    //     console.log("***");
    // });

    // getting a list of all accounts 
    // using await method
    accounts = await web3.eth.getAccounts();
    // using one of the account to deploy the contracts
    contract = await new web3.eth.Contract(interface)
        .deploy({data: bytecode, arguments: ["Hii, How are you?"]})
        .send({ from: accounts[0], gas: '1000000', gasPrice: web3.utils.toWei('10', 'gwei') });

    // the arguments section adjacent to data will passed as initial message to contract
});

describe('Testing Inbox class', () => {
    // it('Testing weather the contract got deployed or not', () => {
    //     console.log(accounts);// for printing the accounts
    //     console.log(contract);// for printing the details after deploying
    //     assert.ok(contract.options.address); // checking if the contract is deployed or not
    // });

    it('Testing 0: weather the contract is deployed or not', () => {
        assert.ok(contract.options.address);
    });

    it('Testing 1: has default message or not', async () => {
        const message = await contract.methods.message().call();
        // message( in this we pass the arguments of the method)
        // call() ( in this we pass details regard transaction such as from, to, gas)
        assert.equal(message,"Hii, How are you?");
    });

    it('Testing 2: can change the message or not', async () => {
        await contract.methods.setMessage('moye moye').send({ from: accounts[0], gasPrice: '100' });
        const message = await contract.methods.message().call();
        assert.equal(message, 'moye moye');
    });
})