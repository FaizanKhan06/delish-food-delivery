<<<<<<< HEAD
<?php
    $PreviousUname = $_REQUEST['puname'];
    $FirstName = $_REQUEST['FirstName'];
    $LastName = $_REQUEST['LastName'];
    $Username = $_REQUEST['Username'];
    $PhoneNumber = $_REQUEST['PhoneNumber'];
    $Profile_img_path = $_REQUEST['Profile_img_path'];
    $Password = $_REQUEST['Password'];
    $Street = $_REQUEST['Street'];
    $City = $_REQUEST['City'];
    $State = $_REQUEST['State'];
    $HouseNo = $_REQUEST['HouseNo'];
    $ZipCode = $_REQUEST['ZipCode'];
    $doWhat = $_REQUEST['DoWhat'];

    $servername = 'localhost';
    $username = 'id20086122_faizankhan';
    $password = 'Cs205554@hkbk';
    $database = 'id20086122_delish';

    //echo $doWhat
    //1=Update Validity // but not being used
    //2=Update new user deatils in the user table
    //3=update profile picture
    if($doWhat=="1"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "Select * from user_detail where Username='$Username'";
            $result = mysqli_query($conn,$query);

            if(mysqli_num_rows($result)===1){
                echo"Update Invalid";
            }
            else{
                echo"Update Valid";
            }
        }
    }
    if($doWhat=="2"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{

            $query3 = "Select * from user_detail where Username = '$PreviousUname'";
            $result = mysqli_query($conn,$query3);
            
            $row = mysqli_fetch_assoc($result);
            $current_order_no1 = $PreviousUname."_".$row['Current_order_no'];
            $current_order_no2 = $Username."_".$row['Current_order_no'];

            $query = "UPDATE `user_detail` SET `FirstName` = '$FirstName', `LastName` = '$LastName', `Username` = '$Username', `PhoneNumber` = '$PhoneNumber', `Password` = '$Password', `Street` = '$Street', `City` = '$City', `State` = '$State', `HouseNo` = '$HouseNo', `ZipCode` = '$ZipCode' WHERE `user_detail`.`Username` = '$PreviousUname'";
            $query2 = "UPDATE `order_detail_table` SET `order_no` = '$current_order_no2'WHERE `order_detail_table`.`order_no` = '$current_order_no1'";
            $query3 = "UPDATE `order_table` SET `order_no` = '$current_order_no2'WHERE `order_table`.`order_no` = '$current_order_no1'";
            
            if ($conn->query($query) === TRUE && $conn->query($query2) && $conn->query($query3)) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
        }
    }
    if($doWhat=="3"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "UPDATE `user_detail` SET `Profile_img_path` = '$Profile_img_path' WHERE `user_detail`.`Username` = '$PreviousUname'";
            
            if ($conn->query($query) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
        }
    }
=======
<?php
    $PreviousUname = $_REQUEST['puname'];
    $FirstName = $_REQUEST['FirstName'];
    $LastName = $_REQUEST['LastName'];
    $Username = $_REQUEST['Username'];
    $PhoneNumber = $_REQUEST['PhoneNumber'];
    $Profile_img_path = $_REQUEST['Profile_img_path'];
    $Password = $_REQUEST['Password'];
    $Street = $_REQUEST['Street'];
    $City = $_REQUEST['City'];
    $State = $_REQUEST['State'];
    $HouseNo = $_REQUEST['HouseNo'];
    $ZipCode = $_REQUEST['ZipCode'];
    $doWhat = $_REQUEST['DoWhat'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'delish-food-delivery';

    //echo $doWhat
    //1=Update Validity // but not being used
    //2=Update new user deatils in the user table
    //3=update profile picture
    if($doWhat=="1"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "Select * from user_detail where Username='$Username'";
            $result = mysqli_query($conn,$query);

            if(mysqli_num_rows($result)===1){
                echo"Update Invalid";
            }
            else{
                echo"Update Valid";
            }
        }
    }
    if($doWhat=="2"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{

            $query3 = "Select * from user_detail where Username = '$PreviousUname'";
            $result = mysqli_query($conn,$query3);
            
            $row = mysqli_fetch_assoc($result);
            $current_order_no1 = $PreviousUname."_".$row['Current_order_no'];
            $current_order_no2 = $Username."_".$row['Current_order_no'];

            $query = "UPDATE `user_detail` SET `FirstName` = '$FirstName', `LastName` = '$LastName', `Username` = '$Username', `PhoneNumber` = '$PhoneNumber', `Password` = '$Password', `Street` = '$Street', `City` = '$City', `State` = '$State', `HouseNo` = '$HouseNo', `ZipCode` = '$ZipCode' WHERE `user_detail`.`Username` = '$PreviousUname'";
            $query2 = "UPDATE `order_detail_table` SET `order_no` = '$current_order_no2'WHERE `order_detail_table`.`order_no` = '$current_order_no1'";
            $query3 = "UPDATE `order_table` SET `order_no` = '$current_order_no2'WHERE `order_table`.`order_no` = '$current_order_no1'";
            
            if ($conn->query($query) === TRUE && $conn->query($query2) && $conn->query($query3)) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
        }
    }
    if($doWhat=="3"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "UPDATE `user_detail` SET `Profile_img_path` = '$Profile_img_path' WHERE `user_detail`.`Username` = '$PreviousUname'";
            
            if ($conn->query($query) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
        }
    }
>>>>>>> 7ace156 (Final Commit)
?>