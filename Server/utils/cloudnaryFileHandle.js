import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
import path from 'path';

cloudinary.config({ 
    cloud_name: 'dqerofx7m', 
    api_key: '864172166673397', 
    api_secret: '-PKSQuST0Fq1I8IyH3-lT4lvIz8'
  });


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        console.log(localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "ecommcloth",
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        console.log("no error");
        return response;

    } catch (error) {
        console.log("error in multer", error);
        fs.unlinkSync(localFilePath) 
        return null;
    }
}
const deleteOnCloudinary = async (publicId) => {

    const folder = "ecommcloth";
console.log(`${folder}/${publicId}`);
    try {
        console.log(publicId);
        const result = await cloudinary.uploader.destroy(`${folder}/${publicId}`, { invalidate: true });
        console.log(result);
    return result;
    } catch (error) {
        const result = {result: "error"};
        return result
    }
    
}
export {uploadOnCloudinary, deleteOnCloudinary}

