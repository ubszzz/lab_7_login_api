<?php
 
include 'connectdb.php';
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
$email = $obj['email'];
 
$password = $obj['password'];

$Sql_Query = "SELECT * FROM user WHERE email = '$email' AND password = '$password' ";

$check = mysqli_fetch_array(mysqli_query($dbcon,$Sql_Query));

if(isset($check)){

 $SuccessLoginMsg = 'success';
 
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
 echo $SuccessLoginJson ; 

 }
 
 else{
 
$InvalidMSG = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' ;
 
$InvalidMSGJSon = json_encode($InvalidMSG);
 
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($dbcon);
?>