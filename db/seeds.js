require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Project = require('../models/project');

mongoose.Promise = global.Promise;

Project.remove({}, (err) => console.log(err));

const blackjack = new Project({
    title: "Blackjack",
    description: "A browser rendered blackjack game.  Made using HTML, CSS and JQuery.",
    deployedlink: "http://eric-jonelunas-blackjack.bitballoon.com/",
    githublink: "https://github.com/ejjonzey/blackjack-game",    
});

blackjack.save().then(() => console.log("Project Saved!"))

mongoose.connection.close();
