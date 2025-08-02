const logger=(req,res,next)=>{
    const now= new Date();
    console.log(`[${now.toISOString()}] ${req.method} ${req.originalUrl}`);
    next(); // pass control to the next middleware or route handler
}
module.exports=logger;