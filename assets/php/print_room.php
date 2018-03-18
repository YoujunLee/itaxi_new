

<?php
header('Access-Control-Allow-Origin: *');
 require_once './db.php';
 $db = new DBC;
 $db->DBI();
 $db->query = "SELECT * FROM room";
 $db->DBQ();
 $num = $db->result->num_rows;
 
 $dbdata= array();
 
 while($data = $db->result->fetch_row()){
    $dbdata[]=$data;
 }

echo json_encode($dbdata);

?>

