$(document).ready(function() {

	$("#nav-drawer").css( "left", - $("#nav-items-back").outerWidth() - 35 );
	$("#nav-items-back").css( "left", - $("#nav-items-back").outerWidth() - 35 );
	$("#darken").hide();

	$("#nav-drawer").css( 'display', 'block');

	// Nav hover
	$('#nav-btn').hover(function(event) {
        hoverInNav();
	}, function(event) {
        hoverOutNav();
	});

	// Toggle nav from btn
	$("#nav-btn").click(function(event) {
		toggleNav();
	});

	// Hide if clicking off nav
	$('#darken').click(function(event) {
        hideNav();
	});

});

function hoverInNav() {

	$("#nav-icon").addClass( "nav-hover");
}

function hoverOutNav() {

	$("#nav-icon").removeClass( "nav-hover");
}

function toggleNav() {

	if( $("#nav-drawer").position().left == 0 ) {
		hideNav();
	} else {
		showNav();
	}
}

function showNav() {

	$("#nav-drawer").animate( {
		left: 0
	}, 150 );
	$("#nav-items-back").animate( {
		left: 0
	}, 150 );

	$("#nav-icon").addClass( "nav-open");

	$("#darken").show();
	$("#darken").fadeTo( 'fast', 0.65 );
}

function hideNav() {

	$("#nav-drawer").animate( {
		left: - $("#nav-items-back").outerWidth() - 35
	}, 250, function() {
		$("#nav-icon").removeClass( "nav-open");
	});
	$("#nav-items-back").animate( {
		left: - $("#nav-items-back").outerWidth() - 35
	}, 250 );

	$("#darken").fadeTo( 'fast', 0, function() {
		$("#darken").hide();
	} );
}
