<?php
/*생성되어 있는 전체 방정보 가져오기*/
header('Access-Control-Allow-Origin: *');
require_once './db.php';

 $dbdata= array();

 $stu_id=$_COOKIE['stu_id'];
 
 /*생성되어 있는 전체 방정보 가져오기 시간/날짜 순서로 */
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT stu_id, name, phone, mail FROM user where stu_id='".$stu_id."'";
 $db->DBQ();
 $data=$db->result->fetch_row();

echo json_encode($data);
$db->DBO();
?>