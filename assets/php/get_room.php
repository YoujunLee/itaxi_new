<?php
/*
방 정보 확인
get_room.js와 연동 
*/

header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=UTF-8");
require_once './db.php';

$post_id = $_GET['post_id'];
$return_arr = array();

/*방 정보 확인*/
$db = new DBC;
$db->DBI();
$db->query = "SELECT departure, arrival, date, time, population FROM room WHERE id='".$post_id."'";
$db->DBQ();
$data= $db->result->fetch_row();

/*방 참가자 정보 확인*/
$db2 = new DBC;
$db2->DBI();
$db2->query= "SELECT id, stu_id, name, phone_num FROM room_user WHERE post_id='".$post_id."'";
$db2->DBQ();
$num = $db2->result->num_rows;

$dbdata= array();

while($data2 = $db2->result->fetch_row()){
  $dbdata[]=$data2;
}

/*JSON 이름 설정 */
$row_array['id']=$post_id;
$row_array['departure']=$data[0];
$row_array['arrival']=$data[1];
$row_array['date']=$data[2];
$row_array['time']=$data[3];
$row_array['population']=$data[4];

array_push($return_arr,$row_array);
array_push($return_arr,$dbdata);

echo json_encode($return_arr);

$db->DBO();
?> 
