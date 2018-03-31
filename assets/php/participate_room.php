<?php
/*내가 참가한 방들만 출력하는 php file */

header('Access-Control-Allow-Origin: *');
require_once './db.php';

 $dbdata= array();
 $stu_id='21101002';

 /*내가 참가한 방들 id 값 가져오기 */
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT post_id FROM room_user WHERE stu_id='".$stu_id."'";
 $db->DBQ();

 $db2 = new DBC;
 $db2->DBI();

 /*위에서 찾아온 id값에 해당하는 방 정보들 가져오기 */
 while ($data=$db->result->fetch_row()){
  $db2->query = "SELECT * FROM room where id='".$data[0]."'";
  $db2->DBQ();
  $data2=$db2->result->fetch_row();

  $dbdata[]=$data2;
 }

echo json_encode($dbdata);

$db->DBO();
$db2->DBO();
?>