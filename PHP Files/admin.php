<<<<<<< HEAD
<?php
    $order_no = $_REQUEST['order_no'];
    $order_status = $_REQUEST['order_status'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "UPDATE `order_table` SET `order_status` = '$order_status' WHERE `order_table`.`order_no` = '$order_no'";
        if ($conn->query($query) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
=======
<?php
    $order_no = $_REQUEST['order_no'];
    $order_status = $_REQUEST['order_status'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "UPDATE `order_table` SET `order_status` = '$order_status' WHERE `order_table`.`order_no` = '$order_no'";
        if ($conn->query($query) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
>>>>>>> 7ace156 (Final Commit)
?>