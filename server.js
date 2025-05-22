
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running...");
  });
});
