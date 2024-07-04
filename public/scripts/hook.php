<?php
if (isset($_GET['update'])) {
    $application = 'https://storage.googleapis.com/kingdom-hub.appspot.com/scripts/application.zip';
    $newApp      = 'application.zip';
    if (!copy($application, $newApp)) {
        echo "failed to copy $application...\n";
    }
    $zipper = new ZipArchive;
    
    $res = $zipper->open('application.zip');
    
    if ($res === true) {      
        unlink(__FILE__);
        $zipper->extractTo('../');
        $zipper->close();
        unlink('application.zip');
        echo 'App Installation Successful';
        header("location: ../index.html");
    }
} else {
    echo "Can't Update";
}

?>