const math = require('../math')
const assert = require('assert')

describe('math', () => {
    context('function sum', () => {
        it('should return 2 when 1 + 1', () => {
            assert.equal(math.sum(1,1), 2)
        })
    })
})