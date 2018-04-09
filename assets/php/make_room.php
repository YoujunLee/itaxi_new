 <?php
 /*방 생성하는 php file*/

 require_once './db.php';

 /*가장 마지막 room id 값 가져오기*/
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT id FROM room ORDER BY id desc LIMIT 1";
 $db->DBQ();
 $num= $db->result->num_rows;
 $data= $db->result->fetch_row();
 
 if($num==1)
     $post_id=$data[0]+1;
 else
     $post_id=1;

$room_start = $_POST['departure'];
$room_arrive = $_POST['arrival'];
$room_date = $_POST['date'];
$room_time = $_POST['time'];
$room_population = $_POST['population']; 
$room_date=strtotime($room_date);

$stu_id=$_COOKIE['stu_id'];
$phone=$_COOKIE['phone'];
$mail=$_COOKIE['mail'];

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

 date_default_timezone_set("Asia/Seoul");
 $current_time = date("Y-m-d H:i:s");

/*방 생성하기*/
 $db->query = "INSERT INTO room VALUES ('".$post_id ."','".$room_start."', '".$room_arrive."','".$room_date."','".$room_time."','".$room_population."')";
 $db->DBQ();

 $db->query = "INSERT INTO room_user VALUES ('".$id."','".$post_id."','".$stu_id."','".$mail."','".$phone."', '".$room_date."', '".$room_time."', '".$current_time."')";
 $db->DBQ();

 if(!$db->result){
     echo "<script>alert('fail to posting.');</script>";
     $db->DBO();
     exit;	
 } 

 $db->DBO();
 echo "<script>location.replace('../../room.html?post_id=".$post_id."');</script>";
?> 