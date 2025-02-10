<?php
// process_form.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    $response = array("status" => "success", "message" => "Данные успешно обработаны");
    header('Content-Type: application/json'); 
    echo json_encode($response);
} else {
    $response = array("status" => "error", "message" => "Недопустимый метод запроса");
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>