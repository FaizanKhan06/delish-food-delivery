<<<<<<< HEAD
<?php
    $name = $_REQUEST['name'];
    $id = $_REQUEST['id'];

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
            $query = "SELECT * FROM `menu_items` WHERE upper(Name) like '%$name%'";
            $result = mysqli_query($conn,$query);

            if(mysqli_num_rows($result)>=1){
                while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                    echo ",",$row['id'];
                }
            }
            else{
                echo"Not Found";
            }
        }
        else{
            $query = "SELECT * FROM `menu_items` WHERE id='$id'";
            $result = mysqli_query($conn,$query);
    
            $row = mysqli_fetch_assoc($result);
            echo "{$row['id']},{$row['Name']},{$row['Description']},{$row['img_src']},{$row['Price']},{$row['Type']},{$row['detail_img_src']}";
        }
    }
=======
<?php
    $name = $_REQUEST['name'];
    $id = $_REQUEST['id'];

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
            $query = "SELECT * FROM `menu_items` WHERE upper(Name) like '%$name%'";
            $result = mysqli_query($conn,$query);

            if(mysqli_num_rows($result)>=1){
                while ($row = $result->fetch_array(MYSQLI_ASSOC)){
                    echo ",",$row['id'];
                }
            }
            else{
                echo"Not Found";
            }
        }
        else{
            $query = "SELECT * FROM `menu_items` WHERE id='$id'";
            $result = mysqli_query($conn,$query);
    
            $row = mysqli_fetch_assoc($result);
            echo "{$row['id']},{$row['Name']},{$row['Description']},{$row['img_src']},{$row['Price']},{$row['Type']},{$row['detail_img_src']}";
        }
    }
>>>>>>> 7ace156 (Final Commit)
?>