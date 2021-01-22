const express = require("express");
const router = express.Router();
const propertyService = require("./propertyService");

router.get("/properties", propertyService.getProperties);
router.post("/images", propertyService.uploadPropertyImage);
router.post("/avatar", propertyService.uploadPropertyAvatar);
router.post("/property", propertyService.addProperty);

module.exports = router;