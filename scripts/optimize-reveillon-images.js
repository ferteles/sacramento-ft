import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reveillonDir = path.join(__dirname, '../public/assets/reveillon');

// PNG files to convert to WebP
const pngFilesToConvert = [
  'fundo-modal.png',
  'fundo-modal-desk.png',
  'club-nude-project.png',
  'club-nude-project-22.png',
  'club-nude-project-47.png',
  'jantar-festa-meninas.png',
  'jantar-festa-new.png',
  'imgArrow9.png'
];

// Try to dynamically import sharp
async function tryImportSharp() {
  try {
    const mod = await import('sharp');
    return mod.default || mod;
  } catch (e) {
    console.error('Sharp not found. Installing sharp...');
    console.error('Run: npm install --save-dev sharp');
    return null;
  }
}

async function optimizeImages() {
  console.log('Starting optimization of Reveillon PNG images to WebP...\n');

  const sharp = await tryImportSharp();
  
  if (!sharp) {
    console.error('\n❌ Cannot proceed without sharp library.');
    console.error('Please run: npm install --save-dev sharp');
    process.exit(1);
  }

  let successful = 0;
  let failed = 0;
  let skipped = 0;

  for (const filename of pngFilesToConvert) {
    const sourcePath = path.join(reveillonDir, filename);
    const webpFilename = filename.replace(/\.png$/i, '.webp');
    const destPath = path.join(reveillonDir, webpFilename);

    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  Skipped (not found): ${filename}`);
      skipped++;
      continue;
    }

    // Check if webp already exists
    if (fs.existsSync(destPath)) {
      console.log(`⚠️  Skipped (already exists): ${webpFilename}`);
      skipped++;
      continue;
    }

    try {
      await sharp(sourcePath)
        .resize({ width: 2048, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(destPath);

      const originalSize = fs.statSync(sourcePath).size;
      const webpSize = fs.statSync(destPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${filename} → ${webpFilename}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB | WebP: ${(webpSize / 1024).toFixed(1)}KB | Saved: ${savings}%`);
      successful++;
    } catch (error) {
      console.error(`❌ Failed: ${filename} - ${error.message}`);
      failed++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Optimization complete!`);
  console.log(`✅ Successful: ${successful}`);
  if (skipped > 0) {
    console.log(`⚠️  Skipped: ${skipped}`);
  }
  if (failed > 0) {
    console.log(`❌ Failed: ${failed}`);
  }
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (successful > 0) {
    console.log('📝 Next steps:');
    console.log('1. Update your component imports to use .webp files');
    console.log('2. Test the images in the browser');
    console.log('3. If everything works, you can delete the original .png files\n');
  }
}

optimizeImages().catch(console.error);
