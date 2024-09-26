<?php
include('connection.php');


header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$whoWinner = $data['whoWinner'];
$onePlayerPoints = $data['onePlayerPoints'];
$twoPlayerPoints = $data['twoPlayerPoints'];

if ($whoWinner == 1 || $whoWinner == 2) {
    echo json_encode(['status' => 'success', 'message' => "Dane zostały przetworzone. {'$whoWinner $onePlayerPoints $twoPlayerPoints'}"]);
} else {
    echo json_encode(['status' => 'success', 'message' => "Dane zostały przetworzone. {' $onePlayerPoints $twoPlayerPoints'}"]);
}
