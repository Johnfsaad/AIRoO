

<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];

if (!empty($firstName) || !empty($lastName) || !empty($email) || !empty($password) || !empty($cpassword)) {
 $host = "http://www.my-domain.com/phpmyadmin/";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "test";
    //create connection
    $conn = new mysqli($host, $dbfirstname, $dblastName, $dbemail, dbpassword);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT email From register Where email = ? Limit 1";
     $INSERT = "INSERT Into register (firstName, lastName, email, password, cpassword) values(?, ?, ?, ?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssssii", $firstName, $lastName, $email, $password, $cpassword);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}


