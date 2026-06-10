import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlStr = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(htmlStr);

function getBase64Img(file, alt, classes, width, height, fetchpriority) {
  try {
    const base64 = fs.readFileSync('assets/' + file).toString('base64');
    let img = `<img src="data:image/webp;base64,${base64}" alt="${alt}" class="${classes}" width="${width}" height="${height}"`;
    if (fetchpriority) img += ` fetchpriority="${fetchpriority}"`;
    else img += ` loading="lazy"`;
    img += `>`;
    return img;
  } catch(e) {
    return `<img src="" alt="Missing ${file}">`;
  }
}

$('h3').each((i, el) => {
    const text = $(el).text().replace(/\s+/g, '');
    let imgFile = '';
    let alt = '';
    
    if (text.includes('EjerciciosdeSaque')) { imgFile = 'pagina-1.png'; alt = 'Ejercicios de Saque'; }
    if (text.includes('FundamentosdeRecepción')) { imgFile = 'pagina-2.png'; alt = 'Fundamentos de Recepción'; }
    if (text.includes('AtaqueyBloqueo')) { imgFile = 'pagina-3.png'; alt = 'Ataque y Bloqueo'; }
    if (text.includes('PlanesSemanales')) { imgFile = 'pagina-5.png'; alt = 'Planes Semanales'; }
    
    if (imgFile) {
        const parent = $(el).parent(); // div.bg-gradient-to-br
        const grandpa = parent.parent(); 
        if (grandpa.hasClass('overflow-hidden')) {
            parent.replaceWith(getBase64Img(imgFile, alt, 'w-full h-full object-cover', 400, 560));
        }
    }
});

fs.writeFileSync('index.html', $.html());
console.log('Restored remaining pages');
