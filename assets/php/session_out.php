
<?php
function out(){
session_start();
if(!isset($_SESSION['id']) || !isset($_SESSION['password'])) {
 session_unset('id');
 session_unset('password');
 echo "1";
}
}
?>