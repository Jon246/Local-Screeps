var config = require("Config");

module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-screeps");

	grunt.initConfig({
		screeps:{
			options: {
				email: config.Config.Email,
				password: config.Config.Password,
				branch: "default",
				ptr: false
			}
		},
		dist: {
			src: ["src/*.js"]
		}
	});
};