const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

/*
    project.tracks is a document array of the Track Schema
    See Mongoose documentation:
    https://mongoosejs.com/docs/schematypes.html#arrays
*/

const projectSchema = new Schema({
    name: String,
    tracks: [trackSchema]
})

const trackSchema = new Schema({
    name: String,
    url: String,
    length: Number,
});

const Track = mongoose.Model("track", trackSchema);
const Project = mongoose.Model("project", projectSchema);

export default { Track, Project };
