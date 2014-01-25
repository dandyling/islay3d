<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<?php session_start(); ?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Islay 3D - Create 3D games and animations by drawing circles and arrows</title>
		<style>
			html, body {
				margin: 0;
				padding: 0;
				/*background-color: #333333;*/
			}
			#menubar {
				/*background-color: #FFFF00;*/
				height: 69px;
				width: 100%;
			}
			#functionbar {
				/*background-color: #FF0000;*/
				float: left;
				width: 107px !important;
			}
		</style>
		<link rel="stylesheet" href="css/ui-lightness/jquery-ui-1.10.3.custom.css">
		<link rel="stylesheet" href="css/table.css">
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/jquery.fileupload.css">
		<script src="js/lib/jquery-1.9.1.js"></script>
		<script src="js/lib/jquery-ui-1.10.3.custom.js"></script>
		<script src="js/lib/jquery.iframe-transport.js"></script>
		<script src="js/lib/jquery.fileupload.js"></script>
		<script src="js/lib/enchant.js"></script>
		<script src="js/lib/plugins/libs/gl-matrix-min.js"></script>
		<script src="js/lib/plugins/gl.enchant.js"></script>
		<script src="js/lib/plugins/bone.gl.enchant.js"></script>
		<script src="js/lib/plugins/primitive.gl.enchant.js"></script>
		<script src="js/lib/plugins/collada.gl.enchant.js"></script>
		<script src="js/lib/kinetic-v4.6.0.js"></script>
		<script src="js/lib/hashtable.js"></script>
		<script src="js/player/input.js"></script>
		<script src="js/player/xml3di.js"></script>
		<script src="js/player/hash.js"></script>
		<script src="js/player/executeAction.js"></script>
		<script src="js/player/character.js"></script>
		<script src="js/player/transition.js"></script>
		<script src="js/editor/editor.js" defer="defer"></script>
		<script src="js/editor/strings.js" defer="defer"></script>
		<script src="js/editor/utility.js"></script>
		<script src="js/editor/previewerPlayer.js"></script>
		<script src="js/editor/background.js" defer="defer"></script>
		<script src="js/editor/menuBar.js" defer="defer"></script>
		<script src="js/editor/functionBar.js" defer="defer"></script>
		<script src="js/editor/mainPanel.js" defer="defer"></script>
		<script src="js/editor/mainPanel-characterPanel.js" defer="defer"></script>
		<script src="js/editor/mainPanel-tabBar.js" defer="defer"></script>
		<script src="js/editor/dialogBox-resources.js" defer="defer"></script>
		<script src="js/editor/dialogBox.js" defer="defer"></script>
		<script src="js/editor/dialogBox-dialogSmall.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-stateAndArrow.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-diagramLayer.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-drawingToolbar.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-actionToolbar.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-actionToolbar-resources.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-arrowToolbar.js" defer="defer"></script>
		<script src="js/editor/diagramEditor-arrowToolbar-resources.js" defer="defer"></script>
		<script src="js/editor/avatar.js" defer="defer"></script>
		<script src="js/editor/login.js" defer="defer"></script>
		<script src="js/main.js" defer="defer"></script>
	</head>

	<body>
		<div id="menubar">
			<img src="img/menuBar/menubar1.png" id="menubar_new" class='hoverable' alt="menubar">
			<img src="img/menuBar/menubar2.png" id="menubar_open" class='hoverable' alt="menubar">
			<img src="img/menuBar/menubar3.png" id="menubar_save" class='hoverable' alt="menubar">
			<img src="img/menuBar/menubar3_1.png" alt="menubar">
			<img src="img/menuBar/menubar4.png" id="menubar_undo" class='hoverable' alt="menubar">
			<img src="img/menuBar/menubar5.png" id="menubar_redo" class='hoverable' alt="menubar">
			<img src="img/menuBar/menubar7.png" id="menubar_help" class='hoverable menubar-right' alt="menubar">
			<img src="img/menuBar/menubar6.png" id="menubar_login" class='hoverable menubar-right' alt="menubar">
		</div>
		<div id="functionbar">
			<img src="img/functionBar/functionbar1.png" class='hoverable' alt="functionbar">
			<img src="img/functionBar/functionbar2.png" class='hoverable' alt="functionbar">
			<img src="img/functionBar/functionbar2_1.png" alt="functionbar">
			<img src="img/functionBar/functionbar3.png" class='hoverable' alt="functionbar">
			<img src="img/functionBar/functionbar3_1.png" alt="functionbar">
			<img src="img/functionBar/functionbar4.png" class='hoverable' alt="functionbar">
			<img src="img/functionBar/functionbar4_1.png" alt="functionbar">
		</div>
		<div id="canvas" style="position: absolute"></div>
		<div id="divStageTabBar" style="position: absolute"></div>
		<script>
			$('#functionbar').height($(window).height() - 69);
			$('.menubar-right').css('float', 'right');
			$('.hoverable').hover(function() {
				$(this).css('cursor', 'pointer');
			}, function() {
				$(this).css('cursor', 'auto');
			});
			$('#canvas').offset({left : 107}).css({
			//	backgroundColor : "#AAAA00"
			});
		
		</script>

	</body>
</html>