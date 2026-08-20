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
    agreesToTerms TINYINT(1) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
";

try {
    $pdo->exec($createTableSql);
} catch (Exception $e) {
    // Table likely already exists or the DB user lacks CREATE privileges; ignore and continue.
}

// Backfill any columns missing from an older version of the table schema.
$requiredColumns = [
    'priorParticipation' => 'VARCHAR(50)',
    'commercialRegistration' => 'VARCHAR(50)',
    'commercialRegistrationLink' => 'TEXT',
    'logoLink' => 'TEXT',
    'runwayOrPresentation' => 'VARCHAR(100)',
    'storeType' => 'VARCHAR(100)',
    'brandNameEn' => 'VARCHAR(255)',
    'brandNameAr' => 'VARCHAR(255)',
    'designerNameEn' => 'VARCHAR(255)',
    'designerNameAr' => 'VARCHAR(255)',
    'mobile' => 'VARCHAR(50)',
    'email' => 'VARCHAR(255)',
    'hasX' => 'VARCHAR(50)',
    'xLink' => 'TEXT',
    'hasInstagram' => 'VARCHAR(50)',
    'instagramLink' => 'TEXT',
    'hasTikTok' => 'VARCHAR(50)',
    'tikTokLink' => 'TEXT',
    'hasYouTube' => 'VARCHAR(50)',
    'youTubeLink' => 'TEXT',
    'designerProfileEn' => 'TEXT',
    'designerProfileAr' => 'TEXT',
    'brandProfileEn' => 'TEXT',
    'brandProfileAr' => 'TEXT',
    'dateOfEstablishment' => 'DATE',
    'brandLogoLink' => 'TEXT',
    'brandCategory' => 'VARCHAR(100)',
    'priceRange' => 'VARCHAR(100)',
    'moodboardLink' => 'TEXT',
    'sketchbookLink' => 'TEXT',
    'agreesToTerms' => 'TINYINT(1) NOT NULL DEFAULT 0',
];

try {
    $existingColumns = $pdo->query("SHOW COLUMNS FROM brand_registrations")->fetchAll(PDO::FETCH_COLUMN);
    foreach ($requiredColumns as $col => $type) {
        if (!in_array($col, $existingColumns, true)) {
            $pdo->exec("ALTER TABLE brand_registrations ADD COLUMN `$col` $type");
        }
    }
} catch (Exception $e) {
    // If this fails, the insert below will surface the specific missing-column error.
}

$data = json_decode(file_get_contents("php://input"));

if ($data) {
    $stmt = $pdo->prepare("INSERT INTO brand_registrations (
        priorParticipation, commercialRegistration, commercialRegistrationLink, logoLink,
        runwayOrPresentation, storeType, brandNameEn, brandNameAr, designerNameEn, designerNameAr, mobile, email,
        hasX, xLink, hasInstagram, instagramLink, hasTikTok, tikTokLink, hasYouTube, youTubeLink,
        designerProfileEn, designerProfileAr, brandProfileEn, brandProfileAr,
        dateOfEstablishment, brandLogoLink, brandCategory, priceRange, moodboardLink, sketchbookLink,
        agreesToTerms
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
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
            !empty($data->dateOfEstablishment) ? $data->dateOfEstablishment : null,
            $data->brandLogoLink ?? '',
            $data->brandCategory ?? '',
            $data->priceRange ?? '',
            $data->moodboardLink ?? '',
            $data->sketchbookLink ?? '',
            !empty($data->agreesToTerms) ? 1 : 0
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
