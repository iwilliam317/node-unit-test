const assert = require('assert')

describe('test', () => {

    before(() => {
        console.log('##### BEFORE #####')
    })

    after(() => {
        console.log('##### AFTER #####')
    })
    
    context('toUpperCase()', () => {
        it('should return capital letter', () => {
            const sentence = 'Hello Word'
            assert.equal(sentence.toUpperCase(), 'HELLO WORD')
        })

        it('should be pending')
    })
})