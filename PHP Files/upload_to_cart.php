<?php
    $uname = $_REQUEST['Username'];
    $menu_id = $_REQUEST['menu_id'];
    $no_of_items = $_REQUEST['no_of_items'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        //find the crrent order no
        $query = "Select * from user_detail where Username = '$uname'";
        $result = mysqli_query($conn,$query);
        
        $row = mysqli_fetch_assoc($result);
        $current_order_no = $uname."_".$row['Current_order_no'];

        //check wether the item already exists
        $query2 = "Select * from order_detail_table where menu_id = '$menu_id' and order_no = '$current_order_no'";
        $result2 = mysqli_query($conn,$query2);
        $row2 = mysqli_fetch_assoc($result2);
        if($row2==null){
            $query = "insert into order_detail_table(username,order_no,menu_id,no_of_items) values('$uname','$current_order_no','$menu_id','$no_of_items')";
            if ($conn->query($query) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
        }
        //menu item already exists
        else{
            if($no_of_items=="0"){
                $query = "DELETE FROM `order_detail_table` WHERE `order_detail_table`.`order_no` = '$current_order_no' AND `order_detail_table`.`menu_id` = '$menu_id'";
                if ($conn->query($query) === TRUE) {
                    echo "Record updated successfully";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
            }
            else{
                $query = "UPDATE `order_detail_table` SET `no_of_items` = '$no_of_items' WHERE `order_detail_table`.`order_no` = '$current_order_no' AND `order_detail_table`.`menu_id` = '$menu_id'";
                if ($conn->query($query) === TRUE) {
                    echo "Record updated successfully";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
            }
        }
    }
?>