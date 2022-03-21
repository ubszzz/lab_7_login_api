<?php

    $dbcon = mysqli_connect('localhost','6260704014','6260704014','6260704014');
	
	if (mysqli_connect_errno()){
	     echo "ไม่สามารถติดต่อฐานข้อมูล MYSQL ได้".  mysqli_connect_error();
             exit;
	} 
	mysqli_set_charset($dbcon, 'utf8');
?>