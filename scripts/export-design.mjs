import { readFile, writeFile, mkdir } from 'node:fs/promises';

let html = await readFile('index.html', 'utf8');
const css = await readFile('assets/styles.css', 'utf8');
const resume = await readFile('assets/Pathomporn-Rakpukdee-Resume.pdf');
html = html.replace('<link rel="stylesheet" href="./assets/styles.css">', `<style>${css}</style>`);
html = html.replace('./assets/pathomporn.jpg', 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/projects/93815eb8-7055-49cf-b12f-b647ade4d458/content-assets/portrait-pathomporn/pathomporn.jpg');
html = html.replace('href="./assets/Pathomporn-Rakpukdee-Resume.pdf"', 'href="#resume" onclick="downloadResume(event)"');
html = html.replace('</head>', `<script>
function downloadResume(event) {
  event.preventDefault();
  const bytes = Uint8Array.from(atob('${resume.toString('base64')}'), c => c.charCodeAt(0));
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
  const a = document.createElement('a');
  a.href = url; a.download = 'Pathomporn-Rakpukdee-Resume.pdf'; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
</script></head>`);
await mkdir('.superdesign/tmp', { recursive: true });
await writeFile('.superdesign/tmp/portfolio-complete.html', html);
console.log('Exported complete design with working resume download.');
