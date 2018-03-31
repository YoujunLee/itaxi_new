<?php
include('./Snoopy.class.php');

$snoopy = new Snoopy;

$uri=("https://hisnet.handong.edu/login/_login.php");

$auth['id'] = $_POST['id'];
$auth['password'] = $_POST['password'];
$snoopy->submit($uri,$auth);
$snoopy->setcookies();

$snoopy->fetch('https://hisnet.handong.edu/haksa/hakjuk/HHAK110M.php');
$text =  $snoopy->results;


echo $text;

?>