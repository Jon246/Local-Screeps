var constants = require("./constants");
var templates = require("./creep_templates");
var roleHarvester = require("role_harvester");
var roleUpgrader = require("role_upgrader");

module.exports.loop = function(){

	for(var i in Memory.creeps){
		if(!Game.creeps[i]){
			delete Memory.creeps[i];
		}
	}

	var harvesters = _.filter(Game.creeps, function(creep){
		return creep.memory.role == constants.ROLE_HARVESTER;
	});

	var upgraders = _.filter(Game.creeps, function(creep){
		return creep.memory.role == constants.ROLE_UPGRADER;
	});

	var spawn = Game.spawns["Spawn1"];

	var harvesterCount = harvesters.length;
	var upgradeCount = upgraders.length;

	while(harvesterCount < templates.harvesterTemplate.minCount){
		spawn.spawnCreep(templates.harvesterTemplate.body, constants.ROLE_HARVESTER + Game.time.toString(),{
			memory:{
				role: constants.ROLE_HARVESTER
			}
		});
		harvesterCount++;
	}

	while(upgradeCount < templates.upgraderTemplate.minCount){
		spawn.spawnCreep(templates.upgraderTemplate.body, constants.ROLE_UPGRADER + Game.time.toString(),{
			memory: {
				role: constants.ROLE_UPGRADER
			}
		});

		upgradeCount++;
	}

	for(var name in Game.creeps){
		var creep = Game.creeps[name];
		if(creep.memory.role == constants.ROLE_HARVESTER){
			roleHarvester.run(creep);
		}
		else if(creep.memory.role == constants.ROLE_UPGRADER){
			roleUpgrader.run(creep);
		}
	}

}