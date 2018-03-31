var data;
var time;
$(document).ready(function () {
$('#change_post').on('click', function() { 
  
   myurl='http://52.78.208.153/assets/php/participate_room.php';
       $.ajax({
           dataType: "json",
           url: myurl,
           data: data,
           success: function (data) {
     var participate_room=$('#participate_room');
    
     $.each( data, function(index) {
       var li = $("<li class='filterDiv show modal-trigger' id='room' data-toogle='modal' href='#modal2'>").appendTo(participate_room); //탑승 인원 덜 찬 방만 참여 가능    
       var card = $("<div class='card'>").appendTo(li);
       var dl = $("<dl>").appendTo(card);
       var ddl = $(" <dd class='top-left'>").appendTo(dl);
       var span_id=$("<span class='room_id hide'>").appendTo(ddl);
       var span_classify=$("<span>").appendTo(ddl);
       var span_date=$(" <span class='date'>").appendTo(ddl);
       span_id.html(data[index][0]);
       span_classify.html("<i class='tiny material-icons'>local_taxi</i>");
       var time=data[index][4].substring(0,5);
       span_date.html(" "+data[index][6]+" "+time)
       
       
       var ddr = $(" <dd class='top-right'>").appendTo(dl);
       if(data[index][7]>=data[index][5])
         var span_people=$("<span class='full_badge'>").appendTo(ddr);
       else
         var span_people=$("<span class='normal_badge'>").appendTo(ddr);
       span_people.html("<i class='tiny material-icons'>person</i>"+data[index][7]+"/"+data[index][5]);   
       
       var hr = $("<hr>").appendTo(card);

       var card_content = $("<div class='card_content'>").appendTo(card);
       var img=$("<img class='arrow' src='./assets/img/process.png' alt='화살표'>").appendTo(card_content);
       var departure=$("<p class='destination'>").appendTo(card_content);
       var arrival=$("<p class='destination'>").appendTo(card_content);
    
       /*departure*/
       if(data[index][2]=="한동대학교"){
         departure.parents('li').addClass('handong');
         departure.html("출발지: "+data[index][2]);
       }else if(data[index][2]=="포항역"){
         departure.parents('li').addClass('pohang');
         departure.html("출발지: "+data[index][2]);
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
       
             $('.pagination').html('');
       var trnum = 0 ;	
       var maxRows= 12;
             var totalRows =participate_room.children('li').length;
   
            $('#participate_room li').each(function(){	
    
                trnum++;				
                if (trnum > maxRows ){		
                    $(this).hide();		
                }if (trnum <= maxRows ){$(this).show();}
            });										
            if (totalRows > maxRows){						
                var pagenum = Math.ceil(totalRows/maxRows);	
                for (var i = 1; i <= pagenum ;){
  
       $('.pagination').append('<li style="padding:0;" data-page="'+i+'">\
                                     <span>'+ i++ +'<span class="sr-only"></span></span>\
                                   </li>').show();
                }											
           } 												
           $('.pagination li:first-child').addClass('active');
           $('.pagination li').on('click',function(){	
               var pageNum = $(this).attr('data-page');
               var trIndex = 0 ;						
               $('.pagination li').removeClass('active');
               $(this).addClass('active');				 
               $('#participate_room li').each(function(){	
                    trIndex++;	
                    if (trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){
                        $(this).hide();		
                    }else {$(this).show();} 				
               }); 										
      });	
     }
 });
});
});


