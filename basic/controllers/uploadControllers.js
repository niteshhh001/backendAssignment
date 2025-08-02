const uploadFile=(req,res)=>{
    if(!req.file){
        return res.status(400).json({error:'No file found'});
    }
    res.status(200).json({
        message:'File uploaded successfully',
        file:{
            originalName:req.file.originalName,
            storedName:req.file.filename,
            size:req.file.size,
            path:req.file.path
        }
    });
}
module.exports={uploadFile};