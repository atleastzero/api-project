const mongoose = require('mongoose');

const { Schema } = mongoose;

const CourseSchema = new Schema({
  school: { type: Schema.Types.ObjectId, ref: 'School', required: true },
  department: { type: String, required: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  units: { type: Number, required: true },
  prerequisites: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  corequisites: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  postrequisites: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

module.exports = mongoose.model('Course', CourseSchema);
