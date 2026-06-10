import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlStr = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(htmlStr);

function getBase64Img(file, alt, classes, width, height, fetchpriority) {
  try {
    const base64 = fs.readFileSync('assets/' + file).toString('base64');
    let img = `<img src="data:image/webp;base64,${base64}" alt="${alt}" class="${classes}"
      width="${width}" height="${height}"`;
    if (fetchpriority) img += ` fetchpriority="${fetchpriority}"`;
    else img += ` loading="lazy"`;
    img += `>`;
    return img;
  } catch(e) {
    console.log("Missing", file);
    return `<img src="" alt="Missing ${file}">`;
  }
}

// Ensure the splide slides have images
$('.splide__slide').each((i, el) => {
    // Determine which page it is by text
    const text = $(el).text();
    let imgFile = '';
    let alt = '';
    if (text.includes('Ejercicios')) { imgFile = 'pagina-1.png'; alt = 'Ejercicios de Saque'; }
    if (text.includes('Fundamentos')) { imgFile = 'pagina-2.png'; alt = 'Fundamentos de Recepción'; }
    if (text.includes('Ataque')) { imgFile = 'pagina-3.png'; alt = 'Ataque y Bloqueo'; }
    if (text.includes('Posicionamiento')) { imgFile = 'pagina-4.png'; alt = 'Posicionamiento'; }
    if (text.includes('Planes')) { imgFile = 'pagina-5.png'; alt = 'Planes Semanales'; }
    
    if (imgFile && !$(el).find('img').length) {
        $(el).empty();
        $(el).append(getBase64Img(imgFile, alt, 'w-full h-full object-cover', 400, 560));
    }
});

// Bonuses
// Search for SVGs inside the bonuses grid
$('.gap-8.max-w-6xl.mx-auto').find('.bg-slate-50').each((i, el) => {
    const text = $(el).text();
    let imgFile = '';
    let alt = '';
    if (text.includes('Planificador Semanal')) { imgFile = 'bonus-1.png'; alt = 'Planificador'; }
    if (text.includes('Banco de Ejercicios')) { imgFile = 'bonus-2.png'; alt = 'Banco de Ejercicios'; }
    if (text.includes('Manual Táctico')) { imgFile = 'bonus-3.png'; alt = 'Manual Táctico'; }
    
    if (imgFile) {
        const iconDiv = $(el).find('svg').parent();
        if (iconDiv.length > 0) {
            iconDiv.replaceWith(getBase64Img(imgFile, alt, 'w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300', 160, 160));
        }
    }
});

// Plan Completo
// Check for Plan Completo heading
$('h3').each((i, el) => {
    if ($(el).text().trim() === 'Plan Completo') {
        const parentDiv = $(el).closest('.bg-gradient-to-br');
        if (parentDiv.length && !parentDiv.find('img').length) {
             // Create the wrapper for it
             const wrapper = $('<div class="mb-8 flex flex-col justify-center items-center w-full"></div>');
             wrapper.append(getBase64Img('plano-completo.png', 'Plan Completo', 'h-44 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300', 400, 300));
             // Insert after the texts
             parentDiv.find('.mb-8').first().after(wrapper);
        }
    }
});

fs.writeFileSync('index.html', $.html());
console.log('Restored remaining images');
