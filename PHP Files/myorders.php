<<<<<<< HEAD
<?php
    $uname = $_REQUEST['uname'];
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
            $query = "Select * from order_table WHERE Username='$uname'";
            $result = mysqli_query($conn,$query);
            
            while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                echo ",",$row['order_no'];
            }
        }
        else{
            $query = "SELECT order_no,DAY(order_date) AS Day,MONTH(order_date) AS Month,HOUR(order_time) AS Hour,MINUTE(order_time) AS Minute,total_items,Total,order_status FROM order_table WHERE order_no = '$doWhat' ORDER BY order_date,order_time;";
            $result = mysqli_query($conn,$query);
            $row = mysqli_fetch_assoc($result);
            
            $minute1 = (string)$row['Minute'];
            if(strlen($minute1)==1){
                $minute1="0".$minute1;
            }
            
            $Total1 = (string)$row['Total'];
            $Total2=explode(".",$Total1);
            if(strlen($Total2[1])==1){
                $Total1=$Total2[0].".".$Total2[1]."0";   
            }
            
            $hour1 = (string)$row['Hour'];
            if(strlen($hour1)==1){
                $hour1="0".$hour1;
            }
            
            
            echo "{$row['order_no']},{$row['Day']},{$row['Month']},{$hour1},{$minute1},{$row['total_items']},{$Total1},{$row['order_status']},";
        }
    }
=======
<?php
    $uname = $_REQUEST['uname'];
    $doWhat = $_REQUEST['doWhat'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        if($doWhat=="1"){
            $query = "Select * from order_table WHERE Username='$uname'";
            $result = mysqli_query($conn,$query);
            
            while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                echo ",",$row['order_no'];
            }
        }
        else{
            $query = "SELECT order_no,DAY(order_date) AS Day,MONTH(order_date) AS Month,HOUR(order_time) AS Hour,MINUTE(order_time) AS Minute,total_items,Total,order_status FROM order_table WHERE order_no = '$doWhat' ORDER BY order_date,order_time;";
            $result = mysqli_query($conn,$query);
            $row = mysqli_fetch_assoc($result);
            
            $minute1 = (string)$row['Minute'];
            if(strlen($minute1)==1){
                $minute1="0".$minute1;
            }
            
            $hour1 = (string)$row['Hour'];
            if(strlen($hour1)==1){
                $hour1="0".$hour1;
            }
            
            
            echo "{$row['order_no']},{$row['Day']},{$row['Month']},{$hour1},{$minute1},{$row['total_items']},{$row['Total']},{$row['order_status']},";
        }
    }
>>>>>>> 7ace156 (Final Commit)
?>