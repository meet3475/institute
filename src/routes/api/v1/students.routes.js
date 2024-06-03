const express = require('express');
const { studentsControllere } = require('../../../controller');

const router = express()

router.get(
    '/list-students',
    studentsControllere.liststudents
)

router.get(
    '/get-students/:student_id',
    studentsControllere.getstudents
)

router.post(
    '/add-students',
    studentsControllere.addstudents
)

router.put(
    '/update-students/:student_id',
    studentsControllere.updatestudents
)

router.delete(
    '/delete-students/:student_id',
    studentsControllere.deleteudents
)

module.exports = router