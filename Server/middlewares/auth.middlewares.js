import jwt from 'jsonwebtoken';
import {ApiError} from '../utils/apiError.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {User} from '../models/users/users.model.js';

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        // console.log(req);
        let token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        };

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user =await User.findById(decodeToken?._id).select("-password -token");
        if (!user) {
            
            throw new ApiError(401, "Invalid Access token")
        };
        req.user = user
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invaild access token")
    }
});

