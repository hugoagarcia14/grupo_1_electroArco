const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../public/images/user/'));
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_user${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile;