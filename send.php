<?php
   // получить данные из формы 
    if($_POST['city'] !== "" && $_POST['street'] !== ""  && $_POST['house'] !== "" ){
        echo "ОК. Data is sended";
    }
    else{
        echo "что-то пошло не так...";
    }
?>