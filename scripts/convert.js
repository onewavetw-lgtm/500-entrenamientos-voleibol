import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function convertToWebp() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, file.replace('.png', '.webp'));
      
      console.log(`Converting ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Converted to ${outputPath}`);
      // Remove original
      fs.unlinkSync(inputPath);
    }
  }
}

convertToWebp().catch(console.error);
