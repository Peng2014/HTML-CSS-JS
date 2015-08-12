
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 30);
}
function doMoveA ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 60);
}
function oPacity ( obj,  dir, target, endFn ) {
	
	dir = getStyle( obj, 'opacity' ) < target ? dir : -dir;
	
	clearInterval( obj.timera );
	
	obj.timera = setInterval(function () {
		
		var speed = getStyle( obj, 'opacity' ) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style.opacity = speed ;
		
		if ( speed == target ) {
			clearInterval( obj.timera );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 70);
}

// function oPacity ( obj, dir, target, endFn ) {
	
// 	// dir = getStyle( obj, opacity ) < target ? dir : -dir;
	
// 	clearInterval( obj.timer1 );
	
// 	obj.timer1 = setInterval(function () {
		
// 		var speed = getStyle( obj, 'opacity' ) - dir;			// 步长
		
// 		if (  speed < target  ) {
// 			speed = target;
// 		}
		
// 		obj.style.opacity = speed;
		
		
		
// 	}, 70);
// }

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }