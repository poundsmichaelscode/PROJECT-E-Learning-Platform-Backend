
const express = require('express');
const router = express.Router();
const { enrollInCourse, getEnrolledStudents } = require('../controllers/enrollmentController');

router.post('/enroll', enrollInCourse);
router.get('/:courseId', getEnrolledStudents);

module.exports = router;
