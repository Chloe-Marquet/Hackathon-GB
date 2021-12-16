


$(document).ready(function() {



});

/*function analyse() { alert("hello")

//text = $('p').text();

//alert(text);

lelien=$("#lapage").val();
alert(lelien);

};*/


var analyse = function (){
	lelien=$("#lapage").val();

  $.ajax(lelien, {
    success: function(response) {
    //	var ledom = document.createElement("div");
   // 	ledom.innerHTML = response;
     $("#lapagecontent").html(response);
  
   alert( $("#lapagecontent").text());

    }
  }); 
};

