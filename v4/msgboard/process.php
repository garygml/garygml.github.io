<?php include 'database.php';?>
<?php

// create a variable
$name=$_POST['name'];
$msg=$_POST['msg'];

//Execute the query
$timezone  = -5; 
mysqli_query($connect, "INSERT INTO mytable(timestamp,id,name,msg)
				VALUES(CURRENT_TIMESTAMP,NULL,'$name','$msg')");

	if(mysqli_affected_rows($connect) > 0){
	echo "<p>Success!</p>";
	echo "<a href=\"index.php\">Go Back</a>";
} else {
	echo "failed, msg NOT Added<br />";
	echo mysqli_error ($connect);
}
