import jwt from "jsonwebtoken";
import { User } from "../models/users/users.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import  {Strategy as GoogleStrategy}  from 'passport-google-oauth20';
import passport from 'passport'

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.genrateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        user.token = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "something went wrong while generating refreshToken and accessToken")
    }
}



const registerUser = asyncHandler(async (req, res) => {
    console.log("hello");

    const { username, email, password } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(400, "User with this email or username already exists");
    }

    const user = await User.create({
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password,
    })
    const createdUser = await User.findById(user._id).select("-password -token");
    if (!createdUser) {
        throw new ApiError(500, "something went wrong while resgistering user")
    }
    console.log("hello");
    res.status(200).json(
        new ApiResponse(200, createdUser, "user registered Successfully")
    )

})
const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!(username || email)) {
        throw new ApiError(400, "username or email is required");
    }
    const user = await User.findOne(
        { $or: [{ username }, { email }] }
    )
    if (!user) {
        throw new ApiError(404, "user doesn't exit");
    }
    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(404, "Invalid Password");
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    const loggedUser = await User.findById(user._id).select("-password -token");

    const option = {
        HttpOnly: true,
        secure: true,
    }

    return res.status(200)
        .cookie("accessToken", accessToken, option)
        .cookie("refreshToken", refreshToken, option)
        .json(

            new ApiResponse(
                200,
                { user: loggedUser, accessToken, refreshToken },
                "user loggedin Successfully"
            )

        )

})
const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id,
        { $set: { token: "" } }, { new: true })
    const option = {
        HttpOnly: true,
        secure: true,
    }
    res.status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(
        new ApiResponse(200, {}, "user logged out")
    )
})

export { registerUser, loginUser, logoutUser }