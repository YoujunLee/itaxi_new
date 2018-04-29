<?php
/*방탈출 php file*/
header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=UTF-8");
require_once './db.php';
include "./session_out.php";
out();

$stu_id=$_COOKIE['stu_id'];
$post_id = $_GET['post_id'];

$db = new DBC;
$db->DBI();
$db->query = "DELETE FROM room_user WHERE stu_id='".$stu_id."' AND post_id='".$post_id."'";
$db->DBQ();

$db->DBO();
echo "<script>location.replace('../../main.html');</script>"; // main  page로 이동
?> 