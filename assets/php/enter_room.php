<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
 <?php
 header('Access-Control-Allow-Origin: *');
 header("Content-Type: text/html; charset=UTF-8");
 require_once './db.php';

 $db2 = new DBC; //db object생성
 $db2->DBI();//db 들어가기
 $db2->query = "SELECT id FROM room_user ORDER BY id desc LIMIT 1";
 $db2->DBQ();
 $num1 = $db2->result->num_rows;
 $data1 = $db2->result->fetch_row();
 if($num1==1)
   $id = $data1[0]+1;	
 else
   $id=1;
 
 
 $post_id = $_GET['post_id'];
 $stu_id = '21101002';
 $name= '이유준';
 $phone='010-4408-4262';

 echo $id;
 echo $post_id;
 echo $stu_id;
 echo $name;
 echo $phone;

 $db = new DBC; //db object생성
 $db->DBI();//db 들어가기
 $db->query = "INSERT INTO room_user VALUES ('".$id."','".$post_id."','".$stu_id."','".$name."', '".$phone."')";
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