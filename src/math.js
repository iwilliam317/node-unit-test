const sum = (a , b) => a + b

const square = a => a ** 2

const sumWithCallback = (a, b, callback) => {
    setTimeout(() => {
        return callback(null, a + b)
    }, 1500)
   
}

module.exports = { sum, square, sumWithCallback }