var DialogActionToolbarMove = function(toolbar) {
	var dialog = new DialogSmallToolbar({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var InputPosition = dialog.InputPosition;
	var CheckBox = dialog.CheckBox;

	var simpleTextConfig = {
		x : 5,
		fontFamily : 'sans-serif',
		align : 'right',
		fill : 'black'
	};

	var simpleText = new Kinetic.Text({
		y : 38,
		width : 70,
		text : STRINGS["diagramEditor8"][lang],
		fontSize : 16,
	});
	simpleText.setAttrs(simpleTextConfig);

	var simpleText2 = new Kinetic.Text({
		y : 78,
		width : 70,
		text : STRINGS["diagramEditor9"][lang],
		fontSize : 16,
	});
	simpleText2.setAttrs(simpleTextConfig);

	var labelConfig = {
		y : 10,
		width : 20,
		fontSize : 14,
		fontStyle : 'bold',
		fontFamily : 'sans-serif',
		align : 'right',
	};

	var labelX = new Kinetic.Text({
		x : 110,
		text : "X:",
		fill : 'blue',
	});
	labelX.setAttrs(labelConfig);

	var labelY = new Kinetic.Text({
		x : 110 + 100,
		text : "Y:",
		fill : 'green',
	});
	labelY.setAttrs(labelConfig);

	var labelZ = new Kinetic.Text({
		x : 110 + 100 + 100,
		text : "Z:",
		fill : 'red',
	});
	labelZ.setAttrs(labelConfig);

	dialog.add(simpleText).add(simpleText2).add(labelX).add(labelY).add(labelZ);

	dialog.getStateXML = function() {
		var xml = document.createElement("state");
		$(xml).attr({
			name : toolbar.state.getId(),
			action : "move",
			front : $(dialog.inputY).spinner("value"),
			right : $(dialog.inputX).spinner("value"),
			up : $(dialog.inputZ).spinner("value"),
			pitch : $(dialog.inputXr).spinner("value"),
			yaw : $(dialog.inputZr).spinner("value"),
			roll : $(dialog.inputYr).spinner("value"),
			pos_x : toolbar.state.getX(),
			pos_y : toolbar.state.getY(),
		});
		return xml;
	};

	dialog.inputX = new InputPosition("X", 80, 25, dialog.getAttributeValue("move", "right"), dialog.preview);
	dialog.inputY = new InputPosition("Y", 180, 25, dialog.getAttributeValue("move", "front"), dialog.preview);
	dialog.inputZ = new InputPosition("Z", 280, 25, dialog.getAttributeValue("move", "up"), dialog.preview);
	dialog.inputXr = new InputPosition("Xr", 80, 65, dialog.getAttributeValue("move", "pitch"), dialog.preview);
	dialog.inputYr = new InputPosition("Yr", 180, 65, dialog.getAttributeValue("move", "roll"), dialog.preview);
	dialog.inputZr = new InputPosition("Zr", 280, 65, dialog.getAttributeValue("move", "yaw"), dialog.preview);

	$(dialog.inputX).spinner("option", "max", 10);
	$(dialog.inputY).spinner("option", "max", 10);
	$(dialog.inputZ).spinner("option", "max", 10);
	$(dialog.inputX).spinner("option", "min", -10);
	$(dialog.inputY).spinner("option", "min", -10);
	$(dialog.inputZ).spinner("option", "min", -10);
	$(dialog.inputXr).spinner("option", "max", 90);
	$(dialog.inputYr).spinner("option", "max", 90);
	$(dialog.inputZr).spinner("option", "max", 90);
	$(dialog.inputXr).spinner("option", "min", -90);
	$(dialog.inputYr).spinner("option", "min", -90);
	$(dialog.inputZr).spinner("option", "min", -90);

	var simpleText3 = new Kinetic.Text({
		x : 80,
		y : 108,
		text : STRINGS["diagramEditor10"][lang],
		fontStyle : 'normal',
		fontSize : 12,
		fontFamily : 'sans-serif',
		fill : 'black'
	});
	dialog.add(simpleText3);

	checkbox = new CheckBox('upper', labelX.getX() - 55, labelX.getY() + 90);

	toolbar.layer.draw();

	return dialog;
};

var DialogActionToolbarJump = function(toolbar) {
	var dialog = new DialogSmallToolbar({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var InputPosition = dialog.InputPosition;
	var CheckBox = dialog.CheckBox;
	var SelectBox = dialog.SelectBox;
	var inputDivParent = dialog.inputDivParent;

	var simpleText = new Kinetic.Text({
		x : 90,
		y : dialog.rect.getY() + 18,
		width : 70,
		text : STRINGS["diagramEditor11"][lang],
		fontSize : 14,
		fontFamily : 'sans-serif',
		align : 'right',
		fill : 'black'
	});

	var simpleText2 = new Kinetic.Text({
		x : 20,
		y : 61,
		text : STRINGS["diagramEditor12"][lang],
		width : 100,
		fontFamily : 'sans-serif',
		align : 'left',
		fill : 'black',
		fontStyle : 'italic',
		fontSize : 13,
	});

	var labelConfig = {
		y : 60,
		width : 20,
		fontSize : 14,
		fontStyle : 'bold',
		fontFamily : 'sans-serif',
		align : 'right',
	};

	var labelX = new Kinetic.Text({
		x : 110,
		text : "X",
		fill : 'blue',
	});
	labelX.setAttrs(labelConfig);

	var labelY = new Kinetic.Text({
		x : 110 + 100,
		text : "Y",
		fill : 'green',
	});
	labelY.setAttrs(labelConfig);

	var labelZ = new Kinetic.Text({
		x : 110 + 100 + 100,
		text : "Z",
		fill : 'red',
	});
	labelZ.setAttrs(labelConfig);

	dialog.add(simpleText).add(simpleText2).add(labelX).add(labelY).add(labelZ);

	dialog.getStateXML = function() {
		var xml = document.createElement("state");
		$(xml).attr({
			name : toolbar.state.getId(),
			action : "jump",
			x : $(inputs['X']).spinner("value") != undefined ? "" + $(inputs['X']).spinner("value") : 0,
			y : $(inputs['Y']).spinner("value") != undefined ? "" + $(inputs['Y']).spinner("value") : 0,
			z : $(inputs['Z']).spinner("value") != undefined ? "" + $(inputs['Z']).spinner("value") : 0,
			xflag : checkboxesAxis['X'].checked ? "true" : "false",
			yflag : checkboxesAxis['Y'].checked ? "true" : "false",
			zflag : checkboxesAxis['Z'].checked ? "true" : "false",
			pos_x : toolbar.state.getX(),
			pos_y : toolbar.state.getY(),
		});
		return xml;
	};

	var inputs = new Object();
	inputs['X'] = new InputPosition("X", labelX.getX() - 38, labelX.getY() + 15, dialog.getAttributeValue("jump", "x"), dialog.preview);
	inputs['Y'] = new InputPosition("Y", labelY.getX() - 38, labelY.getY() + 15, dialog.getAttributeValue("jump", "y"), dialog.preview);
	inputs['Z'] = new InputPosition("Z", labelZ.getX() - 38, labelZ.getY() + 15, dialog.getAttributeValue("jump", "z"), dialog.preview);
	var checkboxesAxis = new Object();
	checkboxesAxis['X'] = new CheckBox('X', labelX.getX() - 18, labelX.getY() - 7, dialog.getAttributeBoolean("jump", "xflag"), dialog.preview);
	checkboxesAxis['Y'] = new CheckBox('Y', labelY.getX() - 18, labelY.getY() - 7, dialog.getAttributeBoolean("jump", "yflag"), dialog.preview);
	checkboxesAxis['Z'] = new CheckBox('Z', labelZ.getX() - 18, labelZ.getY() - 7, dialog.getAttributeBoolean("jump", "zflag"), dialog.preview);

	for (var c in checkboxesAxis) {
		checkboxesAxis[c].onchange = function() {
			if (!this.checked) {
				$(inputs[this.id]).spinner("option", "disabled", true);
				$(inputs[this.id]).spinner("value", "");
			} else {
				$(inputs[this.id]).spinner("option", "disabled", false);
				$(inputs[this.id]).spinner("value", 0);
			}
		};
	}

	var selectBox = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : {
			specific : STRINGS["diagramEditor13"][lang],
			random : STRINGS["diagramEditor14"][lang]
		}
	});
	selectBox.value = STRINGS["diagramEditor13"][lang];
	selectBox.onchange = function() {
		if (selectBox.value == STRINGS["diagramEditor14"][lang]) {
			dialogBoxes.closeSmallDialogs();
			toolbar.dialog = new DialogActionToolbarJumpRandom(toolbar);
			toolbar.setAutoPosition(toolbar.currentState.getX(), toolbar.currentState.getY());
		}
	};

	toolbar.layer.draw();

	return dialog;
};

var DialogActionToolbarJumpRandom = function(toolbar) {
	var dialog = new DialogSmallToolbar({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var InputPosition = dialog.InputPosition;
	var CheckBox = dialog.CheckBox;
	var SelectBox = dialog.SelectBox;
	var inputDivParent = dialog.inputDivParent;

	var simpleText = new Kinetic.Text({
		x : 90,
		y : dialog.rect.getY() + 18,
		width : 70,
		text : STRINGS["diagramEditor11"][lang],
		fontSize : 14,
		fontFamily : 'sans-serif',
		align : 'right',
		fill : 'black'
	});

	var simpleText2 = new Kinetic.Text({
		x : 20,
		y : 61,
		text : STRINGS["diagramEditor12"][lang],
		width : 100,
		fontFamily : 'sans-serif',
		align : 'left',
		fill : 'black',
		fontStyle : 'italic',
		fontSize : 13,
	});

	var labelConfig = {
		y : 60,
		width : 20,
		fontSize : 14,
		fontStyle : 'bold',
		fontFamily : 'sans-serif',
		align : 'right',
	};

	var labelX = new Kinetic.Text({
		x : 110,
		text : "X",
		fill : 'blue',
	});
	labelX.setAttrs(labelConfig);

	var labelY = new Kinetic.Text({
		x : 110 + 100,
		text : "Y",
		fill : 'green',
	});
	labelY.setAttrs(labelConfig);

	var labelZ = new Kinetic.Text({
		x : 110 + 100 + 100,
		text : "Z",
		fill : 'red',
	});
	labelZ.setAttrs(labelConfig);

	dialog.add(simpleText).add(simpleText2).add(labelX).add(labelY).add(labelZ);

	dialog.getStateXML = function() {
		var xml = document.createElement("state");
		$(xml).attr({
			name : toolbar.state.getId(),
			action : "jump-rand",
			xflag : checkboxesAxis['X'].checked ? "true" : "false",
			yflag : checkboxesAxis['Y'].checked ? "true" : "false",
			zflag : checkboxesAxis['Z'].checked ? "true" : "false",
			pos_x : toolbar.state.getX(),
			pos_y : toolbar.state.getY(),
		});
		return xml;
	};

	var checkboxesAxis = new Object();
	checkboxesAxis['X'] = new CheckBox('X', labelX.getX() - 18, labelX.getY() - 7, dialog.getAttributeBoolean("jump-rand", "xflag"), dialog.preview);
	checkboxesAxis['Y'] = new CheckBox('Y', labelY.getX() - 18, labelY.getY() - 7, dialog.getAttributeBoolean("jump-rand", "yflag"), dialog.preview);
	checkboxesAxis['Z'] = new CheckBox('Z', labelZ.getX() - 18, labelZ.getY() - 7, dialog.getAttributeBoolean("jump-rand", "zflag"), dialog.preview);

	var selectBox = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : {
			specific : STRINGS["diagramEditor13"][lang],
			random : STRINGS["diagramEditor14"][lang]
		},
	});
	selectBox.value = STRINGS["diagramEditor14"][lang];
	selectBox.onchange = function() {
		if (selectBox.value == STRINGS["diagramEditor13"][lang]) {
			dialogBoxes.closeSmallDialogs();
			toolbar.dialog = new DialogActionToolbarJump(toolbar);
			toolbar.setAutoPosition(toolbar.currentState.getX(), toolbar.currentState.getY());
		}
	};

	dialog.preview();
	toolbar.layer.draw();

	return dialog;
};

var DialogActionToolbarReset = function(toolbar) {
	var dialog = new DialogSmallToolbar({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var CheckBox = dialog.CheckBox;

	var simpleText = new Kinetic.Text({
		x : dialog.rect.getWidth() / 2,
		y : 38,
		text : STRINGS["diagramEditor15"][lang],
		fontSize : 16,
		fontFamily : 'sans-serif',
		fontStyle : 'bold',
		fill : 'black'
	});
	simpleText.setOffsetX(simpleText.getWidth() / 2);

	var labelConfig = {
		y : 95,
		fontSize : 14,
		fontFamily : 'sans-serif',
		fill : 'black',
	};

	var labelX = new Kinetic.Text({
		x : 110,
		text : STRINGS["diagramEditor16"][lang],
	});
	labelX.setAttrs(labelConfig);

	var labelY = new Kinetic.Text({
		x : 110 + 110,
		text : STRINGS["diagramEditor17"][lang],
	});
	labelY.setAttrs(labelConfig);

	dialog.add(simpleText).add(labelX).add(labelY);

	dialog.getStateXML = function() {
		var xml = document.createElement("state");
		$(xml).attr({
			name : toolbar.state.getId(),
			action : "reset",
			tra : checkboxes['movement'].checked ? "true" : "false",
			rot : checkboxes['rotation'].checked ? "true" : "false",
			pos_x : toolbar.state.getX(),
			pos_y : toolbar.state.getY(),
		});
		return xml;
	};

	var checkboxes = new Object();
	checkboxes['movement'] = new CheckBox('movement', labelX.getX() - 28, labelX.getY() - 7, dialog.getAttributeBoolean("reset", "tra"));
	checkboxes['rotation'] = new CheckBox('rotation', labelY.getX() - 28, labelY.getY() - 7, dialog.getAttributeBoolean("reset", "rot"));

	toolbar.layer.draw();

	return dialog;
};

var DialogActionToolbarMessage = function(toolbar) {
	var dialog = new DialogSmallToolbar2({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar
	});
	var SelectBox = dialog.SelectBox;
	var TextField = dialog.TextField;
	var inputDivParent = dialog.inputDivParent;

	var simpleTextConfig = {
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
	};

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 38,
		text : STRINGS["diagramEditor18"][lang],
	});
	simpleText.setAttrs(simpleTextConfig);

	var simpleText2 = new Kinetic.Text({
		x : 30,
		y : 68,
		text : STRINGS["diagramEditor19"][lang],
	});
	simpleText2.setAttrs(simpleTextConfig);

	var simpleText3 = new Kinetic.Text({
		x : simpleText2.getX() + simpleText2.getWidth(),
		y : simpleText2.getY(),
		text : STRINGS["diagramEditor20"][lang],
	});
	simpleTextConfig.fontStyle = "bold";
	simpleText3.setAttrs(simpleTextConfig);
	dialog.add(simpleText).add(simpleText2).add(simpleText3);

	dialog.getStateXML = function() {
		var xml = document.createElement("stateOption");
		$(xml).attr({
			option : MESSAGETYPE[selectBoxCharacter.value],
			message : ( function() {
					if (document.getElementById("inputTextCustomMessage") != undefined) {
						var text = document.getElementById("inputTextCustomMessage").value;
						customMessages[text] = text;
						return text;
					} else {
						return selectBoxMessage.value;
					}
				}())
		});
		return xml;
	};

	var MESSAGETYPE = new Object();
	MESSAGETYPE[STRINGS["diagramEditor21"][lang]] = "broadcast";
	MESSAGETYPE[STRINGS["diagramEditor22"][lang]] = "upcast";
	MESSAGETYPE[STRINGS["diagramEditor23"][lang]] = "downcast";

	var selectBoxCharacter = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : {
			all : STRINGS["diagramEditor21"][lang],
			upper : STRINGS["diagramEditor22"][lang],
			lower : STRINGS["diagramEditor23"][lang]
		},
		value : (function() {
			for (var key in MESSAGETYPE) {
				if (toolbar.state.xml2.attributes["option"] == undefined) {
					break;
				}
				if (MESSAGETYPE[key] == toolbar.state.xml2.attributes["option"].value) {
					return key;
				}
			}
			return STRINGS["diagramEditor21"][lang];
		})()
	});

	var optionList = new Object();
	optionList["message1"] = STRINGS["diagramEditor24"][lang];
	optionList["message2"] = STRINGS["diagramEditor25"][lang];
	optionList["message3"] = STRINGS["diagramEditor26"][lang];
	optionList["message4"] = STRINGS["diagramEditor27"][lang];
	optionList["message5"] = STRINGS["diagramEditor28"][lang];
	optionList["message6"] = STRINGS["diagramEditor29"][lang];
	optionList["message7"] = STRINGS["diagramEditor30"][lang];
	optionList["message8"] = STRINGS["diagramEditor31"][lang];
	optionList["message9"] = STRINGS["diagramEditor32"][lang];
	optionList["message10"] = STRINGS["diagramEditor33"][lang];
	optionList["messageCustom"] = STRINGS["diagramEditor34"][lang];
	var selectBoxMessage = new SelectBox({
		name : 'selectbox',
		left : simpleText3.getX() + simpleText3.getWidth(),
		top : simpleText3.getY() - 9,
		optionList : optionList,
		value : (function() {
			for (var key in MESSAGETYPE) {
				if (toolbar.state.xml2.attributes["option"] == undefined) {
					break;
				}
				if (MESSAGETYPE[key] == toolbar.state.xml2.attributes["option"].value) {
					var message = dialog.getAttributeString(MESSAGETYPE[key], "message");
					for (var key in optionList) {
						if (message == optionList[key]) {
							return message;
						}
					}
					var textField = new TextField("inputTextCustomMessage", STRINGS["diagramEditor35"][lang], simpleText3.getX() + simpleText3.getWidth() - 10, simpleText3.getY() - 9 + 30);
					textField.value = message;
					return STRINGS["diagramEditor34"][lang];
				}
			}
			return STRINGS["diagramEditor24"][lang];
		})()
	});
	selectBoxMessage.onchange = function() {
		console.log(selectBoxMessage.value);
		if (selectBoxMessage.value == STRINGS["diagramEditor34"][lang]) {
			var textField = new TextField("inputTextCustomMessage", STRINGS["diagramEditor35"][lang], parseInt(selectBoxMessage.style.left) - 10, parseInt(selectBoxMessage.style.top) + 30);
		} else {
			if (document.getElementById("inputTextCustomMessage") != undefined) {
				inputDivParent.removeChild(document.getElementById("inputTextCustomMessage"));
			}
		}
	};

	toolbar.layer.draw();

	return dialog;
};

var DialogActionToolbarGroup = function(toolbar) {
	var dialog = new DialogSmallToolbar2({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar
	});
	var SelectBox = dialog.SelectBox;

	var simpleText = new Kinetic.Text({
		x : 50,
		y : dialog.rect.getY() + dialog.rect.getHeight() / 2 - 10,
		text : STRINGS["diagramEditor36"][lang],
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
	});
	dialog.add(simpleText);

	dialog.getStateXML = function() {
		var xml = document.createElement("stateOption");
		$(xml).attr({
			option : "gfork",
			group : selectBoxCharacter.value
		});
		return xml;
	};
	
	var groups = $(stage.getXML()).find('group');
	var groupList = {};
	for(var i=1; i<groups.length; i++){
		groupList[i] = groups[i].attributes["name"].value;
	}
	var selectBoxCharacter = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : groupList,
		value : (toolbar.state.xml2.attributes["option"] != undefined) && toolbar.state.xml2.attributes["option"].value == "gfork" ? dialog.getAttributeString("gfork", "group") : "main"
	});
	
	$(selectBoxCharacter).prepend('<option value="" disabled selected>None</option>');
	//console.log((toolbar.state.xml2.attributes["option"] != undefined), toolbar.state.xml2.attributes["option"].value == "gfork");
	
	selectBoxCharacter.onchange = function() {
		//console.log(selectBoxCharacter.value);
	};

	toolbar.layer.draw();

	return dialog;
};

var DialogActionToolbarCharacter = function(toolbar) {
	var dialog = new DialogSmallToolbar2({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - 380 / 2,
		y : toolbar.getY() - 165 - 10,
		width : 380,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar
	});
	var SelectBox = dialog.SelectBox;

	var simpleText = new Kinetic.Text({
		x : 50,
		y : dialog.rect.getY() + dialog.rect.getHeight() / 2 - 10,
		text : STRINGS["diagramEditor37"][lang],
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
	});
	dialog.add(simpleText);

	dialog.getStateXML = function() {
		var xml = document.createElement("stateOption");
		$(xml).attr({
			option : "transform",
			"chara-state" : selectBoxCharacter.value
		});
		return xml;
	};
	
	var charas = $(stage.getXML()).find('character');
	console.log(charas);
	var charaList = {};
	for(var i=0; i<charas.length; i++){
		charaList[i] = charas[i].attributes["name"].value;
	}
	var selectBoxCharacter = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : charaList,
		value : (toolbar.state.xml2.attributes["option"] != undefined) && toolbar.state.xml2.attributes["option"].value == "transform" ? dialog.getAttributeString("transform", "chara-state") : ""
	});
	
	$(selectBoxCharacter).prepend('<option value="" disabled selected>None</option>');
	
	selectBoxCharacter.onchange = function() {
		//console.log(selectBoxCharacter.value);
	};

	toolbar.layer.draw();

	return dialog;
}; 

var DialogActionToolbarTransform = function(toolbar) {
	var dialog = new DialogSmallToolbar2({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - (420 + 20) / 2,
		y : toolbar.getY() - 165 - 10,
		width : 420 + 20,
		height : 165,
		layer : toolbar.layer,
		toolbar : toolbar
	});
	var ButtonRadio = dialog.ButtonRadio;


	dialog.getStateXML = function() {
		var xml = document.createElement("stateOption");

		$(xml).attr({
			option : buttonRadio.getClicked(),
		});

		return xml;
	};

	var getDefaultButton = function() {
		for (var key in OPTIONTYPE) {
			if (toolbar.state.xml2.attributes["option"] != undefined && OPTIONTYPE[key] == toolbar.state.xml2.attributes["option"].value) {
				return key;
			}
		}
	};

	var OPTIONTYPE = new Object();
	OPTIONTYPE[STRINGS["diagramEditor38"][lang]] = "show";
	OPTIONTYPE[STRINGS["diagramEditor39"][lang]] = "hide";
	OPTIONTYPE[STRINGS["diagramEditor40"][lang]] = "exit";
	OPTIONTYPE[STRINGS["diagramEditor41"][lang]] = "finish";

	var buttonRadio = new ButtonRadio(
				'buttonRadio', 
				0, 
				0, 
				[		STRINGS["diagramEditor38"][lang], 
						STRINGS["diagramEditor39"][lang], 
						STRINGS["diagramEditor40"][lang], 
						STRINGS["diagramEditor41"][lang]], 
				getDefaultButton());

	buttonRadio.getClicked = function() {
		var childButtons = buttonRadio.getElementsByTagName("input");
		for (var i = 0; i < childButtons.length; i++) {
			if (childButtons[i].checked) {
				var labelText = childButtons[i].attributes["labelText"].value;
				var xml = OPTIONTYPE[labelText];
				return xml;
			}
		}
	};

	toolbar.layer.draw();

	return dialog;
}; 