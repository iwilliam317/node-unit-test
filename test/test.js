const assert = require('assert')

describe('test', () => {

    console.log(`TESTS RUNNING ON ${process.env.NODE_ENV} MODE`)

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