const Car = require('../src/car')
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

context('car', () => {

    let car;

    before( () => {
        car = new Car('Ferrari 458')
    })
    describe('getModel()', () => {
        it('should return model Ferrari 458', () => {
            expect(car.getModel()).to.be.equal('Ferrari 458')
        })

        it('should have getModel() to be called once', () => {
            const spy = sinon.spy(car, 'getModel')
            car.getModel()
            expect(spy).to.have.been.calledOnce
            expect(spy).to.have.been.callCount(1)
        })
    })
    
    describe('setModel()', () => {
        it('should set BMW M5 as new model', () => {
            car.setModel('BMW M5')
            expect(car.getModel()).to.be.equal('BMW M5')
            expect(car.getModel()).not.to.be.equal('Ferrari 458')
        })

        it('should stub setModel')
    })
    
})