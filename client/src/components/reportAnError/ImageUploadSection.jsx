import React, { useState } from 'react';
import useCloudinary from '../../hooks/useCloudinary';

function ImageUploadSection({images,setImages}) {
    const { uploadImage } = useCloudinary();

    const handleImageUpload = async (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const uploadedImages = [];
            for (const file of files) {
                const { success, imageUrl } = await uploadImage(file);
                if (success && imageUrl) {
                    uploadedImages.push(imageUrl);
                }
            }
            setImages((prevImages) => [...prevImages, ...uploadedImages]);
        }
    };
    const handleDeleteImage = (url) => {
        setImages((prevImages) => prevImages.filter(image => image !== url));
    };

    return (
        <div className="flex flex-col space-y-2">
            <p className="text-xs font-light text-[#181C1E]">Uploaded Photos</p>
            <div className="flex gap-2 overflow-auto">
                {images.map((url, index) => (
                    <div key={index} className="relative">
                        <img src={url} alt={`Uploaded Preview ${index}`} className="w-12 h-12 object-cover rounded-2xl" />
                        <button
                            onClick={() => handleDeleteImage(url)}
                            className="absolute h-4 w-4 -top-[10%] right-[50%]  flex items-center justify-center bg-white  rounded-full"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
                multiple
            />
            <label htmlFor="image-upload" className="flex justify-center items-center gap-2 bg-secondary rounded-lg p-2 cursor-pointer">
                <p className="txt text-lg">Upload Photos</p>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.3125 14.25V4.57187L5.225 7.65937L3.5625 5.9375L9.5 0L15.4375 5.9375L13.775 7.65937L10.6875 4.57187V14.25H8.3125ZM2.375 19C1.72187 19 1.16296 18.7676 0.69825 18.3029C0.233541 17.8382 0.000791667 17.2789 0 16.625V13.0625H2.375V16.625H16.625V13.0625H19V16.625C19 17.2781 18.7676 17.8374 18.3029 18.3029C17.8382 18.7684 17.2789 19.0008 16.625 19H2.375Z"
                        fill="#181C1E"
                    />
                </svg>
            </label>
        </div>
    );
}

export default ImageUploadSection;
