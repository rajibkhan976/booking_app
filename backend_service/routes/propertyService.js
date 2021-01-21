var mysql = require("mysql");

const multer = require("multer");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'booking'
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
}

const upload = multer({ storage:  storage, fileFilter: fileFilter }).array('propertyimage');

uploadPropertyImage = (req, res, next) => {
	upload(req, res, function (error) {
		if (error instanceof multer.MulterError) {
			return res.status(500).send({"error": error});
		} else if (error) {
			return res.status(500).send({"error": error});
		} else {
			return res.status(200).send({"file": req.file, "message": `${req.file.filename} uploaded successfully`});
		}
	});
}

getProperties = (req, res, next) => {
	connection.connect();
	connection.query({
		sql: 'SELECT * FROM `property`',
		timeout: 40000,
	},
	function (error, results, fields) {
		if (results) {
			return res.status(200).send({
				"properties": results,
				"message": `Properties retrieved successfully`
			});
		}
		if (error) {
			next(error);
			return res.status(404).send({
				"error": error,
				"message": `Properties not found`
			});
		}
	});
	connection.end();
}

addProperty = (req, res, next) => {
	let property = {
		image: req.body.img,
		rating: req.body.rating,
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
		type: req.body.type,
		comments: req.body.comments,
		avatar: req.body.avatar,
		username: req.body.username,
		country: req.body.country,
		city: req.body.city
	};
	connection.query({
		sql: 'INSERT INTO `property` SET ?',
		timeout: 40000,
		values: property
	},
	function (error, results, fields) {
		if (results) {
			return res.status(200).send({
				"properties": results,
				"message": `Property added successfully`
			});
		}
		if (error) {
			next(error);
			return res.status(400).send({
				"error": error,
				"message": `Property could not be added`
			});
		}
	})
	connection.end();
}

module.exports = {
	uploadPropertyImage,
	getProperties,
	addProperty
};