<<<<<<< HEAD
<?php
    $order_no = $_REQUEST['order_no'];
    $uname = $_REQUEST['uname'];
    $payment_method = $_REQUEST['payment_method'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "SELECT ROUND(SUM(menu_items.Price*order_detail_table.no_of_items), 2) as Subtotal,ROUND(18*SUM(menu_items.Price*order_detail_table.no_of_items)/100,2) as Tax,ROUND(ROUND(SUM(menu_items.Price*order_detail_table.no_of_items), 2)+ROUND(18*SUM(menu_items.Price*order_detail_table.no_of_items)/100,2),2) as Total FROM order_detail_table INNER JOIN menu_items ON order_detail_table.menu_id=menu_items.id WHERE order_detail_table.order_no='$order_no'";
        $result = mysqli_query($conn,$query);
        $row = mysqli_fetch_assoc($result);

        $SubTotal = $row['Subtotal'];
        $Tax = $row['Tax'];
        $Total = $row['Total'];

        $date =  date("Y-m-d");
        
        date_default_timezone_set('Asia/Calcutta');
        $time = date('H:i:s', time());
        $status = "Order Placed";

        $query3 = "SELECT Current_order_no from user_detail where user_detail.Username = '$uname'";
        $result3 = mysqli_query($conn,$query3);
        $row3 = mysqli_fetch_assoc($result3);

        $query4 = "SELECT COUNT(username) AS total_items FROM `order_detail_table` WHERE order_no = '$order_no'";
        $result4 = mysqli_query($conn,$query4);
        $row4 = mysqli_fetch_assoc($result4);
        
        $current_order_no = (int)$row3['Current_order_no'] + 1;
        $total_items = (int)$row4['total_items'];

        $query = "INSERT into order_table(order_no,Username,Subtotal,Tax,Total,Payment_Method,order_date,order_time,total_items,order_status) values('$order_no','$uname','$SubTotal','$Tax','$Total','$payment_method','$date','$time','$total_items','$status')";
        $query2 = "UPDATE `user_detail` SET `Current_order_no` = '$current_order_no' WHERE `user_detail`.`Username` = '$uname'";
        if ($conn->query($query) === TRUE && $conn->query($query2)) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
=======
<?php
    $order_no = $_REQUEST['order_no'];
    $uname = $_REQUEST['uname'];
    $payment_method = $_REQUEST['payment_method'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "SELECT ROUND(SUM(menu_items.Price*order_detail_table.no_of_items), 2) as Subtotal,ROUND(18*SUM(menu_items.Price*order_detail_table.no_of_items)/100,2) as Tax,ROUND(ROUND(SUM(menu_items.Price*order_detail_table.no_of_items), 2)+ROUND(18*SUM(menu_items.Price*order_detail_table.no_of_items)/100,2),2) as Total FROM order_detail_table INNER JOIN menu_items ON order_detail_table.menu_id=menu_items.id WHERE order_detail_table.order_no='$order_no'";
        $result = mysqli_query($conn,$query);
        $row = mysqli_fetch_assoc($result);

        $SubTotal = $row['Subtotal'];
        $Tax = $row['Tax'];
        $Total = $row['Total'];

        $date =  date("Y-m-d");
        
        date_default_timezone_set('Asia/Calcutta');
        $time = date('H:i:s', time());
        $status = "Order Placed";

        $query3 = "SELECT Current_order_no from user_detail where user_detail.Username = '$uname'";
        $result3 = mysqli_query($conn,$query3);
        $row3 = mysqli_fetch_assoc($result3);

        $query4 = "SELECT COUNT(username) AS total_items FROM `order_detail_table` WHERE order_no = '$order_no'";
        $result4 = mysqli_query($conn,$query4);
        $row4 = mysqli_fetch_assoc($result4);
        
        $current_order_no = (int)$row3['Current_order_no'] + 1;
        $total_items = (int)$row4['total_items'];

        $query = "INSERT into order_table(order_no,Username,Subtotal,Tax,Total,Payment_Method,order_date,order_time,total_items,order_status) values('$order_no','$uname','$SubTotal','$Tax','$Total','$payment_method','$date','$time','$total_items','$status')";
        $query2 = "UPDATE `user_detail` SET `Current_order_no` = '$current_order_no' WHERE `user_detail`.`Username` = '$uname'";
        if ($conn->query($query) === TRUE && $conn->query($query2)) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
>>>>>>> 7ace156 (Final Commit)
?>