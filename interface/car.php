<?php
include('./conn.php');
$idlist=$_REQUEST['idlist'];
$sql="SELECT * FROM `content` WHERE id IN ($idlist)";
$res=$mysqli->query($sql);
$arr=array();
while($row=$res->fetch_assoc()){
    array_push($arr,$row);
};
$json = json_encode($arr);
echo $json;
$mysqli->close();
?> 