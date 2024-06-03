const express = require('express');
const router = express()

const corcesRoutes = require('./courses.routes');
const subcoursesRoutes = require('./subcourses.routes');
const studentsRoutes = require('./students.routes');




router.use('/courses' , corcesRoutes);
router.use('/subcourses' , subcoursesRoutes);
router.use('/students' , studentsRoutes);


module.exports = router