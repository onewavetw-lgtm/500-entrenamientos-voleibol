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
    const text = $(el).text().replace(/\s+/g, ' ');
    let imgFile = '';
    let alt = '';
    
    if (text.includes('Ejercicios de Saque')) { imgFile = 'pagina-1.png'; alt = 'Ejercicios de Saque'; }
    if (text.includes('Fundamentos de Recepción')) { imgFile = 'pagina-2.png'; alt = 'Fundamentos de Recepción'; }
    if (text.includes('Ataque y Bloqueo')) { imgFile = 'pagina-3.png'; alt = 'Ataque y Bloqueo'; }
    if (text.includes('Posicionamiento')) { imgFile = 'pagina-4.png'; alt = 'Posicionamiento'; }
    if (text.includes('Planes Semanales')) { imgFile = 'pagina-5.png'; alt = 'Planes Semanales'; }
    
    if (imgFile) {
        const parent = $(el).parent(); // div.bg-gradient-to-br
        // Instead of replacing parent, replace its contents or itself?
        // Let's replace the whole parent with the img, since previously it WAS the img.
        const grandpa = parent.parent(); 
        if (grandpa.hasClass('overflow-hidden')) {
            // YES! we replaced the img with a div.bg-gradient-to-[...].
            parent.replaceWith(getBase64Img(imgFile, alt, 'w-full h-full object-cover', 400, 560));
        }
    }
    
    if (text.includes('Planificador Semanal')) {
        const parent = $(el).closest('.bg-slate-50.rounded-3xl.p-8');
        const iconContainer = parent.find('.flex.items-center.justify-center').first();
        if (iconContainer.length && !iconContainer.find('img').length) {
            iconContainer.empty();
            let wrapper = $('<div class="mb-4"></div>');
            wrapper.append(getBase64Img('bonus-1.png', 'Planificador Semanal', 'w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300', 160, 160));
            iconContainer.append(wrapper.html()); // Wait, actually replace iconContainer completely? 
            // In my replace script I did: const firstDiv = $(el).children('div').first().find('div').first();
            // Actually it's easier: replace `svg` with `img` inside `iconContainer`
        }
    }
});

// Let's specifically target the bonus wrappers we created:
$('.w-32.h-32').each((i, el) => {
    // If it's a bonus
    const html = $(el).html();
    let imgFile = '';
    let alt = '';
    if (html.includes('M8 14h')) { imgFile = 'bonus-1.png'; alt = 'Planificador'; } // the SVG path
    if (html.includes('x1=\"16\" x2=\"8\" y1=\"13\" y2=\"13\"')) { imgFile = 'bonus-2.png'; alt = 'Banco de Ejercicios'; }
    if (html.includes('M2 3h6a4 4 0 0 1 4')) { imgFile = 'bonus-3.png'; alt = 'Manual Táctico'; }
    
    if (imgFile) {
        $(el).replaceWith(getBase64Img(imgFile, alt, 'w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300', 160, 160));
    }
});


fs.writeFileSync('index.html', $.html());
console.log('Restored pages and bonuses');
