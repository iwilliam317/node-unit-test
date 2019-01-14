const sum = (a , b) => a + b

const square = a => a ** 2

const sumWithCallback = (a, b, callback) => {
    setTimeout(() => {
        return callback(null, a + b)
    }, 1500)
   
}

const sumWithPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b)
    })
}

const log = () => {
    console.log('logging..')
}

module.exports = { sum, square, sumWithCallback, sumWithPromise }