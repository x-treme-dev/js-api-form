<?php
   // получить данные из формы 
    if($_POST['district'] !== "" || $_POST['city'] !== "" || $_POST['street'] !== ""  || $_POST['building'] !== "" ){
        echo "Ответ на post-запрос из скрипта send.php: " . '<br/>';
		echo 'data.district=' . $_POST['district'] .', data.city=' . $_POST['city'] . ', data.street=' .  $_POST['street'] . ', data.building=',  $_POST['building'] . '<br>';
    }
    else{
        echo "что-то пошло не так...";
    }
	
	// проверка работы hcaptcha
	
?>