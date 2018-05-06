<?php
/*방탈출 php file*/
header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=UTF-8");
require_once './db.php';
include "./session_out.php";
out();

$stu_id=$_COOKIE['stu_id'];
$post_id = $_GET['post_id'];

$db2 = new DBC;
$db2->DBI();
$db2->query = "SELECT * FROM room_user where post_id='".$post_id."'";
$db2->DBQ();
$num = $db2->result->num_rows;

//마지막 1인일 경우 방 나갈시, 방 삭제도 동시에
if($num==1){
    $db = new DBC;
    $db->DBI();
    $db->query = "DELETE FROM room_user WHERE stu_id='".$stu_id."' AND post_id='".$post_id."'";
    $db->DBQ();

    $db2->query="DELETE FROM room WHERE id='".$post_id."'";
    $db2->DBQ();
}else{
    $db = new DBC;
    $db->DBI();
    $db->query = "DELETE FROM room_user WHERE stu_id='".$stu_id."' AND post_id='".$post_id."'";
    $db->DBQ();
}

$db->DBO();
$db2->DBO();
echo "<script>location.replace('../../main.html');</script>"; // main  page로 이동
?> 