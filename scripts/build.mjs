import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

await mkdir('dist/assets', { recursive: true });
for (const path of ['.nojekyll', 'assets/styles.css', 'assets/pathomporn.jpg', 'assets/Pathomporn-Rakpukdee-Resume.pdf']) {
  await copyFile(path, `dist/${path}`);
}
const stylesheet = await readFile('assets/styles.css');
const cssVersion = createHash('sha256').update(stylesheet).digest('hex').slice(0, 12);
const html = (await readFile('index.html', 'utf8')).replace('./assets/styles.css', `./assets/styles.css?v=${cssVersion}`);
await writeFile('dist/index.html', html);
console.log('Built GitHub Pages site in dist/');
