import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '../public/assets/reveillon');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Map of all Figma assets
const assets = {
  // Hero
  'hero-bg.png': 'dda8311da54661ab7abf36c0bac2c66cc4be1b4a.png',
  
  // Full-Pack Experience
  'full-pack-main.png': '83277900ba176b4c9d09cb292a1c858af73458fa.png',
  
  // Jantar + Festa
  'jantar-festa-left.png': '776e738ca6f41cdc4c6c66693de6bb6eb98418b7.png',
  'jantar-festa-additional.png': 'cb0f2948c756a9c0c4a17787520457d26059436b.png',
  
  // Club Sacramento
  'club-main.png': 'b28aa66d1427cb2857cc43571dd8a398044f81f3.png',
  
  // Menu de Reveillon
  'menu-img-1.png': '17ae680cba36c37a0342946d8084975065d73db5.png',
  'menu-img-2.png': '9fc9326fd140152ab752fc6cf392c03f5e0d90a9.png',
  'menu-img-3.png': '6a1d72e5160b8412839d11394a994b0cc782962d.png',
  'menu-banner.png': '5d48d82e24ad789f784a098ea25b89b224acb255.png',
  'menu-food.png': '248ded0b20b67c9dc30e65546248289ecb03e030.png',
  
  // Bullet icon (SVG)
  'bullet-icon.svg': 'cbe75f4a6b35c0da82de1a3d502b995eda29cf0c.svg',
};

// Download function
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    http.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// Main download function
async function downloadAllAssets() {
  console.log('Starting download of Figma assets...\n');
  
  let successful = 0;
  let failed = 0;
  
  for (const [filename, hash] of Object.entries(assets)) {
    const url = `http://localhost:3845/assets/${hash}`;
    const dest = path.join(assetsDir, filename);
    
    try {
      await downloadFile(url, dest);
      successful++;
    } catch (error) {
      console.error(`✗ Failed: ${filename} - ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\nDownload complete!`);
  console.log(`✓ Successful: ${successful}`);
  if (failed > 0) {
    console.log(`✗ Failed: ${failed}`);
    console.log('\nMake sure Figma Desktop is open and the file is loaded.');
  }
}

downloadAllAssets().catch(console.error);
