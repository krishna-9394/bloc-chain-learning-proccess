const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','inbox.sol');
// path is used to get path to files and its used so that path does not changes with change in the system

const source = fs.readFileSync(inboxPath,'utf-8'); 

var input = {
    language: 'Solidity',
    sources: {
        'inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const interface = output.contracts['inbox.sol'].Inbox.abi;
const bytecode = output.contracts['inbox.sol'].Inbox.evm.bytecode.object;
console.log("Interface: ",interface);
console.log("ByteCode: ",bytecode);

module.exports = {interface, bytecode};


