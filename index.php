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
        <title>Cloaked Dangerzone</title>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js">
        </script>
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Display Text</h1>
        <form action="session-test/session-test.php" method="post">
            <input type="text" name="zipcode">
            <input type="submit" value="Fun Button" >
            <a href="session-test/session-test.php">Session Test</a>
            <a href="XSLT/XPATH.html">XPath Test</a>
            <?php echo "The session count is " . $_SESSION['count']; ?>
        </form
    </body>
</html>
