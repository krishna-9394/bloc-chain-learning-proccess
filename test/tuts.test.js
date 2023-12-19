// const assert = require('assert');
// const ganache = require('ganache-cli');
// const { Web3 } = require('web3');
// const web3 = new Web3(ganache.provider());

// class Car {
//     drive() {
//         return "Car is Driving";
//     }
//     park() {
//         return "Parked";
//     }
// }

// describe('Testing Car Class', () => {
//     it('Testing Drive method', () => {
//         const car = new Car();
//         assert.equal(car.drive(), "Car is Driving");
//     });
//     it('Testing Park method', () => {
//         const car = new Car();
//         assert.equal(car.park(), "Parked");
//     });
// });

// // Learning how to use beforeEach

// let car;
// beforeEach(() => {
//     car = new Car();
// });

// describe('Car Testing using BeforEach', () => {
//     it('Park Test', () => {
//         assert.equal(car.park(), "Parked");
//     });
//     it('Drive Test', () => {
//         assert.equal(car.drive(), "Driving");
//     });

// });