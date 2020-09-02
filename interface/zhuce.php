<?php
include('./conn.php');
$iphone=$_REQUEST['iphone'];
$paw=$_REQUEST['paw'];
$sql="select * from user_name where user_name='$iphone'";
$res=$mysqli->query($sql);
if($res->num_rows>0){
    echo '{"msg":"手机号已被使用","status":false}';
    die;
}else{
    echo '{"msg":"注册成功","status":true}';
}

$sql="insert into user_name (user_name, password)values('$iphone','$paw')";
$res =$mysqli->query($sql);
$mysqli->close();

?>