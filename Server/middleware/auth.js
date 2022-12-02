const auth = (req,res,next) => {
    console.log("In Auth");
    console.log(req.cookies)
    next()
}

module.exports = auth
