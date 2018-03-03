
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
        var li = $("<li>").appendTo(tree);
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
        var departure=$("<p>").appendTo(card_content);
        var img=$("<p><img class='arrow' src='./assets/img/arrow.png' alt='화살표'></p>").appendTo(card_content);
        var arrival=$("<p>").appendTo(card_content);
        if (data[index][0]==1) {
         departure.html("한동대학교");
         arrival.html("포항역");
        } else {
          
        }
       
        });
			  }
		  });
	  });
