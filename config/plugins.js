module.exports = {
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
    actionOptions: {
      upload: {
        allowedFormats: ['jpg', 'jpeg', 'png'],
      },
    },
  },
};
