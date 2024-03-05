const User = require('../models/User')
const becrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async(req, res) => {
    try{
        const {username, email, password} = req.body

        console.log("user Details are : ", username, email, password);

        const salt = becrypt.genSaltSync(10)
        const hashPassword = becrypt.hashSync(password, salt)

        const newUser = new User({
            username, email, password:hashPassword
        })
        const user = await newUser.save()

        res.status(200).json({success:true, message: "successfully Created", user})
    }catch(err){
        res.status(500).json({success:false, message: "Failed to Created, Try Again", error: err.message})
    }
}

exports.login = async (req, res) => {
    try{
        const {email} = req.body
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({success:false,mesaage: "User Not Found"})
        }
        const checkPassword = await becrypt.compare(req.body.password, user.password)
        if(!checkPassword) {
            return res.status(401).json({success:false, message:"Incorrect email or password"})
        }

        // const {password, role, ...rest} = user?._doc
        let token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn:'15d'})

        return res.cookie('accessToken', token, {httpOnly: true, expires:token.expiresIn}).status(200).json({
            success:true, message:"Successfully login", data: user._doc, token
        })
    }catch(err){
        res.status(500).json({success:false, message:"Failed to Login", err})
    }
}