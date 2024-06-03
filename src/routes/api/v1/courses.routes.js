const express = require('express');
const {  coursesController } = require('../../../controller');

const router = express();


router.get(
    '/list-courses',
    coursesController.listcources
)

router.get(
    '/get-courses/:cource_id',
    coursesController.getcources
)

router.post(
    '/add-courses',
    coursesController.addcources
)

router.put(
    '/update-courses/:cource_id',
    coursesController.updatecources
)

router.delete(
    '/delete-courses/:cource_id',
    coursesController.deletecources
)

module.exports = router