const assert = require('chai').assert;
//const app = require('../app');
const sayHello = require('../app').sayHello
const addition = require('../app').additon
describe('App', function(){
    it('sayHello should return hello', function(){
        assert.equal(sayHello(),'hello')
    });
    it('sayHello should return type String', function(){
        let result =sayHello();
        assert.typeOf(result,'string');
    })

    it('addition function should return the addition of two numbers', function(){
        const number1=20;
        const number2=30;
        const expected= number1+number2;
        let result=addition(number1,number2);
        assert.equal(result,expected);
    })
    it('addition function should return a number Type', function(){
        const number1=15.5;
        const number2=30;
        let result=addition(number1,number2);
        assert.typeOf(result,'number');
    })


})