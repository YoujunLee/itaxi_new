<?php
header('Access-Control-Allow-Origin: *');
require_once './db.php';

 $dbdata= array();

 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT id, stu_id, departure, arrival, time, population FROM room ORDER BY date, time";
 $db->DBQ();

 $db2 = new DBC;
 $db2->DBI();

 $db3 = new DBC;
 $db3->DBI();

 while($data = $db->result->fetch_row()){
    $db2->query = "SELECT * FROM room_user where post_id='".$data[0]."'";
    $db2->DBQ();
    $num = $db2->result->num_rows;

    $db3->query = "SELECT date FROM room where id='".$data[0]."'";
    $db3->DBQ();
    $data2=$db3->result->fetch_row();
    $data2= date("Y-m-d", $data2[0]);
    
    array_push($data, $data2);
    array_push($data, $num);

    $dbdata[]=$data;
 }

 echo json_encode($dbdata);

$db->DBO();
$db2->DBO();
?>