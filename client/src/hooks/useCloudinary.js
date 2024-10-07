import axios from 'axios';
import CLOUD_NAME, { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config/cloudinary.config';
import CryptoJS from "crypto-js";
const useCloudinary = () => {

  const uploadImage = async (file, folder)=> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ttinigrd');
    if (folder) {
      formData.append('folder', folder);
    }
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: false
        }
      );

      return { success: true, imageUrl: response.data.secure_url };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  };

  const deleteImage = async (imageUrl)=> {
    const publicId = imageUrl.split('/').pop()?.split('.').shift();
    if (!publicId) {
      return { success: false };
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const apiSecret = CLOUDINARY_API_SECRET;
    // Generate the signature
    const signature = CryptoJS.SHA1(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`).toString(CryptoJS.enc.Hex);

    try {
      await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`,
        {
          public_id: publicId,
          signature,
          api_key: CLOUDINARY_API_KEY,
          timestamp
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      );
      console.log('Image deleted successfully');
      return { success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  };

  return { uploadImage, deleteImage };
};

export default useCloudinary;