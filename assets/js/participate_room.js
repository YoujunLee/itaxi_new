/*index.html card영역에서 참가한 방만 보이게하기*/
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
     if(data[0]==null){
       console.log("123");
      var title=$("<h3 class='main_title' id='participate_title'>참여 중인 방이 없습니다.</h3>").appendTo(participate_room);
     }else{
       console.log("234");
     $.each( data, function(index) {
       var li = $("<li class='filterDiv show' id='room' onclick='myroom("+data[index][0]+")'>").appendTo(participate_room);  //탑승 인원 덜 찬 방만 참여 가능    
       var card = $("<div class='card'>").appendTo(li);
       var dl = $("<dl>").appendTo(card);
       var ddl = $(" <dd class='top-left'>").appendTo(dl);
       var span_id=$("<span class='room_id hide'>").appendTo(ddl);
       var span_classify=$("<span>").appendTo(ddl);
       var span_date=$(" <span class='date'>").appendTo(ddl);
       span_id.html(data[index][0]);
       span_classify.html("<i class='tiny material-icons'>local_taxi</i>");
       var time=data[index][3].substring(0,5);
       span_date.html(" "+data[index][5]+" "+time)
       
       var ddr = $(" <dd class='top-right'>").appendTo(dl);
       var span_people=$("<span class='participate_badge'>").appendTo(ddr);
       span_people.html("<i class='tiny material-icons'>person</i>"+data[index][6]+"/"+data[index][4]);   
       
       var hr = $("<hr>").appendTo(card);

       var card_content = $("<div class='card_content'>").appendTo(card);
       var img=$("<img class='arrow' src='./assets/img/process.png' alt='화살표'>").appendTo(card_content);
       var departure=$("<p class='destination'>").appendTo(card_content);
       var arrival=$("<p class='destination'>").appendTo(card_content);
    
       /*departure*/
       if(data[index][2]=="한동대학교"){
         departure.parents('li').addClass('handong');
         departure.html(+data[index][1]);
       }else if(data[index][1]=="포항역"){
         departure.parents('li').addClass('pohang');
         departure.html(data[index][1]);
       }else if(data[index][1]=="양덕"){
         departure.parents('li').addClass('yangduck');
         departure.html(data[index][1]);  
       }else if(data[index][1]=="고속터미널"){
         departure.parents('li').addClass('express');
         departure.html(data[index][2]);  
       }else if(data[index][1]=="시외버스터미널"){
         departure.parents('li').addClass('side_express');
         departure.html(data[index][2]);  
       }else if(data[index][1]=="육거리"){
         departure.parents('li').addClass('six_street');
         departure.html(data[index][1]);  
       }else{
         departure.parents('li').addClass('etc');
         departure.html(data[index][1]);  
       }

       /*arrival*/
       if(data[index][2]=="한동대학교"){
         arrival.parents('li').addClass('handong_a');
         arrival.html(data[index][2]);
       }else if(data[index][2]=="포항역"){
         arrival.parents('li').addClass('pohang_a');
         arrival.html(data[index][2]);
       }else if(data[index][2]=="양덕"){
         arrival.parents('li').addClass('yangduck_a');
         arrival.html(data[index][2]);  
       }else if(data[index][2]=="고속터미널"){
         arrival.parents('li').addClass('express_a');
         arrival.html(data[index][2]);  
       }else if(data[index][2]=="시외버스터미널"){
         arrival.parents('li').addClass('side_a');
         arrival.html(data[index][2]);  
       }else if(data[index][2]=="육거리"){
         arrival.parents('li').addClass('six_street_a');
         arrival.html(data[index][2]);  
       }else{
         arrival.parents('li').addClass('etc');
         arrival.html(data[index][2]);  
       }
     
       });
      }
      $('.pagination').html('');
       var trnum = 0 ;	
       var maxRows= 12;
       var totalRows =participate_room.children('li').length;
      $('#participate_room li').each(function(){	
        trnum++;				
        if (trnum > maxRows ){$(this).hide();}
        if (trnum <= maxRows ){$(this).show();}
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
              $(this).hide();}else{
                $(this).show();} 				
            }); 										
         });	
       } ,beforeSend:function(){
        $('.wrap-loading').removeClass('display-none');
    },complete:function(){
        $('.wrap-loading').addClass('display-none');
    }
    });
  });
 
});


