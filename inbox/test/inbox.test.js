const assert = require('assert');
const ganache = require('ganache-cli');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile')

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
});

describe('Testing Inbox class', () => {
    it('Testing a dummy Method', () => {
        // console.log(accounts); // for printing the accounts
        console.log(contract);
    });
})