const express = require('express');
const { subcoursesControllere } = require('../../../controller');

const router = express();

router.get(
    '/list-subcourses',
    subcoursesControllere.listsubcourses
)

router.get(
    '/get-subcourses/:subcourses_id',
    subcoursesControllere.getsubcourses
)

router.post(
    '/add-subcourses',
    subcoursesControllere.addsubcourses
)


router.put(
    '/update-subcourses/:subcourses_id',
    subcoursesControllere.updatesubcourses
)


router.delete(
    '/delete-subcourses/:subcourses_id',
    subcoursesControllere.deletesubcourses
)

module.exports = router