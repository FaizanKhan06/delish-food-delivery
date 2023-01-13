<?php
    $get = $_REQUEST['get'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';
    
    if($get == "1"){
        $order_no = $_REQUEST['order_no'];
    
    
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "SELECT * FROM `order_detail_table` where order_no='$order_no'";
            $result = mysqli_query($conn,$query);
    
            while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                echo $row['menu_id'],",",$row['no_of_items'],",";
            }
        }
    }
    else{
        $id = $_REQUEST['id'];
    
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "SELECT * FROM `menu_items` where id='$id'";
            $result = mysqli_query($conn,$query);
    
            $row = mysqli_fetch_assoc($result);
            
            $Total1 = (string)$row['Price'];
            $Total2=explode(".",$Total1);
            if(strlen($Total2[1])==1){
                $Total1=$Total2[0].".".$Total2[1]."0";   
            }
            
            echo "{$row['id']},{$row['Name']},{$row['Description']},{$row['img_src']},{$Total1},{$row['Type']},{$row['detail_img_src']}";
        }
    }
?>