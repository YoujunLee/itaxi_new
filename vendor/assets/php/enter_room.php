 <?php
 /*방 참가하는 php*/
 
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;
 require '../../vendor/autoload.php';

 header('Access-Control-Allow-Origin: *');
 header("Content-Type: text/html; charset=UTF-8");
 require_once './db.php';
 require_once './admin_info.php';

 /*room user table id 값 확인 */
 $db2 = new DBC; 
 $db2->DBI();
 $db2->query = "SELECT id FROM room_user ORDER BY id desc LIMIT 1"; 
 $db2->DBQ();
 $num1 = $db2->result->num_rows;
 $data1 = $db2->result->fetch_row();
 if($num1==1)
   $id = $data1[0]+1;	
 else
   $id=1;

 $post_id = $_GET['post_id'];
 $stu_id=$_COOKIE['stu_id'];
 $phone=$_COOKIE['phone'];
 $my_mail=$_COOKIE['mail'];

 $db2->query = "SELECT date, time FROM room WHERE id='".$post_id."'";
 $db2->DBQ();
 $data2 = $db2->result->fetch_row();

 $room_date=$data2[0];
 $room_time=$data2[1];

 date_default_timezone_set("Asia/Seoul");
 $current_time = date("Y-m-d H:i:s");

 /*방에 참가 INSERT*/
 $db = new DBC; 
 $db->DBI();
 $db->query = "INSERT INTO room_user VALUES ('".$id."','".$post_id."',1,'".$stu_id."','".$my_mail."', '".$phone."', '".$room_date."', '".$room_time."', '".$current_time."')";
 $db->DBQ();

 if(!$db->result)
 {
     echo "<script>alert('fail to posting.');</script>";
     echo "<script>location.replace('../../index.html');</script>";
     $db->DBO();
     exit;	
 } 

 $db2->query = "SELECT mail FROM room_user WHERE leader=0 AND post_id='".$post_id."'";
 $db2->DBQ();
 $data2 = $db2->result->fetch_row();
 $leader_mail = $data2[0];

 echo "<script>location.replace('../../room.html?post_id=".$post_id."');</script>";
 
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
     $mail->Subject =  $stu_id." enter your room";
     $mail->Body    = '<a href="http://itaxi.handong.edu">http://itaxi.handong.edu</a><br>stu_id: '.$stu_id.'<br>phone: '.$phone;
     $mail->send();
 } catch (Exception $e) {
     echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
 }

 $db->DBO();
 $db2->DBO();

//  echo "<script>location.replace('../../room.html?post_id=".$post_id."');</script>";
 ?> 
