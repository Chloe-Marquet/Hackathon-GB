const analyse = function () {
    let url = $("#lapage").val();
    let iframe = $("#lapagecontent").attr('src', url);

	$("#lapagecontent").on('load', function() {
    	let frameContent = $("#lapagecontent").contents().get();
    	console.log('frame', frameContent);
    	const nodes = frameContent[0].all;
    	console.log('nodes', nodes);

 		const filtered = Array.from(nodes).filter(function(node) {
         	//console.log('noeud', node);
         	if(node.firstElementChild!=null) {
         		// console.log('node ', node);
         		// console.log('firstElementChild.nodeType', node.firstElementChild.nodeType);
         		// console.log('firstElementChild', node.firstElementChild);
         	}
         	
         	return node.firstChild && node.firstChild.nodeType === 3 && node.firstElementChild === null ;
         });

 		filtered.map(element => {
			 console.log("#######");
			let color = $(element).css( "color" );
			let colorRgb = splitRgb(color);
			let bgColorRgb = climbTrees(element);
			colorContrast(colorRgb, bgColorRgb);
		});
 		console.log(filtered);
});

	const climbTrees = (node) => {
		let bgColor = $(node).css( "background-color" );
		let bgColorRgb = splitRgb(bgColor);

		if (bgColorRgb.A === 0) {
			return climbTrees(node.parentElement);
		} else return bgColorRgb;
	};

	const splitRgb = (color) => {
		let regexRgb = /\((.+)\)/;
		let colorRgb = regexRgb.exec(color);
		let colorSplit = colorRgb[1].split(',');

		let alpha = parseFloat(colorSplit[3]);
		if (isNaN(alpha)) {
			alpha = 1
		}

		let colorR = parseFloat(colorSplit[0]);
		let colorG = parseFloat(colorSplit[1]);
		let colorB = parseFloat(colorSplit[2]);
		let rgb = {
			"R": colorR,
			"G": colorG,
			"B": colorB,
			"A": alpha,
		 };
		return rgb;
	};

	function getsRGB(c) {
		c = c / 255;
		c = (c <= 0.03928) ? c / 12.92 : Math.pow(((c + 0.055) / 1.055), 2.4);
		return c;
	}

	const colorContrast = (colorRgb, bgColorRgb) => {
		let luminance1 = (0.2126 * getsRGB(colorRgb.R) + 0.7152 * getsRGB(colorRgb.G) + 0.0722 * getsRGB(colorRgb.B));
		let luminance2 = (0.2126 * getsRGB(bgColorRgb.R) + 0.7152 * getsRGB(bgColorRgb.G) + 0.0722 * getsRGB(bgColorRgb.B));
		let colorContrast = ((Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05)).toFixed(2);
		console.log("colorContrast", colorContrast);
		console.log("bgColorRgb", bgColorRgb);
	};
};

