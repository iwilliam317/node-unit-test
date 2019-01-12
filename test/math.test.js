const math = require('../src/math')
const chai = require('chai')
const expect = chai.expect

describe('math', () => {
    let result;

    context('sum()', () => {
        
        before(() => {
            result = math.sum(1,1)
        })

        it('should return 2 when 1 + 1', () => {
            expect(result).to.be.equal(2)
            expect(result).to.be.a('number')
        })
    })

    context('squared()', () => {

        before(() => {
            result = math.square(2)
        })

        it('should return ', () => {
            expect(result).to.be.equal(4)
        })
    })
})