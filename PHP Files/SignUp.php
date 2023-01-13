<?php
    $FirstName = $_REQUEST['FirstName'];
    $LastName = $_REQUEST['LastName'];
    $Username = $_REQUEST['Username'];
    $PhoneNumber = $_REQUEST['PhoneNumber'];
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
    //1=SignUp Validity
    //2=Input user deatils in the user table
    //3=login validity
    if($doWhat=="1"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query = "Select * from user_detail where Username='$Username'";
            $result = mysqli_query($conn,$query);

            if(mysqli_num_rows($result)===1){
                echo"SignUp Invalid";
            }
            else{
                echo"SignUp Valid";
            }
        }
    }
    if($doWhat=="2"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $stmt = $conn->prepare("insert into user_detail(FirstName,LastName,Username,PhoneNumber,Password,Street,City,State,HouseNo,ZipCode) values(?,?,?,?,?,?,?,?,?,?)");
            $stmt->bind_param("sssisssssi",$FirstName,$LastName,$Username,$PhoneNumber,$Password,$Street,$City,$State,$HouseNo,$ZipCode);
            $stmt->execute();
            echo "success";
            $stmt->close();
            $conn->close();
        }
    }
    if($doWhat=="3"){
        $conn = new mysqli($servername,$username,$password,$database);
        if($conn->connect_error){
            echo"Connection Failed";
        }
        else{
            $query1 = "Select * from user_detail where Username='$Username'";
            $query2 = "Select * from user_detail where Username='$Username'  and Password='$Password'";
            $result1 = mysqli_query($conn,$query1);
            $result2 = mysqli_query($conn,$query2);

            if(mysqli_num_rows($result1)===1){
                if(mysqli_num_rows($result2)===1){
                    echo"Login Valid";
                }
                else{
                    echo"Login Invalid";
                }
            }
            else{
                echo"username does not exist";
            }
        }
    }
?>