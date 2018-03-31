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
 $stu_id = '123';

$room_date=strtotime($room_date);

/*방 생성하기*/
 $db->query = "INSERT INTO room VALUES ('".$post_id ."','".$stu_id."','".$room_start."', '".$room_arrive."','".$room_date."','".$room_time."','".$room_population."')";
 $db->DBQ();

 if(!$db->result){
     echo "<script>alert('fail to posting.');</script>";
     $db->DBO();
     exit;	
 } 

 $db->DBO();
 echo "<script>location.replace('../../index.html');</script>"; // main  page로 이동
?> 