 /*index.html 초기 실행 시, 전체 방 정보를 출력하기 위한 js*/
 var data;
 var time;
   
 console.log("123");
$(document).ready(function () {
   myurl='http://52.78.208.153/assets/php/signup_info.php';
       $.ajax({
           dataType: "json",
           url: myurl,
           data: data,
              
           success: function (data) {
            var input_area=$('#input_area');

            var div_wrap_id=$("<div class='wrap-input100 validate-input'>").appendTo(input_area);
            var input_id=$("<input class='input100 readonly' type='text' name='hisnetid' value='"+data[0]+"' readonly required>").appendTo(div_wrap_id);
            var span_id=$("<span class='focus-input100' data-placeholder='Hisnet ID'>").appendTo(div_wrap_id);


            var div_wrap_stuid=$("<div class='wrap-input100 validate-input'>").appendTo(input_area);
            var input_stuid=$("<input class='input100' type='text' name='stuid' value='"+data[1]+"' readonly required>").appendTo(div_wrap_stuid);
            var span_stuid=$("<span class='focus-input100' data-placeholder='Student ID'>").appendTo(div_wrap_stuid);
          
            var div_wrap_name=$("<div class='wrap-input100 validate-input'>").appendTo(input_area);
            var input_name=$("<input class='input100' type='text' name='name' value='"+data[2]+"'readonly required>").appendTo(div_wrap_name);
            var span_name=$("<span class='focus-input100' data-placeholder='Name'>").appendTo(div_wrap_name);
          
            var div_wrap_phone=$("<div class='wrap-input100 validate-input'>").appendTo(input_area);
            var input_phone=$("<input class='input100' type='text' name='phone' value='"+data[3]+"' required>").appendTo(div_wrap_phone);
            var span_phone=$("<span class='focus-input100' data-placeholder='Phone'>").appendTo(div_wrap_phone);
            
            var div_wrap_mail=$("<div class='wrap-input100 validate-input'>").appendTo(input_area);
            var input_mail=$("<input class='input100' type='text' name='mail' value='"+data[4]+"' required>").appendTo(div_wrap_mail);
            var span_mail=$("<span class='focus-input100' data-placeholder='e-mail'>").appendTo(div_wrap_mail);
     }
 });
});
 