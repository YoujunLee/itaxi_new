<?php
/*내가 참가한 방들만 출력하는 php file */
header('Access-Control-Allow-Origin: *');
require_once './db.php';
 $dbdata= array();
 $stu_id=$_COOKIE['stu_id'];
 /*내가 참가한 방들 id 값 가져오기 */
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT post_id FROM room_user WHERE stu_id='".$stu_id."' ORDER BY room_date, room_time DESC";
 $db->DBQ();
 /*방 정포 찾아오기*/
 $db2 = new DBC;
 $db2->DBI();
 
 /*날짜 Date Type으로 변환*/
 $db3 = new DBC;
 $db3->DBI();
 /*방 참여 인원 가져오기*/
 $db4= new DBC;
 $db4->DBI();
 /*위에서 찾아온 id값에 해당하는 방 정보들 가져오기 */
while ($data=$db->result->fetch_row()){
  $db2->query = "SELECT id, departure, arrival, time, population FROM room where id='".$data[0]."'";
  $db2->DBQ();
  $data2=$db2->result->fetch_row();
  
  /*int 값으로 저장되어 있는 날짜정보, date 값으로 바꾸기 위해 Q빼오는 query*/
  $db3->query = "SELECT date FROM room where id='".$data[0]."'";
  $db3->DBQ();
  $data3=$db3->result->fetch_row();
  $data3= date("Y-m-d", $data3[0]); // int 값 datq값으로 전환

  /*각 방에 참여한 인원수 나타내기*/
  $db4->query = "SELECT * FROM room_user where post_id='".$data[0]."'";
  $db4->DBQ();
  $num = $db4->result->num_rows;
  
  array_push($data2, $data3);
  array_push($data2, $num);
  $dbdata[]=$data2;
 }
echo json_encode($dbdata);
$db->DBO();
$db2->DBO();
$db3->DBO();
$db4->DBO();
?>