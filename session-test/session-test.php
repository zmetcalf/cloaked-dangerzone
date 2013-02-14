<?php 
session_start();
if(!isset($_SESSION['count'])) {
    $_SESSION['count'] = 0;
    $counter = 0;
    echo 'reset';
} else {
    $count++;
    $_SESSION['count']++;
} ?>

<!DOCTYPE html>
<html>
    <head>
        <title> </title>
    </head>
    <body>
        <h1>Hello World</h1>
        <?php echo $_POST["zipcode"]?><h1> Zip Code </h2>
        <?php echo "Hello Spot"; ?>
        <?php echo "The session count is " . $_SESSION['count']; ?>
        <a href='/index.php'>Go back to index.</a>
        
    </body>
</html>
