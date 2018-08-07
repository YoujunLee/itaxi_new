<?php
/*logout 기능 settime을 과거로 만들어서 자동으로 cookie를 소멸시킨다.*/
setcookie('stu_id', '', time() - 3600, '/');
setcookie('phone', '', time() - 3600, '/');
setcookie('mail', '', time() - 3600, '/');

echo "<script>location.replace('../../index.html');</script>"; 
?>