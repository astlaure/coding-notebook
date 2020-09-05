const path = require('path');
const multer = require('multer');
const mmm = require('mmmagic');

const ALLOWED_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/svg',
    'image/gif',
];

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.resolve(process.cwd(), 'storage/uploads'));
    },
    filename(req, file, cb) {
        const parts = file.originalname.split('.');
        cb(null, `${Date.now()}.${parts[parts.length - 1]}`);
    },
});

const fileFilter = (req, file, cb) => {
    const magic = mmm.Magic(mmm.MAGIC_MIME_TYPE);
    const filepath = path.resolve(process.cwd(), 'storage/uploads', file.filename);

    magic.detectFile(filepath, (err, result) => {
        if (err) {
            cb(err);
        } else {
            cb(null, ALLOWED_TYPES.includes(result));
        }
    });
};

const uploadMiddleware = multer({
    storage,
    fileFilter,
});

module.exports = uploadMiddleware;
