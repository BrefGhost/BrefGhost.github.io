import { readFile, writeFile, mkdir } from 'node:fs/promises';

let html = await readFile('index.html', 'utf8');
const css = await readFile('assets/styles.css', 'utf8');
html = html.replace('<link rel="stylesheet" href="./assets/styles.css">', `<style>${css}</style>`);
html = html.replace('./assets/pathomporn.jpg', 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/projects/93815eb8-7055-49cf-b12f-b647ade4d458/content-assets/portrait-pathomporn/pathomporn.jpg');
html = html.replaceAll('href="./assets/Pathomporn-Rakpukdee-Resume.pdf"', 'href="https://brefghost.github.io/assets/Pathomporn-Rakpukdee-Resume.pdf"');
await mkdir('.superdesign/tmp', { recursive: true });
await writeFile('.superdesign/tmp/portfolio-complete.html', html);
console.log('Exported complete design with live resume link.');
