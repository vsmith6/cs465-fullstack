const express = require("express");
const router = express.Router();
//const jwt = require("express-jwt");
const jwt = require('express-jwt');
const auth = jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
  });

const authController = require("../controllers/authentication");
const tripsController = require("../controllers/trips");

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);
router
    .route('/user')
    .get(tripsController.getUser);

router.route("/trips")
.get(tripsController.tripsList)
.post(auth,tripsController.tripsAddTrip);


router.route("/trip/:tripCode")
.get(tripsController.tripsFindCode)
.put(auth, tripsController.tripsUpdateTrip);


router.route("/trip/:tripCode")
.delete(auth, tripsController.tripDeleteTrip);


module.exports = router;