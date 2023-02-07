<<<<<<< HEAD
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
        $query = "Select * from user_detail where Username = '$uname'";
        $result = mysqli_query($conn,$query);
        
        $row = mysqli_fetch_assoc($result);
        echo "{$row['FirstName']},{$row['LastName']},{$row['Username']},{$row['PhoneNumber']},{$row['Password']},{$row['Profile_img_path']},{$row['Street']},{$row['City']},{$row['State']},{$row['HouseNo']},{$row['ZipCode']}";
    }
=======
<?php
    $uname = $_REQUEST['uname'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';

    $conn = new mysqli($servername,$username,$password,$database);
    if($conn->connect_error){
        echo"Connection Failed";
    }
    else{
        $query = "Select * from user_detail where Username = '$uname'";
        $result = mysqli_query($conn,$query);
        
        $row = mysqli_fetch_assoc($result);
        echo "{$row['FirstName']},{$row['LastName']},{$row['Username']},{$row['PhoneNumber']},{$row['Password']},{$row['Profile_img_path']},{$row['Street']},{$row['City']},{$row['State']},{$row['HouseNo']},{$row['ZipCode']}";
    }
>>>>>>> 7ace156 (Final Commit)
?>