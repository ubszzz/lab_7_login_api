<?php
include 'connectdb.php';
$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
 
$name = $obj['name'];
 
$email = $obj['email'];

$address = $obj['address'];
 
$password = $obj['password'];

$CheckSQL = "SELECT * FROM user WHERE email='$email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($dbcon,$CheckSQL));


if(isset($check)){

 $EmailExistMSG = 'พบข้อมูลซ้ำ!';
 
$EmailExistJson = json_encode($EmailExistMSG);
 
 echo $EmailExistJson ; 

 }
 else{
 
$Sql_Query = "INSERT INTO user (name,email,password,address) VALUES ('$name','$email','$password','$address')";
 
 if($dbcon->query($Sql_Query)=== TRUE){
 
$MSG = 'สมัครสมาชิกสำเร็จ' ;
 
$json = json_encode($MSG);
 
echo $json ;
 
 }
 else{
    $ErrorMsg = 'เกิดข้อผิดพลาด' ;
 
    $json = json_encode($ErrorMsg);
    echo $json ;
 }
 }
 $dbcon->close();
?>