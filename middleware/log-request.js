module.exports = (req, res, next) => {
    console.log({remoteIp: req.ip, method: req.method})
    next()
}