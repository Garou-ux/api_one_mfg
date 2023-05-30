
const express = require('express');
const user_controller = require('../../../Controllers/Catalogs/Users/UserController');
const router = express.Router();
const auth = require('../../../middleware/auth');

//@get
router.get('/user/list_users' ,user_controller.list_users);

//@post
router.post('/user/store',auth ,user_controller.store);
router.post('/user/update',user_controller.UpdateUser);

//@auth
router.post('/auth/user', user_controller.AuthenticateUser);

router.post("/welcome",auth, (req, res) => {
    restart.status(200).send('aalalalalalal');
})


module.exports = router;