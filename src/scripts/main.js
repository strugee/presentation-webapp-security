// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');
var cube = require('bespoke-theme-cube');
var forms = require('bespoke-forms');

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
	forms(),
	classes(),
	nav(),
	scale(),
	cube(),
	bullets('.build, .build-items > *:not(.build-items)'),
	hash(),
	prism(),
	multimedia(),
	extern(bespoke)
]);

function init() {
	var queryDisplay = document.getElementById('queryDisplay'),
	    searchInput = document.getElementById('searchInput');

	searchInput.addEventListener('input', function(event) {
		queryDisplay.innerHTML = event.target.value;
	});

	var postCompose = document.getElementById('postCompose'),
	    postDisplay = document.getElementById('postDisplay'),
	    postDisplayButton = document.getElementById('postDisplayButton');

	postDisplayButton.addEventListener('click', function(event) {
		postDisplay.innerHTML = postCompose.value;
	});

	document.getElementById('forgot').addEventListener('click', function(event) {
		event.preventDefault();

		postCompose.value = '<img src="x" onerror="alert(\'xss!\');"';
	});
}

document.addEventListener('DOMContentLoaded', init, false);
document.onreadystatechange = function() {
	if (document.readyState === 'interactive') {
		init();
	}
};
