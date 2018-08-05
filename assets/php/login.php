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

$auth['id'] = $_POST['id'];
$auth['password'] = $_POST['password'];

$db = new DBC;
$db->DBI();
$db->query = "SELECT * FROM user WHERE hisnet_id='".$auth['id']."'";
$db->DBQ();
$num= $db->result->num_rows;

$uri=("https://hisnet.handong.edu/login/_login.php");

$snoopy->submit($uri,$auth);
$snoopy->setcookies();

$snoopy->fetch('https://hisnet.handong.edu/haksa/hakjuk/HHAK110M.php');
$text =  $snoopy->results;

$text1=(string)$snoopy ->_stripform($text);

if (strlen($text1)<10){
    echo "<script>alert('Check Your Hisnet ID');</script>"; 
    echo "<script>location.replace('../../index.html');</script>"; 
 }else{
    if($num<=0){
         $_SESSION['id'] = $auth['id'];
         $_SESSION['password'] = $auth['password'];
         echo "<script>location.replace('../../signup.html');</script>"; 
    }else{
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

        session_unset('id');
        session_unset('password');

        setcookie("stu_id", $stu_id, time()+86400*365,'/'); 
        setcookie("phone", $phone, time()+86400*365,'/'); 
        setcookie("mail", $mail, time()+86400*365, '/'); 
   
        echo "<script>location.replace('../../main.html');</script>"; 
    }
}
?>