 /*index.html 초기 실행 시, 전체 방 정보를 출력하기 위한 js*/
 var data;
  $(document).ready(function () {
    myurl='http://52.78.208.153/assets/php/myinfo.php';
        $.ajax({
            dataType: "json",
            url: myurl,
            data: data,
            success: function (data) {
      var information=$('#information');
      var form=$('<form class="form" action="http://52.78.208.153/assets/php/change_info.php" method="post">').appendTo(information);
      
      var row = $("<div class='row'>").appendTo(form);
      var place = $("<div class='col s2'>").appendTo(row);
      var field = $("<div class='input-field col s8'>").appendTo(row);
      var input = $("<input id='stu_id' name='stu_id' class='invalidate' value='"+data[0]+"' disabled type='text'>").appendTo(field);
      var label = $("<label class='active' for='stu_id'>Stu_id</label>").appendTo(field);
      
      var row = $("<div class='row'>").appendTo(form);
      var place = $("<div class='col s2'>").appendTo(row);
      var field = $("<div class='input-field col s8'>").appendTo(row);
      var input = $("<input id='name' name='name' class='invalidate' value='"+data[1]+"' disabled type='text'>").appendTo(field);
      var label = $("<label class='active' for='name'>Name</label>").appendTo(field);    
      
      var row = $("<div class='row'>").appendTo(form);
      var place = $("<div class='col s2'>").appendTo(row);
      var field = $("<div class='input-field col s8'>").appendTo(row);
      var input = $("<input id='phone' name='phone' class='validate' value='"+data[2]+"' type='text'>").appendTo(field);
      var label = $("<label class='active' for='phone'>Phone</label>").appendTo(field);  

      var row = $("<div class='row'>").appendTo(form);
      var place = $("<div class='col s2'>").appendTo(row);
      var field = $("<div class='input-field col s8'>").appendTo(row);
      var input = $("<input id='mail' name='mail' class='validate' value='"+data[3]+"' type='text'>").appendTo(field);
      var label = $("<label class='active' for='mail'>email</label>").appendTo(field); 
      
      var row = $("<div class='row'>").appendTo(form);
      var place = $("<div class='col s5'>").appendTo(row);
      var field = $("<div class='input-field col s2'>").appendTo(row);
      var submit = $('<button class="btn waves-effect waves-light" type="submit" name="action">Modify</button>)').appendTo(field);
      }
  });
 });
 