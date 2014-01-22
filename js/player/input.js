var inputKeyboard;

KEYS = {
	ALPHA : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	NONALPHA : [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	NONALPHA_MAP : ['space', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
};

var bindKeyboardKey = function(player) {
	for (var i = 0; i < KEYS.ALPHA.length; i++) {
		player.keybind(KEYS.ALPHA[i].toUpperCase().charCodeAt(0), KEYS.ALPHA[i]);
	}
	for (var i = 0; i < KEYS.NONALPHA.length; i++) {
		player.keybind(KEYS.NONALPHA[i].charCodeAt(0), KEYS.NONALPHA_MAP[i]);
	}
};

var InputHash = function(player) {
	/*this['↑'] = player.input.up;
	this['↓'] = player.input.down;
	this['←'] = player.input.left;
	this['→'] = player.input.right;*/
	this['UP'] = player.input.up;
	this['DOWN'] = player.input.down;
	this['LEFT'] = player.input.left;
	this['RIGHT'] = player.input.right;
	this['SPACE'] = player.input.space;
	this['0'] = player.input.zero;
	this['1'] = player.input.one;
	this['2'] = player.input.two;
	this['3'] = player.input.three;
	this['4'] = player.input.four;
	this['5'] = player.input.five;
	this['6'] = player.input.six;
	this['7'] = player.input.seven;
	this['8'] = player.input.eight;
	this['9'] = player.input.nine;
	this['a'] = player.input.a;
	this['b'] = player.input.b;
	this['c'] = player.input.c;
	this['d'] = player.input.d;
	this['e'] = player.input.e;
	this['f'] = player.input.f;
	this['g'] = player.input.g;
	this['h'] = player.input.h;
	this['i'] = player.input.i;
	this['j'] = player.input.j;
	this['k'] = player.input.k;
	this['l'] = player.input.l;
	this['m'] = player.input.m;
	this['n'] = player.input.n;
	this['o'] = player.input.o;
	this['p'] = player.input.p;
	this['q'] = player.input.q;
	this['r'] = player.input.r;
	this['s'] = player.input.s;
	this['t'] = player.input.t;
	this['u'] = player.input.u;
	this['v'] = player.input.v;
	this['w'] = player.input.w;
	this['x'] = player.input.x;
	this['y'] = player.input.y;
	this['z'] = player.input.z;

	return this;
};