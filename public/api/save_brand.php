<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require 'db_connect.php';

// Create table if not exists
$createTableSql = "
CREATE TABLE IF NOT EXISTS brand_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    priorParticipation VARCHAR(50),
    commercialRegistration VARCHAR(50),
    commercialRegistrationLink TEXT,
    logoLink TEXT,
    runwayOrPresentation VARCHAR(100),
    storeType VARCHAR(100),
    brandNameEn VARCHAR(255),
    brandNameAr VARCHAR(255),
    designerNameEn VARCHAR(255),
    designerNameAr VARCHAR(255),
    mobile VARCHAR(50),
    email VARCHAR(255),
    hasX VARCHAR(50),
    xLink TEXT,
    hasInstagram VARCHAR(50),
    instagramLink TEXT,
    hasTikTok VARCHAR(50),
    tikTokLink TEXT,
    hasYouTube VARCHAR(50),
    youTubeLink TEXT,
    designerProfileEn TEXT,
    designerProfileAr TEXT,
    brandProfileEn TEXT,
    brandProfileAr TEXT,
    dateOfEstablishment DATE,
    brandLogoLink TEXT,
    brandCategory VARCHAR(100),
    priceRange VARCHAR(100),
    moodboardLink TEXT,
    sketchbookLink TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
";

$pdo->exec($createTableSql);

$data = json_decode(file_get_contents("php://input"));

if ($data) {
    $stmt = $pdo->prepare("INSERT INTO brand_registrations (
        priorParticipation, commercialRegistration, commercialRegistrationLink, logoLink,
        runwayOrPresentation, storeType, brandNameEn, brandNameAr, designerNameEn, designerNameAr, mobile, email,
        hasX, xLink, hasInstagram, instagramLink, hasTikTok, tikTokLink, hasYouTube, youTubeLink,
        designerProfileEn, designerProfileAr, brandProfileEn, brandProfileAr,
        dateOfEstablishment, brandLogoLink, brandCategory, priceRange, moodboardLink, sketchbookLink
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )");

    try {
        $stmt->execute([
            $data->priorParticipation ?? '',
            $data->commercialRegistration ?? '',
            $data->commercialRegistrationLink ?? '',
            $data->logoLink ?? '',
            $data->runwayOrPresentation ?? '',
            $data->storeType ?? '',
            $data->brandNameEn ?? '',
            $data->brandNameAr ?? '',
            $data->designerNameEn ?? '',
            $data->designerNameAr ?? '',
            $data->mobile ?? '',
            $data->email ?? '',
            $data->hasX ?? '',
            $data->xLink ?? '',
            $data->hasInstagram ?? '',
            $data->instagramLink ?? '',
            $data->hasTikTok ?? '',
            $data->tikTokLink ?? '',
            $data->hasYouTube ?? '',
            $data->youTubeLink ?? '',
            $data->designerProfileEn ?? '',
            $data->designerProfileAr ?? '',
            $data->brandProfileEn ?? '',
            $data->brandProfileAr ?? '',
            $data->dateOfEstablishment ?? null,
            $data->brandLogoLink ?? '',
            $data->brandCategory ?? '',
            $data->priceRange ?? '',
            $data->moodboardLink ?? '',
            $data->sketchbookLink ?? ''
        ]);
        echo json_encode(['status' => 'success', 'message' => 'Registration saved successfully.']);
    } catch(Exception $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to save data.', 'error' => $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'No data received.']);
}
?>
