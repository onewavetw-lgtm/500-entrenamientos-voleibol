import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlStr = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(htmlStr);

function getBase64Img(file, alt, classes, width, height, fetchpriority) {
  const base64 = fs.readFileSync('assets/' + file).toString('base64');
  let img = `<img src="data:image/webp;base64,${base64}" alt="${alt}" class="${classes}" width="${width}" height="${height}" loading="lazy">`;
  return img;
}

$('h3').each((i, el) => {
    if ($(el).text().trim() === 'Plan Completo') {
        const parentDiv = $(el).closest('.bg-slate-900');
        const emptyDiv = parentDiv.find('.mb-8.flex.flex-col.justify-center.items-center.w-full');
        if (emptyDiv.length && !emptyDiv.find('img').length) {
             emptyDiv.empty();
             emptyDiv.append(getBase64Img('plano-completo.png', 'Plan Completo', 'h-44 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300', 400, 300));
        }
    }
});

fs.writeFileSync('index.html', $.html());
console.log('Restored Plan Completo');
