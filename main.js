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
         		console.log('node ', node);
         		console.log('firstElementChild.nodeType', node.firstElementChild.nodeType);
         		console.log('firstElementChild', node.firstElementChild);
         	}
         	
         	return node.firstChild && node.firstChild.nodeType === 3 && node.firstElementChild === null ;
         });

 		filtered.map(element => {
			let color = $(element).css( "color" );

			let bgColor = $(element).css( "background-color" );
			console.log("bgColor", bgColor);

			const a = bgColor.split(',')
			let alpha = parseFloat(a[3]);
			if (isNaN(alpha)) {
				alpha = 1
			}
			console.log("alpha", alpha);


		});
 		console.log(filtered);
});

/*    $.ajax(url, {
        success: function (response) {
            //	var ledom = document.createElement("div");
            // 	ledom.innerHTML = response;
            $("#lapagecontent").html(response);

         // alert($("#lapagecontent").text());
         const nodes = $("#lapagecontent").contents();
         console.log('depart', nodes);
         const filtered = nodes.filter(function(i, node) {
         	console.log('noeud', node);
         	return node.firstChild && node.firstChild.nodeType === 3;
         });
         console.log('arrivee', filtered);


        }
    }); */
};

