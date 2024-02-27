const UserModel = require('../model/UserModel')

module.exports = {
   async  createUser (req,res,next){
        try {
            const {username, email,password} = req.body;
            const newUser = await UserModel.create({username, email, password});
            return res.json({success: true, data: newUser})
            
        } catch (err) {
            console.log(err)
            return res.json({success: false, user: err})
        }
    },
    async updateUser (req,res,next){
        try {
            const id = req.params.id;
            const {username, email,password} = req.body;
            const user = await UserModel.findOne({_id: id});

            if(!user){
                return res.json({success: false , message: "User Not found"})
            }

            await UserModel.findOneAndUpdate({
                _id:user._id
            },{
                $set:{
                    username,
                    email,
                    password
                }
            });
            return res.json({success: true, message:""})
            
        } catch (err) {
            return res.json({success: false, message:err })
        }

    },
    async finUserByID (req,res,next){
      
        try {
            const id = req.params.id;
            const user = await UserModel.findOne({_id: id});
            return res.json({success: true, message:"", data: user})
        }catch(err){
            return res.json({success: false, message:err })
        }

    },
    async getALLUsers (req,res,next){
        try {
            const users = await UserModel.find();
            return res.json({success: true, message:"", data: users})
        }catch(err){
            return res.json({success: false, message:err })
        }
        

    },
    async deleteUser (req,res,next){
        try {
            const id = req.params.id;
            const user = await UserModel.findOne({_id: id});

            if(!user){
                return res.json({success: false , message: "User Not found"})
            }
            
            await UserModel.deleteOne({_id:id})
            return res.json({success: true , message: ""})
        } catch (err) {
            return res.json({success: false, message:err })
        }
    },

}