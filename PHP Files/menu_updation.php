<<<<<<< HEAD
<?php
    $type = $_REQUEST['type'];
    $id = $_REQUEST['id'];
    //echo $type;
    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';
    
    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        if($id==null){
            if($type=="All"){
                $query = "SELECT * FROM `menu_items` ORDER BY `menu_items`.`Type` DESC";
                $result = mysqli_query($conn,$query);
                
                while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                    echo ",",$row['id']; 
                }
            }
            else{
                $query = "SELECT * FROM `menu_items` where Type='$type'";
                $result = mysqli_query($conn,$query);
        
                while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                    echo ",",$row['id'];
                }
            }
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
=======
<?php
    $type = $_REQUEST['type'];
    $id = $_REQUEST['id'];
    //echo $type;
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';
    
    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        if($id==null){
            if($type=="All"){
                $query = "SELECT * FROM `menu_items` ORDER BY `menu_items`.`Type` DESC";
                $result = mysqli_query($conn,$query);
                
                while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                    echo ",",$row['id']; 
                }
            }
            else{
                $query = "SELECT * FROM `menu_items` where Type='$type'";
                $result = mysqli_query($conn,$query);
        
                while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                    echo ",",$row['id'];
                }
            }
        }
        else{
            $query = "SELECT * FROM `menu_items` where id='$id'";
            $result = mysqli_query($conn,$query);
            $row = mysqli_fetch_assoc($result);
    
            echo "{$row['id']},{$row['Name']},{$row['Description']},{$row['img_src']},{$row['Price']},{$row['Type']},{$row['detail_img_src']}";
        }
    }
>>>>>>> 7ace156 (Final Commit)
?>