const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dgx2v3fnk',
  api_key: '852753386513374',
  api_secret: 'APa-UKXfdLf-WK5K0WBbMHZsJtU',
});

const handleUpload = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: 'auto',
    });

    return result;
  } catch (error) {
    throw new Error('Error al cargar la imagen a Cloudinary' + error);
  }
};

const updateUpload = async (file) => {
  await cloudinary.uploader.upload(file, {
    public_id: image.public_id,
    overwrite: true,
  });
};

const deleteImageFromCloudinary = async (id) => {
  try {
    const result = await cloudinary.uploader.destroy(id);

    if (result.result === 'ok') {
      // console.log('Imagen eliminada de Cloudinary correctamente');
    } else {
      // console.log('Error al eliminar la imagen de Cloudinary');
    }
  } catch (error) {
    console.error('Error al eliminar la imagen de Cloudinary:', error.message);
  }
};

const getAllImagesFromCloudinary = async () => {
  try {
    const result = await cloudinary.search
      .expression('resource_type:image')
      .execute();

    const images = result.resources.map((image) => ({
      asset_id: image.asset_id,
      public_id: image.public_id,
      url: image.url,
      format: image.format,
      width: image.width,
      height: image.height,
      created_at: image.created_at,
    }));

    console.log('Imágenes encontradas en Cloudinary:', images);
    return images;
  } catch (error) {
    console.error(
      'Error al obtener las imágenes de Cloudinary:',
      error.message
    );
    return [];
  }
};

module.exports = {
  getAllImagesFromCloudinary,
  deleteImageFromCloudinary,
  handleUpload,
  updateUpload,
};
