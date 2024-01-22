import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
        require: [true, "username is require"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required "]
    },
    token: {
        type: String,
    }
}, { timestamps: true })

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
 }
 

userSchema.methods.genrateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,

    }, process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        })
}
userSchema.methods.generateRefreshToken = function (){
    return  jwt.sign({
        _id: this._id,
      
    },
    process.env.REFRESH_TOKEN_SECRET,
    { 
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    })  
}
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10);
    next()
})

export const User = mongoose.model('User', userSchema);