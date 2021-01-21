const express = require("express");
const router = express.Router();
const propertyService = require("./propertyService");

router.get("/properties", propertyService.getProperties);
router.post("/upload", propertyService.uploadPropertyImage);
router.post("/property", propertyService.addProperty);

module.exports = router;