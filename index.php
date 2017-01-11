<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>画像</title>
  <link rel="stylesheet" href="/css/master.css">
</head>
<body>
  <h1>Google vision</h1>
  <table>
    <tr>
      <th>Image</th>
      <th>labels</th>
    </tr>

    <?php
    $file = fopen("list.txt", "r");
    if($file){
      while ($line = fgets($file)) {
        $arr = explode("\t", $line);
        $row = "<tr><td><img src=\"{$arr[0]}\"></td><td>{$arr[1]}</td></tr>";
        echo $row;
      }
    }
    fclose($file);
    ?>

  </table>
</body>
</html>
