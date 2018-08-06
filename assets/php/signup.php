<?php
 /*회원가입 php file*/
 header('Access-Control-Allow-Origin: *');
 header("Content-Type: text/html; charset=UTF-8");
 require_once './db.php';
 include "./session_out.php";
 out();

$db = new DBC;
$db->DBI();

$hisnet_id=$_POST['hisnetid'];
$stu_id=$_POST['stuid'];
$name=$_POST['name'];
$phone=$_POST['phone'];
$mail=$_POST['mail'];

$visit_count=1;
date_default_timezone_set("Asia/Seoul");
$current_time = date("Y-m-d H:i:s");

$db->query = "INSERT INTO user VALUES ('".$hisnet_id."','".$stu_id."','".$name."', '".$phone."','".$mail."','".$visit_count."','".$current_time."')";
$db->DBQ();

if(!$db->result){
    echo "<script>alert('fail to posting.');</script>";
    echo "<script>location.replace('../../index.html');</script>";
    $db->DBO();
    exit;	
} 
session_unset('id');
session_unset('password');

setcookie("stu_id", $stu_id, time()+ 86400*1,'/'); 
setcookie("phone", $phone, time()+ 86400*1,'/'); 
setcookie("mail", $mail, time()+ 86400*1, '/'); 

$db->DBO();
echo "<script>location.replace('../../main.html');</script>"; // main  page로 이동
?> 