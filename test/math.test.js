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

        it('should return 4 when square 2', () => {
            expect(result).to.be.equal(4)
        })
    })

    context('sumWithCallback', () => {
        it('should test the callback', done => {
            math.sumWithCallback(3, 3, (error, result) => {
                expect(result).to.equal(6)
                expect(error).to.not.exist
                done()
            })
        })

        it('should test the callback with promise', done => {
            math.sumWithPromise(4, 4).then(res => {
                expect(res).to.be.equal(8)
                done()
            })
        })
    })
    
})