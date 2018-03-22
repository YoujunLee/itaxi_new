var data;
$.urlParam = function(name){
    var results = new RegExp('[\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return results[1] || 0;
}

$(document).ready(function () {
myurl='http://52.78.208.153/assets/php/get_room.php?post_id='+$.urlParam('post_id');
   $.ajax({
       dataType: "json",
       url: myurl,
       data: data,
       success: function (data) {
        var tree=$('#room_info');
        var table = $("<table class='room_info'>").appendTo(tree);
        
        var tr_num=$("<tr>").appendTo(table);
        var th_num=$("<th scopte='row'>").appendTo(tr_num);
        var td_num=$("<td>").appendTo(tr_num);
        th_num.html("No.");
        td_num.html(data[0]['id']);

        var tr_date=$("<tr>").appendTo(table);
        var th_date=$("<th scopte='row'>").appendTo(tr_date);
        var td_date=$("<td>").appendTo(tr_date);
        th_date.html("날짜");
        td_date.html(data[0]['date']);
        
        var tr_time=$("<tr>").appendTo(table);
        var th_time=$("<th scopte='row'>").appendTo(tr_time);
        var td_time=$("<td>").appendTo(tr_time);
        th_time.html("시간");
        td_time.html(data[0]['time']);

        var tr_departure=$("<tr>").appendTo(table);
        var th_departure=$("<th scopte='row'>").appendTo(tr_departure);
        var td_departure=$("<td>").appendTo(tr_departure);
        th_departure.html("출발지");
        td_departure.html(data[0]['departure']);

        var tr_arrival=$("<tr>").appendTo(table);
        var th_arrival=$("<th scopte='row'>").appendTo(tr_arrival);
        var td_arrival=$("<td>").appendTo(tr_arrival);
        th_arrival.html("도착지");
        td_arrival.html(data[0]['arrival']);

        var participant=$('#participant');
        var table_participant=$("<table class='striped centered'>").appendTo(participant);
        var thead=$('<thead>').appendTo(table_participant);
        var tr_thead=$('<tr>').appendTo(thead);
        var th_no=$('<th>').appendTo(tr_thead);
        var th_id=$('<th>').appendTo(tr_thead);
        var th_num=$('<th>').appendTo(tr_thead);
        th_no.html("No.");
        th_id.html("Stu_ID");
        th_num.html("Phone");

        var tbody=$('<tbody>').appendTo(table_participant);
  
      
        $.each( data[1], function(index) {
        var tr_tbody=$('<tr>').appendTo(tbody);
        
        var td_no=$('<td>').appendTo(tr_tbody);
        var td_id=$('<td>').appendTo(tr_tbody);
        var td_num=$('<td>').appendTo(tr_tbody);

        td_no.html(index);
        td_id.html(data[1][index][1]);
        td_num.html(data[1][index][2]);
        });
        
        }
    });
});
