import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Roots to scan for PNGs
const roots = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../src'),
];

const ignoreDirs = new Set(['node_modules', 'dist', '.git', '.next', '.vercel']);

async function loadSharp() {
  const mod = await import('sharp');
  return mod.default || mod;
}

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (/\.png$/i.test(entry.name)) {
      yield full;
    }
  }
}

async function convertAll() {
  const sharp = await loadSharp();
  let total = 0, converted = 0, skipped = 0, failed = 0;
  const files = [];

  for (const root of roots) {
    if (fs.existsSync(root)) {
      for (const file of walk(root)) files.push(file);
    }
  }

  console.log(`Found ${files.length} PNG files to evaluate.\n`);

  for (const pngPath of files) {
    total++;
    const webpPath = pngPath.replace(/\.png$/i, '.webp');
    try {
      if (fs.existsSync(webpPath)) {
        skipped++;
        console.log(`⚠️  Skip (exists): ${path.relative(process.cwd(), webpPath)}`);
        continue;
      }

      const input = sharp(pngPath);
      const meta = await input.metadata();
      const pipeline = input.webp({ quality: 80, effort: 4 });
      await pipeline.toFile(webpPath);

      const orig = fs.statSync(pngPath).size;
      const out = fs.statSync(webpPath).size;
      const saved = ((orig - out) / orig * 100).toFixed(1);
      converted++;
      console.log(`✅ ${path.relative(process.cwd(), pngPath)} → ${path.basename(webpPath)} (saved ${saved}%)`);
    } catch (err) {
      failed++;
      console.error(`❌ Failed: ${pngPath} -> ${err.message}`);
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('PNG → WebP conversion summary');
  console.log(`Total: ${total} | Converted: ${converted} | Skipped: ${skipped} | Failed: ${failed}`);
  console.log('Output files are written alongside originals.');
  console.log('Review visuals and update imports to .webp where desired.');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

convertAll().catch((e) => {
  console.error(e);
  process.exit(1);
});
