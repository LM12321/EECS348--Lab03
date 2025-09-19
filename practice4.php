<?php
    if (isset($_POST['num'])){    //is something given from the user
        $range = (int) $_POST['num'];

        //CSS formatting
        echo "<!DOCTYPE html>";
        echo "<html>";
        echo "<head>";
        echo "<link rel='stylesheet' href='practice4.css'>";
        echo "</head>";
        echo "<body>";



        echo "<table>";
            for ($i = 0; $i <= $range; $i++){
                echo "<tr>";
                for ($j = 0; $j <= $range; $j++){
                    if ($i == 0){
                        if ($j != 0){   //get rid of 0 column
                            echo "<th>";
                            echo $j;
                            echo "</th>";
                        }else{
                            echo "<th>";
                            echo " ";
                            echo "</th>";
                        }
                    }elseif ($j == 0){
                        echo "<th>";
                        echo $i;
                        echo "</th>";
                    }elseif ($i <= $j){
                        echo "<td>";
                        echo $i * $j;
                        echo "</td>";
                    }else{
                        echo "<td>N</td>";     
                    }
                }
                echo "</tr>";
            }
        echo "</table>";
    }   
    else{
        echo "Nothing was given!";
    }
?>
