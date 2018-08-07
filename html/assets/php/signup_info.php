<?php
 /*회원 가입하기 위해 hisnet 정보 json으로 반환하는 php file*/
header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=UTF-8");
include('./Snoopy.class.php');

include "./session_out.php";
out();

$snoopy = new Snoopy;
$name=array();
$stu_id=array();
$phone=array();
$mail=array();
$result=array();

/* login session value 이용하여 hisnet 접속*/
$auth['id'] =$_SESSION['id'];
$auth['password'] = $_SESSION['password'];

$uri=("https://hisnet.handong.edu/login/_login.php");

$snoopy->submit($uri,$auth);
$snoopy->setcookies();

$snoopy->fetch('https://hisnet.handong.edu/haksa/hakjuk/HHAK110M.php');
$text =  $snoopy->results;

$text1=(string)$snoopy ->_stripform($text);
/*이름 저장*/
$usr_name_start_point = strpos($text1, 'hakj_irum_eng') + 47;
$usr_name_end_point= strpos($text1, 'hakj_hak_tel')-63;
for($i=$usr_name_start_point; $i<=$usr_name_end_point; $i++)
    array_push($name, $text1[$i]) ;
$name=implode($name);  

/*학번 저장*/
$usr_id_start_point = strpos($text1, 'idNum') + 13;
for($i=$usr_id_start_point; $i<=$usr_id_start_point+7; $i++)
    array_push($stu_id, $text1[$i]) ;
$stu_id=implode($stu_id); 

/*연락처 저장*/
$usr_phone_start_point = strpos($text1, 'hakj_hak_pager') + 48;
for($i=$usr_phone_start_point; $i<=$usr_phone_start_point+12; $i++)
    array_push($phone, $text1[$i]);
$phone = implode($phone);

/*e-mail 저장*/
$usr_email_start_point = strpos($text1, 'hakj_email') + 44;
$usr_email_end_point = strpos($text1, 'zip1')-65;
for($i=$usr_email_start_point; $i<=$usr_email_end_point; $i++)
    array_push($mail, $text1[$i]);
$mail=implode($mail);

array_push($result, $auth['id']);
array_push($result, $stu_id);
array_push($result, $name);
array_push($result, $phone);
array_push($result, $mail);

echo json_encode($result);
?> 