/*
 * Defining a Project Model in mongoose
 */

import mongoose, { Schema } from 'mongoose';

/*
 Project Schema
 */

const ProjectSchema = new mongoose.Schema({
  name: String,
  colors: Array,
  fontSizes: Array,
  fontFamilies: Array,
  publish: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

/*
 Defining our own custom document instance method
 */
ProjectSchema.methods = {};

/**
 * Statics
 */

ProjectSchema.statics = {};

export default mongoose.model('Project', ProjectSchema);
