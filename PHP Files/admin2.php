<?php

    $doWhat = $_REQUEST['doWhat'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        if($doWhat=="1"){
            $query = "Select * from order_table";
            $result = mysqli_query($conn,$query);
            
            while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                echo ",",$row['order_no'];
            }
        }
        else{
            $query = "SELECT order_no,DAY(order_date) AS Day,MONTH(order_date) AS Month,HOUR(order_time) AS Hour,MINUTE(order_time) AS Minute,total_items,Total,order_status FROM order_table WHERE order_no = '$doWhat' ORDER BY order_no";
            $result = mysqli_query($conn,$query);
            $row = mysqli_fetch_assoc($result);
            echo "{$row['order_no']},{$row['Day']},{$row['Month']},{$row['Hour']},{$row['Minute']},{$row['total_items']},{$row['Total']},{$row['order_status']},";
        }
    }
?>