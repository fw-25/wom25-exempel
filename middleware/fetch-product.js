module.exports = (req, res, next) => {
    req.product = 'Mjölk'
    console.log('shop request')
    next()
}