var w = 200;
var h = 90;
var DialogArrowToolbarKeyboard = function(toolbar) {
	var dialog = new DialogSmallToolbarArrow({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - w / 2,
		y : toolbar.getY() - h - 10,
		width : w,
		height : h,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var SelectBox = dialog.SelectBox;

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 10,
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
		text : STRINGS["diagramEditor48"][lang],
	});
	dialog.add(simpleText);

	var correspondentKey = function(key){
		var value = "";
		if(key == '←'){
			value = 'LEFT';
		} else if(key == '→'){
			value = 'RIGHT';
		} else if(key == '↑'){
			value = 'UP';
		} else if(key == '↓'){
			value = 'DOWN';
		} else {
			value = key;
		}
		return value;
	};
	
	
	dialog.getArrowXML = function() {
		var xml = document.createElement("trans");
		$(xml).attr({
			guard : "key",
			key : correspondentKey(selectBox.value),
			from : toolbar.arrow.fromState.getId(),
			to : toolbar.arrow.toState.getId()
		});
		return xml;
	};

	var selectBox = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : {
			left : "←",
			right : "→",
			up : "↑",
			down : "↓",
			enter : "ENTER",
			space : "SPACE",
			a : "a",
			b : "b",
			c : "c",
			d : "d",
			e : "e",
			f : "f",
			g : "g",
			h : "h",
			i : "i",
			j : "j",
			k : "k",
			l : "l",
			m : "m",
			n : "n",
			o : "o",
			p : "p",
			q : "q",
			r : "r",
			s : "s",
			t : "t",
			u : "u",
			v : "v",
			w : "w",
			x : "x",
			y : "y",
			z : "z",
			one : "1",
			two : "2",
			three : "3",
			four : "4",
			five : "5",
			six : "6",
			seven : "7",
			eight : "8",
			nine : "9",
			zero : "0",
		},
		value : dialog.getAttributeString("key", "key", "←"),
	});
	selectBox.onchange = function() {
		//console.log(selectBox.value);
	};

	toolbar.layer.draw();

	return dialog;
};

var DialogArrowToolbarMouse = function(toolbar) {
	var dialog = new DialogSmallToolbarArrow({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - w / 2,
		y : toolbar.getY() - h - 10,
		width : w,
		height : h,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var SelectBox = dialog.SelectBox;

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 10,
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
		text : STRINGS["diagramEditor49"][lang],
	});
	dialog.add(simpleText);

	dialog.getArrowXML = function() {
		var xml = document.createElement("trans");
		$(xml).attr({
			guard : "click",
			button : selectBox.value,
			from : toolbar.arrow.fromState.getId(),
			to : toolbar.arrow.toState.getId()
		});
		return xml;
	};

	var selectBox = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : {
			left : STRINGS["diagramEditor50"][lang],
		},
		value : dialog.getAttributeString("click", "button", STRINGS["diagramEditor50"][lang]),
	});
	selectBox.onchange = function() {
		//console.log(selectBox.value);
	};

	toolbar.layer.draw();

	return dialog;
};

var DialogArrowToolbarCollide = function(toolbar) {
	var dialog = new DialogSmallToolbarArrow({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - w / 2,
		y : toolbar.getY() - h - 10,
		width : w,
		height : h,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var SelectBox = dialog.SelectBox;
	var inputDivParent = dialog.inputDivParent;

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 10,
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
		text : STRINGS["diagramEditor51"][lang],
	});
	dialog.add(simpleText);

	dialog.getArrowXML = function() {
		var xml = document.createElement("trans");
		$(xml).attr({
			guard : "bump",
			bump : getBumpXML(),
			from : toolbar.arrow.fromState.getId(),
			to : toolbar.arrow.toState.getId()
		});
		return xml;
	};

	var WALLLIST = new Object();
	WALLLIST[STRINGS["diagramEditor52"][lang]] = "@anywall";
	WALLLIST[STRINGS["diagramEditor53"][lang]] = "@eastwall";
	WALLLIST[STRINGS["diagramEditor54"][lang]] = "@southwall";
	WALLLIST[STRINGS["diagramEditor55"][lang]] = "@westwall";
	WALLLIST[STRINGS["diagramEditor56"][lang]] = "@northwall";
	WALLLIST[STRINGS["diagramEditor57"][lang]] = "@roofwall";
	WALLLIST[STRINGS["diagramEditor58"][lang]] = "@floorwall";

	var CHARACTERLIST = new Object();
	CHARACTERLIST[STRINGS["diagramEditor59"][lang]] = "@anychara";
	CHARACTERLIST["robot"] = "robot";
	CHARACTERLIST["car"] = "car";
	CHARACTERLIST["car2"] = "car2";

	var getBumpXML = function() {
		var bump;
		if (document.getElementById("selectBoxCollideWall") != undefined) {
			var selBox = document.getElementById("selectBoxCollideWall");
			bump = WALLLIST[selBox.value];
		} else if (document.getElementById("selectBoxCollideCharacter") != undefined) {
			var selBox = document.getElementById("selectBoxCollideCharacter");
			bump = CHARACTERLIST[selBox.value];
		} else {
			bump = "@any";
		}
		return bump;
	};

	var selectBox = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : {
			all : STRINGS["diagramEditor60"][lang],
			wall : STRINGS["diagramEditor61"][lang],
			character : STRINGS["diagramEditor62"][lang]
		},
		value : ( function() {
				var xml = dialog.getAttributeString("bump", "bump", STRINGS["diagramEditor60"][lang]);
				for (var key in WALLLIST) {
					if (WALLLIST[key] == xml) {
						return STRINGS["diagramEditor61"][lang];
					}
				}
				for (var key in CHARACTERLIST) {
					if (CHARACTERLIST[key] == xml) {
						return STRINGS["diagramEditor62"][lang];
					}
				}
				return STRINGS["diagramEditor60"][lang];
			}()),
	});
	selectBox.onchange = function() {
		if (document.getElementById("selectBoxCollideCharacter") != undefined) {
			inputDivParent.removeChild(document.getElementById("selectBoxCollideCharacter"));
		} else if (document.getElementById("selectBoxCollideWall") != undefined) {
			inputDivParent.removeChild(document.getElementById("selectBoxCollideWall"));
		}
		if (selectBox.value == "wall") {
			var selectBoxWall = new SelectBox({
				name : 'selectbox',
				left : simpleText.getX() + simpleText.getWidth(),
				top : simpleText.getY() + 20,
				optionList : {
					wallall : STRINGS["diagramEditor52"][lang],
					wall1 : STRINGS["diagramEditor53"][lang],
					wall2 : STRINGS["diagramEditor54"][lang],
					wall3 : STRINGS["diagramEditor55"][lang],
					wall4 : STRINGS["diagramEditor56"][lang],
					wall5 : STRINGS["diagramEditor57"][lang],
					wall6 : STRINGS["diagramEditor58"][lang],
				},
				value : ( function() {
						var xml = dialog.getAttributeString("bump", "bump", STRINGS["diagramEditor52"][lang]);
						for (var key in WALLLIST) {
							if (WALLLIST[key] == xml) {
								return key;
							}
						}
					}()),
			});
			selectBoxWall.setAttribute("id", "selectBoxCollideWall");
			selectBoxWall.onchange = function() {
				console.log(selectBoxWall.value);
			};
		} else if (selectBox.value == STRINGS["diagramEditor62"][lang]) {
			var selectBoxChar = new SelectBox({
				name : 'selectbox',
				left : simpleText.getX() + simpleText.getWidth(),
				top : simpleText.getY() + 20,
				optionList : {
					charall : STRINGS["diagramEditor59"][lang],
					char1 : "robot",
					char2 : "car",
					char3 : "car2"
				},
				value : ( function() {
						var xml = dialog.getAttributeString("bump", "bump", STRINGS["diagramEditor60"][lang]);
						for (var key in CHARACTERLIST) {
							if (CHARACTERLIST[key] == xml) {
								return key;
							}
						}
					}()),
			});
			selectBoxChar.setAttribute("id", "selectBoxCollideCharacter");
			selectBoxChar.onchange = function() {
				console.log(selectBoxChar.value);
			};
		}
	};
	selectBox.onchange();
	toolbar.layer.draw();

	return dialog;
};

var DialogArrowToolbarMessage = function(toolbar) {
	var dialog = new DialogSmallToolbarArrow({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - w / 2,
		y : toolbar.getY() - h - 10,
		width : w,
		height : h,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var SelectBox = dialog.SelectBox;

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 10,
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 9,
		text : STRINGS["diagramEditor63"][lang],
	});
	dialog.add(simpleText);

	dialog.getArrowXML = function() {
		var xml = document.createElement("trans");
		$(xml).attr({
			guard : "event",
			type : selectBox.value,
			from : toolbar.arrow.fromState.getId(),
			to : toolbar.arrow.toState.getId()
		});
		return xml;
	};

	var optionList = {
		message1 : STRINGS["diagramEditor24"][lang],
		message2 : STRINGS["diagramEditor25"][lang],
		message3 : STRINGS["diagramEditor26"][lang],
		message4 : STRINGS["diagramEditor27"][lang],
		message5 : STRINGS["diagramEditor28"][lang],
		message6 : STRINGS["diagramEditor29"][lang],
		message7 : STRINGS["diagramEditor30"][lang],
		message8 : STRINGS["diagramEditor31"][lang],
		message9 : STRINGS["diagramEditor31"][lang],
		message10 : STRINGS["diagramEditor33"][lang],
	};
	for (var m in customMessages) {
		optionList[m] = customMessages[m];
	}

	var selectBox = new SelectBox({
		name : 'selectbox',
		left : simpleText.getX() + simpleText.getWidth(),
		top : simpleText.getY() - 9,
		optionList : optionList,
		value : dialog.getAttributeString("event", "type", STRINGS["diagramEditor24"][lang]),
	});

	selectBox.onchange = function() {
		//console.log(selectBox.value);
	};

	toolbar.layer.draw();

	return dialog;
};

var DialogArrowToolbarPercent = function(toolbar) {
	var dialog = new DialogSmallToolbarArrow({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - w / 2,
		y : toolbar.getY() - h - 10,
		width : w,
		height : h,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var InputPosition = dialog.InputPosition;

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 20,
		text : STRINGS["diagramEditor64"][lang],
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
	});
	dialog.add(simpleText);

	dialog.getArrowXML = function() {
		var xml = document.createElement("trans");
		$(xml).attr({
			guard : "prob",
			prob : $(input).spinner("value"),
			from : toolbar.arrow.fromState.getId(),
			to : toolbar.arrow.toState.getId()
		});
		return xml;
	};

	var input = new InputPosition("percentage", simpleText.getX() + simpleText.getWidth(), simpleText.getY() - 16, dialog.getAttributeValue("prob", "prob"));
	$(input).spinner("option", "min", 0);
	$(input).spinner("option", "max", 100);
	$(input).spinner("option", "step", 5);
	toolbar.layer.draw();

	return dialog;
};

var DialogArrowToolbarRepeat = function(toolbar) {
	var dialog = new DialogSmallToolbarArrow({
		x : toolbar.getX() + toolbar.rect.getWidth() / 2 - w / 2,
		y : toolbar.getY() - h - 10,
		width : w,
		height : h,
		layer : toolbar.layer,
		toolbar : toolbar,
	});
	var InputPosition = dialog.InputPosition;

	var simpleText = new Kinetic.Text({
		x : 15,
		y : 20,
		text : STRINGS["diagramEditor65"][lang],
		fontFamily : 'sans-serif',
		fill : 'black',
		fontStyle : 'normal',
		fontSize : 14,
	});
	dialog.add(simpleText);

	dialog.getArrowXML = function() {
		var xml = document.createElement("trans");
		$(xml).attr({
			guard : "timeout",
			count : $(input).spinner("value"),
			from : toolbar.arrow.fromState.getId(),
			to : toolbar.arrow.toState.getId()
		});
		return xml;
	};

	var input = new InputPosition("repeat", simpleText.getX() + simpleText.getWidth(), simpleText.getY() - 16, dialog.getAttributeValue("timeout", "count"));
	$(input).spinner("option", "min", 0);
	toolbar.layer.draw();

	return dialog;
};
