<?php
 header('Access-Control-Allow-Origin: *');
 header("Content-Type: text/html; charset=UTF-8");
 include('./Snoopy.class.php');
 require_once './db.php';

session_start();//세션사용을 시작한다.

$snoopy = new Snoopy;
$name=array();
$stu_id=array();
$phone=array();
$mail=array();
$result=array();

$_SESSION['id'] = $_POST['id'];
$_SESSION['password'] = $_POST['password'];

$db = new DBC;
$db->DBI();
$db->query = "SELECT * FROM user WHERE hisnet_id='".$_SESSION['id']."'";
$db->DBQ();
$num= $db->result->num_rows;

/*hisnet 접속*/
$uri=("https://hisnet.handong.edu/login/_login.php");

$snoopy->submit($uri,$_SESSION);
$snoopy->setcookies();

$snoopy->fetch('https://hisnet.handong.edu/haksa/hakjuk/HHAK110M.php');
$text =  $snoopy->results;

$text1=(string)$snoopy ->_stripform($text);

if (strlen($text1)<10){
 echo "fail";
}else{
    if($num<=0){
         echo "<script>location.replace('../../signup.html');</script>"; 
    }else{  
     
    }
}
?>