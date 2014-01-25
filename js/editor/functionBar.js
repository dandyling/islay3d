$('#functionbar_character').on('click', function(){
	dialogBoxes.close();
	var dialogBox1 = new DialogBoxWithThumbnails(dialogBoxResources['character-create']);
	dialogBoxes.push(dialogBox1);
});

$('#functionbar_group').on('click', function(){
	if(characterPanels.length == 0){
		alert("Please add a character to the game first");
		return;
	}
	dialogBoxes.close();
	var dialogBox1 = new DialogBoxWithAddThumbnails(dialogBoxResources['group-create']);
	dialogBoxes.push(dialogBox1);
});

$('#functionbar_world').on('click', function(){
	console.log('world setting dummy function');
});

$('#functionbar_run').on('click', function(){
	var xml = convertToXML(stage.getXML());
	console.log(xml);
	localStorage.playerXML = xml;
	playerWin = window.open('./player.php', '', 'width=' + 640 + ', ' + 'height=' + 480);
});

/*var drawFunctionBar = function() {
	addIcon({
		id : 'buttonCharacter',
		text : STRINGS["functionBar1"][lang],
	});
	addIcon({
		id : 'buttonGroup',
		text : STRINGS["functionBar3"][lang],
	});
	
	addIcon({
		id : 'buttonWorld',
		text : STRINGS["functionBar4"][lang],
	});

	addIcon({
		id : 'buttonRun',
		text : STRINGS["functionBar5"][lang],
	});
}; */