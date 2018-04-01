 /*index.html 초기 실행 시, 전체 방 정보를 출력하기 위한 js*/
 var data;
 var time;
   
 console.log("123");
$(document).ready(function () {
   myurl='http://52.78.208.153/assets/php/login.php';
       $.ajax({
           dataType: "json",
           url: myurl,
           data: data,
              
           success: function (data) {
            var input_area=$('#input_area');

            var input=$("<input type='text' placeholder='"+data[0]+"'>").appendTo(input_area);

     }
 });
});
 