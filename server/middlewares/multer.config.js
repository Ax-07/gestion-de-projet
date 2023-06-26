const multer = require('multer');

const MYME_TYPES = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'client/public/images');
    },
    fileName: (req, file, callback) => {
        const name = file.originalName.split(' ').join('_');
        const extension = MYME_TYPES[file.mimeType];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports =multer({storage: storage}).single('image');