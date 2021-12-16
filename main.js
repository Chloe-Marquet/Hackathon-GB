


$(document).ready(function() {



});

/*function analyse() { alert("hello")

//text = $('p').text();

//alert(text);

lelien=$("#lapage").val();
alert(lelien);

};*/


const analyse = function () {
    let url = $("#lapage").val();
    let iframe = $("#lapagecontent").attr('src', url);
    $("#lapagecontent").on('load', function() {
    	var frameContent = $("#lapagecontent").contents().get();
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
         //	return node.firstChild && node.firstChild.nodeType === 3;
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

