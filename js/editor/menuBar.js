$('#menubar_new').on('click', function() {
	if (confirm("You will lose any unsaved changes!  Are you sure you want to continue to create a new file?")) {
		$(window).unbind('beforeunload');
		location.reload();
	}
});

$('#menubar_open').on('click', function() {
	if (stage.get('#labelUserName')[0].getText() == "") {
		var dialog = new DialogLogin();
		var text = dialog.get('Text')[0];
		text.setText(STRINGS["menuBar1"][lang]);
		text.setOffsetX(text.getWidth() / 2);
		dialog.draw();
	} else if (confirm(STRINGS["menuBar2"][lang])) {
		dialogBoxes.close();
		dialogBoxResources['open-file'].thumbnails.path = 'users/' + stage.pid + '/files/';
		var dialogBox1 = new DialogBoxWithThumbnails(dialogBoxResources['open-file']);
		document.body.removeChild(dialogBox1.inputDivParent);
		dialogBox1.simpleText.destroy();
		dialogBoxes.push(dialogBox1);

	}
});

$('#menubar_save').on('click', function() {
	if (stage.get('#labelUserName')[0].getText() == "") {
		var dialog = new DialogLogin();
		var text = dialog.get('Text')[0];
		text.setText(STRINGS["menuBar1"][lang]);
		text.setOffsetX(text.getWidth() / 2);
		dialog.draw();
	} else {
		dialogBoxes.close();
		var dialogBox1 = new DialogBoxImage(dialogBoxResources['save-file']);
		dialogBoxes.push(dialogBox1);
	}
});

$('#menubar_login').on('click', function() {
	var dialog = new DialogLogin();
}).load(function() {
	if (localStorage.data != undefined && !oldLogin()) {
		$(this).hide();
	}
}).each(function() {
	if (this.complete)
		$(this).load();
});

$("#menubar").append("<img id='menubar_logout' src='img/menuBar/menubar62.png'/>");

$('#menubar_logout').css({
	position : "absolute",
	left : window.innerWidth - 55 - 74,
	top : 0
}).on('click', function() {
	localStorage.clear();
	logout();
}).load(function() {
	if (localStorage.data == undefined || (localStorage.data != undefined && oldLogin())) {
		$(this).hide();
	}
}).each(function() {
	if (this.complete)
		$(this).load();
});

$('#menubar_help').on('click', function() {
	var layerAvatar = stage.get('#layerAvatar')[0];
	if (layerAvatar.isVisible()) {
		layerAvatar.hide();
	} else {
		layerAvatar.show();
	}
});

/*var drawMenuBar = function() {

	var imageObj2 = new Image();
	imageObj2.onload = function() {
		var image = new Kinetic.Image({
			id : "buttonLogout",
		});
	};

};*/
