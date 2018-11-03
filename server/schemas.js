const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

/*
    project.tracks is a document array of the Track Schema
    See Mongoose documentation:
    https://mongoosejs.com/docs/schematypes.html#arrays
*/

const TrackSchema = new Schema({
    name: String,
    url: String,
    length: Number,
});

const ProjectSchema = new Schema({
    name: String,
    tracks: [TrackSchema]
});

const Track = mongoose.model("track", TrackSchema);
const Project = mongoose.model("project", ProjectSchema);

module.exports = { Track, Project };
