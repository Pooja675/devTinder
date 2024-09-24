// Handle auth middleware for all methods GET, POST, PUT.....

const adminAuth =  (req,res,next) => {

    console.log("Admin auth is getting checked.")
    const token = "xyzdsdsd";
    const isAdminAutharized = token === "xyz";
    if(!isAdminAutharized){

        res.status(401).send("Unauthorized Request.")
    } else{
            next()
    }

}

const userAuth =  (req,res,next) => {

    console.log("User auth is getting checked.")
    const token = "xyz";
    const isAdminAutharized = token === "xyz";
    if(!isAdminAutharized){

        res.status(401).send("Unauthorized Request.")
    } else{
            next()
    }

}

module.exports = {
    adminAuth,
    userAuth,
}