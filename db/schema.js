const mongoose = require('mongoose');


const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    githubUrl: String,
    siteLink: String
});


const Project = mongoose.model('Project', projectSchema);

module.exports = {
  Project
}
