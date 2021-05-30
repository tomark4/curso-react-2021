const express = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = express.Router();
const controller = require("../controllers/events");
const {check} = require("express-validator");
const validateFields = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

// apply validate jwt middleware group
// all routes from here to down are validated
router.use(validateJWT);

router.get("/",controller.getEvents);
router.post("/",[
  check('title','Title is required').not().isEmpty(),
  check('start','Start date required').custom(isDate),
  check('end','End date required').custom(isDate),
  validateFields
],controller.createEvent);
router.put("/:id",controller.updateEvents);
router.delete("/:id",controller.deleteEvents);


module.exports = router;

