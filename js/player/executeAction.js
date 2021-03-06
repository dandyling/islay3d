var gforkTimeout = false;
var transformTimeout = false;

executeActionType1 = function(character, state) {
	if (state.attributes["action"].value == "move" || state.attributes["action"].value == "move-world") {
		var tZ = parseFloat(state.attributes["front"].value);
		var tX = parseFloat(state.attributes["right"].value);
		var tY = parseFloat(state.attributes["up"].value);
		var rZ = parseFloat(state.attributes["pitch"].value);
		var rY = parseFloat(state.attributes["yaw"].value);
		var rX = parseFloat(state.attributes["roll"].value);

		character.sidestep(tX);
		character.altitude(tY);
		character.forward(tZ);
		character.rotateRoll(rX * (Math.PI / 180));
		character.rotateYaw(rY * (Math.PI / 180));
		character.rotatePitch(rZ * (Math.PI / 180));
	} else if (state.attributes["action"].value == "jump") {
		var x = parseFloat(state.attributes["x"].value); 
		var y = parseFloat(state.attributes["y"].value); // this axis is opposite in enchantjs compared to islay3d convention
		var z = parseFloat(state.attributes["z"].value); // this axis is opposite in enchantjs compared to islay3d convention

		if (state.attributes["xflag"].value == "true") {
			character.x = x;
		}
		if (state.attributes["yflag"].value == "true") {
			character.y = y; 
		}
		if (state.attributes["zflag"].value == "true") {
			character.z = z; 
		}
	} else if (state.attributes["action"].value == "jump-rand") {
		if (state.attributes["xflag"].value == "true") {
			character.x = Math.random() * 100 * (Math.random() >= 0.5 ? 1 : -1);
		}
		if (state.attributes["yflag"].value == "true") {
			character.z = Math.random() * 100 * (Math.random() >= 0.5 ? 1 : -1);
		} // this axis is opposite in enchantjs compared to islay3d convention
		if (state.attributes["zflag"].value == "true") {
			character.y = Math.random() * 100 * (Math.random() >= 0.5 ? 1 : -1);
		} // this axis is opposite in enchantjs compared to islay3d convention
	} else if (state.attributes["action"].value == "scale") {
		var x = parseFloat(state.attributes["x"].value);
		var y = parseFloat(state.attributes["y"].value);
		var z = parseFloat(state.attributes["z"].value);
		character.scale(x, y, z);
	} else if (state.attributes["action"].value == "reset") {
		if (state.attributes["tra"].value == "true") {
			character.x = 0;
			character.y = 0;
			character.z = 0;
		}
		if (state.attributes["rot"].value == "true") {
			var mat = mat4.create();
			mat4.identity(mat);
			character.rotation = mat;
		}
	} else if (state.attributes["action"].value == "stay") {
		//Do nothing
	}
};

executeActionType2 = function(player, character, state) {
	if (!state.hasAttribute("option")) {
		return;
	}
	
	var option = state.attributes["option"].value;
	if (option == "upcast") {
		var msg = state.attributes["message"].value;
		character.sendParentMessage(character, msg);
	} else if (option == "downcast") {
		var msg = state.attributes["message"].value;
		character.sendChildMessage(character, msg);
	} else if (option == "gfork") {
		if(gforkTimeout == true){
			return;
		}
		var group = state.attributes["group"].value;
		player.createGroup(character, player.groups[group]);
		gforkTimeout = true;
		setTimeout(function(){
			gforkTimeout = false;
		}, 400);
	} else if (option == "transform") {
		if(transformTimeout == true){
			return;
		}
		var charaTo = state.attributes["chara-state"].value;
		player.transform(character, player.characters[charaTo]);
		transformTimeout = true;
		setTimeout(function(){
			transformTimeout = false;
		}, 400);
	} else if (option == "hide") {
		player.hide(character);
	} else if (option == "show") {
		player.show(character);
	} else if (option == "exit") {
	    player.scene3d.removeChild(character);
	} else if (option == "finish") {
	    alert("The game has ended.");
	    window.close();
	}
}; 