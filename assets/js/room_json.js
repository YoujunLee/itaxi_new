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
        var tree=$('#tree');

        var table = $("<table class='room_info'>").appendTo(tree);
        
        var tr_num=$("<tr>").appendTo(table);
        var th_num=$("<th scopte='row'>").appendTo(tr_num);
        var td_num=$("<td>").appendTo(tr_num);
        th_num.html("No.");
        td_num.html(data['id']);

        var tr_date=$("<tr>").appendTo(table);
        var th_date=$("<th scopte='row'>").appendTo(tr_date);
        var td_date=$("<td>").appendTo(tr_date);
        th_date.html("날짜");
        td_date.html(data['date']);
        
        var tr_time=$("<tr>").appendTo(table);
        var th_time=$("<th scopte='row'>").appendTo(tr_time);
        var td_time=$("<td>").appendTo(tr_time);
        th_time.html("시간");
        td_time.html(data['time']);

        var tr_departure=$("<tr>").appendTo(table);
        var th_departure=$("<th scopte='row'>").appendTo(tr_departure);
        var td_departure=$("<td>").appendTo(tr_departure);
        th_departure.html("출발지");
        td_departure.html(data['departure']);

        var tr_arrival=$("<tr>").appendTo(table);
        var th_arrival=$("<th scopte='row'>").appendTo(tr_arrival);
        var td_arrival=$("<td>").appendTo(tr_arrival);
        th_arrival.html("도착지");
        td_arrival.html(data['arrival']);
        }
    });
});



