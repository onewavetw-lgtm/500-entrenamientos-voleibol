import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlStr = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(htmlStr);

console.log($('h3:contains("Ejercicios")').parent().html());
