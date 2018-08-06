 /*index.html 초기 실행 시, 전체 방 정보를 출력하기 위한 js*/
var data;
var time;
   $(document).ready(function () {
   myurl='http://52.78.208.153/assets/php/print_room.php';
       $.ajax({
           dataType: "json",
           url: myurl,
           data: data,
           success: function (data) {
     var all_room=$('#all_room');
    
     $.each( data, function(index) {
       /*탑승 인원 초과 했는지 확인하는 조건문*/
       if(data[index][7]==1)
         var li = $("<li class='filterDiv show' id='room' onclick='myroom("+data[index][0]+");'>").appendTo(all_room); 
       else if(data[index][6]>=data[index][4])
         var li = $("<li class='filterDiv show' id='room'>").appendTo(all_room);
       else
         var li = $("<li class='filterDiv show modal-trigger' id='room' data-toogle='modal' href='#modal2'>").appendTo(all_room); //탑승 인원 덜 찬 방만 참여 가능
       
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

      /*탑승 인원에 다른 badge색 변경 */
       if(data[index][7]==1)
         var span_people=$("<span class='participate_badge'>").appendTo(ddr);
       else if(data[index][6]>=data[index][4])
         var span_people=$("<span class='full_badge'>").appendTo(ddr);
       else
         var span_people=$("<span class='normal_badge'>").appendTo(ddr);
       span_people.html("<i class='tiny material-icons'>person</i>"+data[index][6]+"/"+data[index][4]);   
       
       var hr = $("<hr>").appendTo(card);

       var card_content = $("<div class='card_content'>").appendTo(card);
       var img=$("<img class='arrow' src='./assets/img/process.png' alt='화살표'>").appendTo(card_content);
       var departure=$("<p class='destination'>").appendTo(card_content);
       var arrival=$("<p class='destination'>").appendTo(card_content);
    
       // 목적지에 대한 class를 추가 해줘야지, 나중에 main화면 filter에서 거를 수 있다. 
       /*departure*/
       if(data[index][1]=="HGU Taxi Station"){
         departure.parents('li').addClass('handong_d');
         departure.html(data[index][1]);
       }else if(data[index][1]=="Pohang Station (포항역)"){
         departure.parents('li').addClass('pohang_d');
         departure.html(data[index][1]);
       }else if(data[index][1]=="Yangduk (양덕)"){
         departure.parents('li').addClass('yangduck_d');
         departure.html(data[index][1]);  
       }else if(data[index][1]=="Express Bus Terminal (고터)"){
         departure.parents('li').addClass('express_d');
         departure.html(data[index][1]);  
       }else if(data[index][1]=="Cityside Bus Terminal (시터)"){
         departure.parents('li').addClass('side_express_d');
         departure.html(data[index][1]);  
       }else if(data[index][1]=="Pohang Downtown (육거리)"){
         departure.parents('li').addClass('six_street_d');
         departure.html(data[index][1]);  
       }else{
         departure.parents('li').addClass('etc');
         departure.html(data[index][1]);  
       }

       /*arrival*/
       if(data[index][2]=="HGU Taxi Station"){
         arrival.parents('li').addClass('handong_a');
         arrival.html(data[index][2]);
       }else if(data[index][2]=="Pohang Station (포항역)"){
         arrival.parents('li').addClass('pohang_a');
         arrival.html(data[index][2]);
       }else if(data[index][2]=="Yangduk (양덕)"){
         arrival.parents('li').addClass('yangduck_a');
         arrival.html(data[index][2]);  
       }else if(data[index][2]=="Express Bus Terminal (고터)"){
         arrival.parents('li').addClass('express_a');
         arrival.html(data[index][2]);  
       }else if(data[index][2]=="Cityside Bus Terminal (시터)"){
         arrival.parents('li').addClass('side_a');
         arrival.html(data[index][2]);  
       }else if(data[index][2]=="Pohang Downtown (육거리)"){
         arrival.parents('li').addClass('six_street_a');
         arrival.html(data[index][2]);  
       }else{
         arrival.parents('li').addClass('etc');
         arrival.html(data[index][2]);  
       }
       });
       
      /*pagination부분 코드*/
      $('.pagination').html('');
      var trnum = 0 ;	
      var maxRows= 12; // 여기 넣는 숫자 만큼 1page에 출력됨
      var totalRows =all_room.children('li').length;
      
      $('#all_room li').each(function(){
        trnum++ 
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
            $('#all_room li').each(function(){	
            trIndex++;	
        if (trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){
          $(this).hide();		
        }else {$(this).show();} 				
       }); 										
      });	
     },beforeSend:function(){
      $('.wrap-loading').removeClass('display-none');
      },complete:function(){
      $('.wrap-loading').addClass('display-none');
     }
 });
});
