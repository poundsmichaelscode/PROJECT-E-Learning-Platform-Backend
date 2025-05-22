
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

exports.enrollInCourse = async (req, res) => {
  const { studentId, courseId } = req.body;

  try {
    const enrollment = new Enrollment({ student: studentId, course: courseId });
    await enrollment.save();
    res.status(201).json({ message: 'Enrolled successfully!' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Already enrolled' });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.getEnrolledStudents = async (req, res) => {
  const { courseId } = req.params;

  try {
    const enrolled = await Enrollment.find({ course: courseId }).populate('student');
    res.json(enrolled);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
