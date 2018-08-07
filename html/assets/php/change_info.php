<?php
/*생성되어 있는 전체 방정보 가져오기*/
header('Access-Control-Allow-Origin: *');
require_once './db.php';

$stu_id=$_COOKIE['stu_id'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];

 
 /*생성되어 있는 전체 방정보 가져오기 시간/날짜 순서로 */
 $db = new DBC;
 $db->DBI();
 $db->query = "UPDATE user SET phone='".$phone."', mail='".$mail."' WHERE stu_id='".$stu_id."'";
 $db->DBQ();
 $db->DBO();
 echo "<script>location.replace('../../myinfo.html');</script>";
?>