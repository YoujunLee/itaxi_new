

<?php
header('Access-Control-Allow-Origin: *');
require_once './db.php';

 $dbdata= array();

 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT * FROM room";
 $db->DBQ();

 $db2 = new DBC;
 $db2->DBI();

 while($data = $db->result->fetch_row()){
    $db2->query = "SELECT * FROM room_user where post_id='".$data[0]."'";
    $db2->DBQ();
    $num = $db2->result->num_rows;

    array_push($data, $num);

    $dbdata[]=$data;
 }

echo json_encode($dbdata);

$db->DBO();
$db2->DBO();
?>

