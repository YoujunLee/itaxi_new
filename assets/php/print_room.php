<?php
/*생성되어 있는 전체 방정보 가져오기*/
header('Access-Control-Allow-Origin: *');
require_once './db.php';

 $dbdata= array();
 
 /*생성되어 있는 전체 방정보 가져오기 시간/날짜 순서로 */
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT id, stu_id, departure, arrival, time, population FROM room ORDER BY date, time";
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

    /*int 값으로 저장되어 있는 날짜정보, date 값으로 바꾸기 위해 Q빼오는 query*/
    $db3->query = "SELECT date FROM room where id='".$data[0]."'";
    $db3->DBQ();
    $data2=$db3->result->fetch_row();
    $data2= date("Y-m-d", $data2[0]); // int 값 datq값으로 전환
    
    array_push($data, $data2);
    array_push($data, $num);

    $dbdata[]=$data;
 }

echo json_encode($dbdata);

$db->DBO();
$db2->DBO();
?>