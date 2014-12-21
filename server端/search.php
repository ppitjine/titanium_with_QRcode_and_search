<?php

// Set the database access information
$db_user = 'u125539847_expre';
$db_password = 'mghkl1234';
$db_host = 'mysql.hostinger.co.uk';
$db_name = 'u125539847_expre';
		
// Connect to the database
$dbc = @mysqli_connect ($db_host, $db_user, $db_password, $db_name) OR die ('Could not connect to MySQL: ' . mysqli_connect_error());

// Perform basic error checking
// if(!$GET['thing'])
// {
// 	// Error status
// 	$status = 'failure';
	
// } else {


	// Get things from the database
	$query = "SELECT item_name, item_description, item_from,status,item_to,arrive_time FROM express WHERE id='{$_POST['thing']}'";
	$result = mysqli_query($dbc, $query);


	while($row = mysqli_fetch_assoc($result))
	{
		$things[] = array(
			'item_name' => $row['item_name'],
			'item_description' => $row['item_description'],
			'status' => $row['status'],
			'item_to' => $row['item_to'],
			'arrive_time' => $row['arrive_time'],
		);
	}
	
// }

// Create json array
$json = array(
	'things' => $things
);

// Output to browser
$output = json_encode($json);
echo $output;

?>