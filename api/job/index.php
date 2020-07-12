<?php
 header("Access-Control-Allow-Origin: *");

$host = "localhost"; 
$user = "root"; 
$password = "Admin@123"; 
$dbname = "react_db"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':
      $c = "get";
      $id = $_GET['id'];
      $sql = "select * from job".($id?" where id=$id":''); 
      // $sql .="select * from job".($id?" where id=$id":'');
      break;
    case 'POST':
      $c="post";
      $application = $_POST["application"];
      $sql = "insert into application (application) values ('$application')"; 
      break;
}

// run SQL statement
if($c=="get"){
$result = mysqli_query($con,$sql);
}
else {$result = mysqli_query($con,$sql);}
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();