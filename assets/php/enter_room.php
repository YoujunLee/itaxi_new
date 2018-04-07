<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
 <?php
/*방 참가하는 php*/

 header('Access-Control-Allow-Origin: *');
 header("Content-Type: text/html; charset=UTF-8");
 require_once './db.php';

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
 $mail=$_COOKIE['mail'];

 /*방에 참가 INSERT*/
 $db = new DBC; 
 $db->DBI();
 $db->query = "INSERT INTO room_user VALUES ('".$id."','".$post_id."','".$stu_id."','".$mail."', '".$phone."')";
 $db->DBQ();

 if(!$db->result)
 {
     echo "<script>alert('fail to posting.');</script>";
     $db->DBO();
     exit;	
 } 

 $db->DBO();
 $db2->DBO();

 echo "<script>location.replace('../../room.html?post_id=".$post_id."');</script>";
  ?> 
  </body>
</html>