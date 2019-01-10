const assert = require('assert')

describe('String', () => {
    context('toUpperCase()', () => {
        it('should return capital letter', () => {
            const sentence = 'Hello Word'
            assert.equal(sentence.toUpperCase(), 'HELLO WORD')
        })
    })
})