


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

    $.ajax(url, {
        success: function (response) {
            //	var ledom = document.createElement("div");
            // 	ledom.innerHTML = response;
            $("#lapagecontent").html(response);

            alert($("#lapagecontent").text());

        }
    });
};

