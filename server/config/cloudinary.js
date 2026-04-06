import { v2 as cloudinary } from "cloudinary";
import process from "process";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


console.log("API Key: ", process.env.CLOUDINARY_API_KEY);
console.log("API Secret: ", process.env.CLOUDINARY_API_SECRET);

export default cloudinary;