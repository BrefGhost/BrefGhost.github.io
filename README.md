# Quiet Orbit — Pathomporn Rakpukdee

Portfolio ส่วนตัวของ **ปฐมพร รักภักดี** นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยสวนดุสิต

เว็บไซต์ภาษาไทยในธีมดาราศาสตร์ รองรับมือถือ มีตัวกรองสายงาน รายละเอียดโปรเจกต์แบบเปิดอ่าน การศึกษา ทักษะ ช่องทางติดต่อ และดาวน์โหลดเรซูเม่ PDF

## เริ่มใช้งาน

ต้องมี Node.js และ npm

```sh
npm ci
npm run build
npm run preview
```

เปิด http://127.0.0.1:4173

## เผยแพร่บน GitHub Pages

### ใช้ source และ GitHub Actions

1. สร้าง repository สาธารณะชื่อ `BrefGhost.github.io` ภายใต้บัญชี `BrefGhost`
2. อัปโหลด source รวมทั้ง `package-lock.json`, `.github/workflows/pages.yml`, `index.html`, `assets/`, `scripts/`, `src/` และ `tailwind.config.cjs` ไป branch `main`
3. ที่ Settings → Pages เปลี่ยน Source เป็น **GitHub Actions**
4. รอ workflow `Deploy portfolio to GitHub Pages` สำเร็จ
5. เว็บจะอยู่ที่ https://brefghost.github.io/

### ใช้ไฟล์ที่ build สำเร็จแล้ว

แตกไฟล์ `portfolio-github-pages.zip` แล้วอัปโหลด **ไฟล์ด้านใน** (`index.html`, `.nojekyll` และโฟลเดอร์ `assets`) ไป root ของ repository จากนั้นที่ Settings → Pages เลือก **Deploy from a branch**, branch `main`, โฟลเดอร์ `/(root)`

สามารถใช้ repository ชื่ออื่นได้เช่นกัน เนื่องจาก asset paths เป็นแบบ relative

## แก้ไขเนื้อหา

- เนื้อหาและพฤติกรรม: `index.html`
- รูปโปรไฟล์: `assets/pathomporn.jpg`
- เรซูเม่ต้นฉบับที่ผู้ใช้ส่ง: `assets/Pathomporn-Rakpukdee-Resume.pdf`
- Tailwind input: `src/input.css`
- CSS ที่ build แล้ว: `assets/styles.css`

รัน `npm run build` หลังแก้ไข เพื่ออัปเดต CSS และไฟล์สำหรับ deploy ใน `dist/`

เรซูเม่ถูกคัดลอกจากไฟล์ต้นฉบับโดยไม่แก้เนื้อหา ข้อมูลปีจบที่คาดไว้และ GPA บนเว็บมาจากข้อมูลเพิ่มเติมที่ผู้ใช้แจ้ง เว็บแยกความสนใจในอาชีพออกจากทักษะที่เคยใช้งาน

รูปและข้อความเป็นของเจ้าของ Portfolio; third-party art ในเกมมีเงื่อนไขของแต่ละรายการตามที่ระบุในตัวเกม

## การตรวจสอบ

- Build สำเร็จด้วย Tailwind CSS 3.4.17
- ตรวจหน้าแรกบน desktop และ viewport มือถือ 390 × 844
- ตรวจว่าไม่มีความกว้างเนื้อหาเกิน viewport บนมือถือ
- ทดสอบตัวกรอง Data การขยายรายละเอียด ETL และเมนูมือถือ
- ดาวน์โหลดเรซูเม่ผ่านหน้าเว็บและตรวจ SHA-256 ตรงกับต้นฉบับ

การ build และ preview ในเครื่องไม่ยืนยันว่าการ deploy บน GitHub สำเร็จ ต้องตรวจผล GitHub Actions / Pages หลังเชื่อมบัญชี
