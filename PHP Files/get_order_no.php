<?php
    $uname = $_REQUEST['uname'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "SELECT * FROM `user_detail` where Username='$uname'";
        $result = mysqli_query($conn,$query);

        $row = mysqli_fetch_assoc($result);
        echo "{$row['Current_order_no']}";
    }
?>