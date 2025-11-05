const fs = require("fs");
const path = require("path");

// 🔧 CHANGE THIS PATH
const filePath = path.join(__dirname, "src/utils/data/calendar.js");

// 1️⃣ Read file
let content = fs.readFileSync(filePath, "utf8");

// 2️⃣ Recursive function to add Arabic fields to all designer objects
function addArabicFields(text) {
  // Matches each object inside arrays (even nested)
  return text.replace(
    /{([^{}]*?\bid\s*:\s*["'][^"']+["'][^{}]*)}/g,
    (match, inner) => {
      if (inner.includes("name_ar") || inner.includes("desc_ar") || inner.includes("content_ar")) {
        return `{${inner}}`; // already added
      }

      // Remove trailing comma
      inner = inner.trim().replace(/,\s*$/, "");

      return `{
${inner},
  name_ar: "",
  desc_ar: "",
  content_ar: ""
}`;
    }
  );
}

// 3️⃣ Apply function to content
let updated = addArabicFields(content);

// 4️⃣ Write file back
fs.writeFileSync(filePath, updated, "utf8");
console.log("✅ Arabic fields added successfully to all designer objects, including nested ones!");
