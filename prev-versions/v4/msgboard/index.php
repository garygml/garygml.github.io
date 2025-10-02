<?php
//Connect to mysql database
 $db = mysql_connect("fdb6.awardspace.net","1469571_gary","gary815911"); 
 if (!$db) {
 die("Database connection failed miserably: " . mysql_error());
 }
 $db_select = mysql_select_db("1469571_gary",$db);
 if (!$db_select) {
 die("Database selection also failed miserably: " . mysql_error());
 }
?>
<!DOCTYPE html>
<html>
<head>
<title>Message Board</title>
<link rel="shortcut icon" href="../icon.png" type="image/x-icon" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="../css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="../js/parallax.min.js"></script>
<script>

</script>
</head>
<body>
<div class="slide" data-parallax="scroll" data-bleed="10" data-image-src="../img/slide8.jpg" data-natural-width="1836" data-natural-height="945" style="padding:50px 50px 50px 50px">
  <div class="quotes_container"> <h2>Leave a message to me!</h2>
    <form id="usrform" method="post" action="/msgboard/process.php">
      <table width="500px">
        <tr>
          <td><p>Name</p></td>
          <td><input type="text" name="name" maxlength="50" style="width:80%"/></td>
        </tr>
        <tr>
          <td><p>Message</p></td>
          <td><textarea  name="msg" maxlength="65536" style="resize:none;width:80%;height:300px" form="usrform"></textarea></td>
        </tr>
      </table>
      <input type="submit" value="Submit">
    </form>
  </div>
</div>
<div class="content">
  <?php
//selects data from database
$result = mysql_query("SELECT * FROM mytable", $db);
 if (!$result) {
 die("Database query failed: " . mysql_error());
 }
//start displaying messages
 while ($row = mysql_fetch_array($result)) {
 	echo "<div>";
	echo "<p>";
	$datetime =  new DateTime($row[0]); //date
	$datetime->setTimezone(new DateTimeZone('America/New_York'));
	echo $datetime->format('h:i A M d, Y (T)');
 	echo ", ";
 	echo $row[2].""; //name
 	echo " wrote: ";
 	echo "</p>";
	echo "</div>";
	
	echo "<div class=\"quotes_container\">";
 	echo "<p>";
 	echo $row[3].""; //msg
 	echo "</p>";
	echo "</div>";
 }
?>
</div>
</body>
</html>
<?php
//close the connection
 mysql_close($db);
?>