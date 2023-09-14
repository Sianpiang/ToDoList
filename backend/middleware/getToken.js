
const getToken = (req,res,next)=>{
    const authorization = req.get("authorization")
    if(authorization&&authorization.startsWith("bearer ")){
        req.token=authorization.replace("bearer ","")
    }
    next()
}

export default getToken