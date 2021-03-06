<?php
/*생성되어 있는 전체 방정보 가져오기*/
header('Access-Control-Allow-Origin: *');
require_once './db.php';

 date_default_timezone_set("Asia/Seoul");
 $current_time2 = date("Y-m-d");
 $current_time3 = date("H:i");
 $current_time2=strtotime($current_time2);
 $current_time2+=73080;
 $dbdata= array();

 $stu_id=$_COOKIE['stu_id'];
 
 /*생성되어 있는 전체 방정보 가져오기 시간/날짜 순서로 */
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT id, departure, arrival, time, population FROM room WHERE date>'".$current_time2."' or date='".$current_time2."' and time>'".$current_time3."' ORDER BY date, time";
 $db->DBQ();

 $db2 = new DBC;
 $db2->DBI();

 $db3 = new DBC;
 $db3->DBI();

 while($data = $db->result->fetch_row()){
    /*각 방에 참여한 인원수 나타내기*/
    $db2->query = "SELECT * FROM room_user where post_id='".$data[0]."'";
    $db2->DBQ();
    $num = $db2->result->num_rows;

    /*내가 참여중인 방 확인*/
    $db2->query = "SELECT * FROM room_user where post_id='".$data[0]."'AND stu_id='".$stu_id."'";
    $db2->DBQ();
    $num2 = $db2->result->num_rows;

    /*int 값으로 저장되어 있는 날짜정보, date 값으로 바꾸기 위해 Q빼오는 query*/
    $db3->query = "SELECT date FROM room where id='".$data[0]."'";
    $db3->DBQ();
    $data2=$db3->result->fetch_row();
    $data2= date("Y-m-d", $data2[0]); // int 값 datq값으로 전환
    
    array_push($data, $data2);
    array_push($data, $num);
    array_push($data, $num2);

    $dbdata[]=$data;
 }

echo json_encode($dbdata);

$db->DBO();
$db2->DBO();
?>