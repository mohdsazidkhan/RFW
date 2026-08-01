<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require 'db_connect.php';

try {
    $stmt = $pdo->query("SELECT * FROM brand_registrations ORDER BY created_at DESC");
    $registrations = $stmt->fetchAll();
    echo json_encode(['status' => 'success', 'data' => $registrations]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch data.', 'error' => $e->getMessage()]);
}
?>
