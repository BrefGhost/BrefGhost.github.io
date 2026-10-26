import { mkdir, copyFile } from 'node:fs/promises';

await mkdir('dist/assets', { recursive: true });
for (const path of ['index.html', '.nojekyll', 'assets/styles.css', 'assets/pathomporn.jpg', 'assets/Pathomporn-Rakpukdee-Resume.pdf']) {
  await copyFile(path, `dist/${path}`);
}
console.log('Built GitHub Pages site in dist/');
