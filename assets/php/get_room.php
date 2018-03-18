<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=UTF-8");
require_once './db.php';

$post_id = $_GET['post_id'];
 
$db = new DBC;
$db->DBI();
$db->query = "SELECT departure, arrival, date, time, population FROM room WHERE id='".$post_id."'";
$db->DBQ();
$data= $db->result->fetch_row();

$db2 = new DBC;
$db2->DBI();
$db->query= "SELECT id, stu_id, name, phone FROM room_user WHERE post_id='".$post_id."'";


$row_array['id']=$post_id;
$row_array['departure']=$data[0];
$row_array['arrival']=$data[1];
$row_array['date']=$data[2];
$row_array['time']=$data[3];
$row_array['population']=$data[4];

echo json_encode($row_array);

$db->DBO();
?> 
