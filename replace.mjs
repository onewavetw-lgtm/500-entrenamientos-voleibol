import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// 1. Hero Mockup
const heroMockupRegex = /<img[^>]*src="\.\/assets\/hero-mockup\.png"[^>]*>/;
const heroMockupCSS = `<div class="w-full aspect-[16/10] bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col justify-center items-center text-center p-8 hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50"></div>
  <div class="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 relative z-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  </div>
  <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight relative z-10"><span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">+500</span> Entrenamientos</h2>
  <h3 class="text-xl md:text-2xl text-blue-200 font-medium relative z-10 w-full max-w-sm border-t border-white/10 pt-4 mt-2">de Voleibol</h3>
</div>`;
html = html.replace(heroMockupRegex, heroMockupCSS);

// 2. Carousel
const slide1Regex = /<img[^>]*src="\.\/assets\/pagina-1\.png"[^>]*>/g;
const slide1CSS = `<div class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-inner border flex-1 border-white/10 absolute inset-0">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-80"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  <h3 class="text-xl font-bold leading-tight">Ejercicios<br/>de Saque</h3>
</div>`;
html = html.replace(slide1Regex, slide1CSS);

const slide2Regex = /<img[^>]*src="\.\/assets\/pagina-2\.png"[^>]*>/g;
const slide2CSS = `<div class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl shadow-inner border flex-1 border-white/10 absolute inset-0">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  <h3 class="text-xl font-bold leading-tight">Fundamentos<br/>de Recepción</h3>
</div>`;
html = html.replace(slide2Regex, slide2CSS);

const slide3Regex = /<img[^>]*src="\.\/assets\/pagina-3\.png"[^>]*>/g;
const slide3CSS = `<div class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-xl shadow-inner border flex-1 border-white/10 absolute inset-0">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-80"><path d="M14.5 4h5v5"/><path d="m19.5 4-12 12"/><path d="M2 20h5v-5"/></svg>
  <h3 class="text-xl font-bold leading-tight">Ataque<br/>y Bloqueo</h3>
</div>`;
html = html.replace(slide3Regex, slide3CSS);

const slide4Regex = /<img[^>]*src="\.\/assets\/pagina-4\.png"[^>]*>/g;
const slide4CSS = `<div class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl shadow-inner border flex-1 border-white/10 absolute inset-0">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-80"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  <h3 class="text-xl font-bold leading-tight">Posicionamiento</h3>
</div>`;
html = html.replace(slide4Regex, slide4CSS);

const slide5Regex = /<img[^>]*src="\.\/assets\/pagina-5\.png"[^>]*>/g;
const slide5CSS = `<div class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-xl shadow-inner border flex-1 border-white/10 absolute inset-0">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-80"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  <h3 class="text-xl font-bold leading-tight">Planes<br/>Semanales</h3>
</div>`;
html = html.replace(slide5Regex, slide5CSS);

// 3. Bonus Images
const bonus1Regex = /<img[^>]*src="\.\/assets\/bonus-1\.png"[^>]*>/g;
const bonus1CSS = `<div class="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg border-4 border-white/10 hover:scale-105 transition-transform duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
</div>`;
html = html.replace(bonus1Regex, bonus1CSS);

const bonus2Regex = /<img[^>]*src="\.\/assets\/bonus-2\.png"[^>]*>/g;
const bonus2CSS = `<div class="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg border-4 border-white/10 hover:scale-105 transition-transform duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
</div>`;
html = html.replace(bonus2Regex, bonus2CSS);

const bonus3Regex = /<img[^>]*src="\.\/assets\/bonus-3\.png"[^>]*>/g;
const bonus3CSS = `<div class="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg border-4 border-white/10 hover:scale-105 transition-transform duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><polygon points="17 8 16 9 17 10 18 9 17 8"/></svg>
</div>`;
html = html.replace(bonus3Regex, bonus3CSS);

// 4. Plano Basico / Completo (remove the image and its parent centering div if it exists)
const planoBasicoRegex = /<div class="mb-8 flex flex-col justify-center items-center w-full">\s*<img[^>]*src="\.\/assets\/plano-basico\.png"[^>]*>\s*<\/div>/g;
html = html.replace(planoBasicoRegex, '');

const planoCompletoRegex = /<div class="mb-8 flex flex-col justify-center items-center w-full">\s*<img[^>]*src="\.\/assets\/plano-completo\.png"[^>]*>\s*<\/div>/g;
html = html.replace(planoCompletoRegex, '');

// If the regex misses the parent div:
const fallbackPlanoBasico = /<img[^>]*src="\.\/assets\/plano-basico\.png"[^>]*>/g;
html = html.replace(fallbackPlanoBasico, '');

const fallbackPlanoCompleto = /<img[^>]*src="\.\/assets\/plano-completo\.png"[^>]*>/g;
html = html.replace(fallbackPlanoCompleto, '');


// 5. Coaches Avatars
const coachCMRegex = /<img[^>]*src="\.\/assets\/coach-carlos\.png"[^>]*>/g;
const coachCMCSS = `<div class="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-blue-600 border-2 border-slate-100 shrink-0">CM</div>`;
html = html.replace(coachCMRegex, coachCMCSS);

const coachALRegex = /<img[^>]*src="\.\/assets\/coach-andrea\.png"[^>]*>/g;
const coachALCSS = `<div class="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-emerald-600 border-2 border-slate-100 shrink-0">AL</div>`;
html = html.replace(coachALRegex, coachALCSS);

const coachMRRegex = /<img[^>]*src="\.\/assets\/coach-martin\.png"[^>]*>/g;
const coachMRCSS = `<div class="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-orange-600 border-2 border-slate-100 shrink-0">MR</div>`;
html = html.replace(coachMRRegex, coachMRCSS);

fs.writeFileSync('index.html', html);
console.log('Done replacement');
