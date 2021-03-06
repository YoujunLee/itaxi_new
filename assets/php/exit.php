<?php
/*방탈출 php file*/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '../../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=UTF-8");
require_once './db.php';
require_once './admin_info.php';
include "./session_out.php";
out();

$stu_id=$_COOKIE['stu_id'];
$post_id = $_GET['post_id'];

date_default_timezone_set("Asia/Seoul");
$current_time2 = date("Y-m-d");
$current_time3 = date("H:i");
$current_time2=strtotime($current_time2);
$current_time2+=73080;

$db5 = new DBC;
$db5->DBI();
$db5->query="SELECT date, time FROM room where id='".$post_id."'";
$db5->DBQ();
$data = $db5->result->fetch_row();
if($data[0]==$current_time2 and $data[1]<$current_time3){
    echo "<script>alert('시간이 지난 방은 나갈 수 없습니다.');</script>";
    echo "<script>location.replace('../../main.html');</script>";
    $db->DBO();
    exit;	
 }

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

    $db->DBO();
    $db2->DBO();
    $db5->DBO();
echo "<script>location.replace('../../main.html');</script>"; // main  page로 이동

}else{
    $db = new DBC;
    $db->DBI();
    $db->query = "DELETE FROM room_user WHERE stu_id='".$stu_id."' AND post_id='".$post_id."'";
    $db->DBQ();
    
    $db3=new DBC;
    $db3->DBI();
    $db3->query = "SELECT mail FROM room_user WHERE leader=0 AND post_id='".$post_id."'";
    $db3->DBQ();
    $data3 = $db3->result->fetch_row();
    $leader_mail = $data3[0];

    

echo "<script>location.replace('../../main.html');</script>"; // main  page로 이동
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = $gmail_id;                 // SMTP username
        $mail->Password = $gmail_pw;                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('injxyj@gmail.com', 'iTaxi');
        $mail->addAddress($leader_mail, 'Joe User');     // Add a recipient
        $mail->addReplyTo('injxyj@gmail.com', 'Information');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject =  $stu_id." left your room";
        $mail->Body    = '<a href="http://itaxi.handong.edu">http://itaxi.handong.edu</a><br>somebody left your room';
        $mail->send();
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }

    
$db->DBO();
$db2->DBO();
$db5->DBO();
}
?> 
