let User=require('../model/user');
exports.Signup=async(req,res) =>{
    try {
        const {username,password}=req.body;
        const newUser=await new User({
            username,
            password
        })
        newUser.save();
  
        res.status(200).json({message:"User created successfully"})    
    } catch (error) {
        console.log(error.message)

    }
    
}

exports.Login=async(req,res) =>{
    try {
        const {username,password}=req.body;
        const finduser=await User.findOne({username:username,password:password});
   
        if(finduser === null)
        {
            res.status(401).json({message:"Invalid credentials"})
        }
        else{
            res.status(200).json({message:"Login successfully"})
        }     
    } catch (error) {
        console.log(error.message)
    }
   
}