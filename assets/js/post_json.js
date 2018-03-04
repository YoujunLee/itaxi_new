
    var data;
     $(document).ready(function () {
	
    myurl='http://52.78.208.153/assets/php/print_room.php';
		$.ajax({
			dataType: "json",
			url: myurl,
			data: data,
			success: function (data) {
      var tree=$('#tree');
     
      
     
      $.each( data, function(index) {
        var li = $("<li  class='filterDiv show'>").appendTo(tree);
        var card = $("<div class='card'>").appendTo(li);
        var dl = $("<dl>").appendTo(card);
        var ddl = $(" <dd class='top-left'>").appendTo(dl);
        var span_classify=$("<span class='classify'>").appendTo(ddl);
        var span_people=$("<span class='people'>").appendTo(ddl);
        span_classify.html("택시");
        span_people.html(" 1/"+data[index][6]);
        
        var ddr = $(" <dd class='top-right'>").appendTo(dl);
        var span_date=$(" <span class='date'>").appendTo(ddr);
        span_date.html(data[index][4])
        
        var hr = $("<hr>").appendTo(card);

        var card_content = $("<div class='card_content'>").appendTo(card);
        var departure=$("<p >").appendTo(card_content);
        var img=$("<p ><img class='arrow' src='./assets/img/arrow.png' alt='화살표'></p>").appendTo(card_content);
        var arrival=$("<p>").appendTo(card_content);
        console.log(departure.parents('li'));
        /*departure*/
        if(data[index][2]=="한동대학교"){
          departure.parents('li').addClass('handong');
          departure.html(data[index][2]);
        }else if(data[index][2]=="포항역"){
          departure.parents('li').addClass('pohang');
          departure.html(data[index][2]);
        }else if(data[index][2]=="양덕"){
          departure.parents('li').addClass('yangduck');
          departure.html(data[index][2]);  
        }else if(data[index][2]=="고속터미널"){
          departure.parents('li').addClass('express');
          departure.html(data[index][2]);  
        }else if(data[index][2]=="시외버스터미널"){
          departure.parents('li').addClass('side_express');
          departure.html(data[index][2]);  
        }else if(data[index][2]=="육거리"){
          departure.parents('li').addClass('six_street');
          departure.html(data[index][2]);  
        }else{
          departure.parents('li').addClass('etc');
          departure.html(data[index][2]);  
        }

        /*arrival*/
        if(data[index][3]=="한동대학교"){
          arrival.parents('li').addClass('handong');
          arrival.html(data[index][3]);
        }else if(data[index][3]=="포항역"){
          arrival.parents('li').addClass('pohang');
          arrival.html(data[index][3]);
        }else if(data[index][3]=="양덕"){
          arrival.parents('li').addClass('yangduck');
          arrival.html(data[index][3]);  
        }else if(data[index][3]=="고속터미널"){
          arrival.parents('li').addClass('express');
          arrival.html(data[index][3]);  
        }else if(data[index][3]=="시외버스터미널"){
          arrival.parents('li').addClass('side_express');
          arrival.html(data[index][3]);  
        }else if(data[index][3]=="육거리"){
          arrival.parents('li').addClass('six_street');
          arrival.html(data[index][3]);  
        }else{
          arrival.parents('li').addClass('etc');
          arrival.html(data[index][3]);  
        }
      
        });
			  }
		  });
	  });
