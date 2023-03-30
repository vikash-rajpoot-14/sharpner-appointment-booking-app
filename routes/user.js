const express = require('express');
const usercontroller = require("./.././controller/user")
const router = express.Router();

router.route('/user').get(usercontroller.getUser).post(usercontroller.postUser);

router.route('/user/:id').delete(usercontroller.deleteUser)

module.exports = router;