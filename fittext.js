/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function(){

	// Add an eventListener to the window. Fallback for older IE.
	var on = function ( type, fn ) {
		if( window.addEventListener ) {
			window.addEventListener( type, fn );
		} else {
			window.attachEvent( 'on'+type, fn );
		}
	};

	window.fitText = function( selector, kompressor, optionz ) {
		// Setup options
		var compressor = kompressor || 1,
			options = optionz || {},
			settings = {
			  'minFontSize' : options.minFontSize || 0,
			  'maxFontSize' : options.maxFontSize || Number.POSITIVE_INFINITY
			};

		var fitIt = function ( el ) {

			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
				el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
			};

			// Call once to set.
			resizer();

			// Call on resize. Opera debounces their resize by default.
			on('resize', resizer);
			on('orientationchange', resizer);
		};

		// Find elements to fit.
		var items = document.querySelectorAll( selector );
		for (var i = 0; i < items.length; i++) {
			fitIt(items[i]);
		};
	};

})();
