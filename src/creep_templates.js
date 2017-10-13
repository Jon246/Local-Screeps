var constants = require("./constants");

module.exports = {
	builderTemplate: {
		minCount: 1,
		maxCount: 1,
		body: [WORK, CARRY, MOVE],
		role: constants.ROLE_BUILDER
	},
	harvesterTemplate: {
		minCount: 3,
		maxCount: 6,
		body: [WORK, CARRY, MOVE],
		role: constants.ROLE_HARVESTER
	},
	upgraderTemplate: {
		minCount: 2,
		maxCount: 2,
		body: [WORK, CARRY, MOVE],
		role: constants.ROLE_UPGRADER
	}
};