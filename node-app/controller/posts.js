let Posts =require('../model/posts');

exports.add=async(req,res)=>{
try {
    const {description,title}=req.body;

        const Post=await new Posts({
            description,
            title,
            Image:req.files.image[0].path
        })
        Post.save();
     
        res.status(200).json({message:"Post created successfully"})    

    
    
} catch (error) {
    console.log(error.message)
}
}

exports.all=async(req,res)=>{
    try {
        const allposts=await Posts.find();
        if(allposts)
        {
            res.status(200).json(allposts)
        }
        else{
            res.status(200).json({message:"no post"})

        }
    } catch (error) {
        console.log(error.message)
        
    }
    }


    exports.delete=async(req,res)=>{
        try {
            const {_id}=req.params;
        
            const deletepost=await Posts.findByIdAndDelete({_id})
            if(deletepost)
            {
                res.status(200).json({message:"post deleted successfully"})

            }
            else{
                res.status(200).json({message:"post not found"})

            }
        } catch (error) {
            console.log(error.message)
            
        }
        }


        exports.update=async(req,res)=>{
            try {
                
                const {id,title,description}=req.body;

                const update=await Posts.findByIdAndUpdate({_id:id},{$set:{title,description}})
                if(update)
                {
                  res.status(200).json({message:"post updated"})
                }
                else{
                    res.status(500).json({message:"post not found"})
                }
            } catch (error) {
                console.log(error.message)
   
            }
            }
