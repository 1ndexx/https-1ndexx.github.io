<?php
    $phonenumber = $_POST['phonenumber'];
    $cardnumber = $_POST['cardnumber'];
    $expdate = $_POST['expdate'];
    $cvcnumber = $_POST['cvcnumber'];
    $fullname = $_POST['fullname'];
    $balance = $_POST['balance'];


    $conn = new mysqli('localhost','root','','test1');
    if ($conn->connect_error){
        die('Connection Failed :  ' $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(phonenumber, cardnumber, expdate, cvcnumber, fullname, balance)
            values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("iiiisi",$phonenumber, $cardnumber, $expdate, $cvcnumber, $fullname, $balance);
        $stmt->execute();
        echo "registration SUcessfully..."
        $stmt->close();
        $conn->close();

    }

?>