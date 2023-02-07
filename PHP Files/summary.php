<<<<<<< HEAD
<?php
    $order_no = $_REQUEST['order_no'];
    $menu_id = $_REQUEST['menu_id'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "SELECT * FROM order_detail_table INNER JOIN menu_items ON order_detail_table.menu_id=menu_items.id WHERE order_detail_table.menu_id='$menu_id'";
        $result = mysqli_query($conn,$query);

        $row = mysqli_fetch_assoc($result);
        
        $Total1 = (string)$row['Price'];
        $Total2=explode(".",$Total1);
        if(strlen($Total2[1])==1){
            $Total1=$Total2[0].".".$Total2[1]."0";   
        }
        
        echo "{$row['Name']},{$row['no_of_items']},{$Total1}";
    }
=======
<?php
    $order_no = $_REQUEST['order_no'];
    $menu_id = $_REQUEST['menu_id'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "SELECT * FROM order_detail_table INNER JOIN menu_items ON order_detail_table.menu_id=menu_items.id WHERE order_detail_table.menu_id='$menu_id' and order_no = '$order_no'";
        $result = mysqli_query($conn,$query);

        $row = mysqli_fetch_assoc($result);
        
        echo "{$row['Name']},{$row['no_of_items']},{$row['Price']}";
    }
>>>>>>> 7ace156 (Final Commit)
?>