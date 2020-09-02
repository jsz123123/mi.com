<?php
include('./conn.php');
$username = $_REQUEST['uname'];
$paw=$_REQUEST['paw'];
$sql = "select * from user_name where user_name='$username'and password='$paw'";
$res = $mysqli->query($sql);
if($res->num_rows>0){
    echo '{"msg":"登录成功","status":true}';
    
}else{
    echo '{"msg":"用户名或密码错误","status":false}';
}
$mysqli->close();
?>