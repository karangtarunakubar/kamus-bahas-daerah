# Kamus Bahasa Daerah 🌍

Platform kamus digital dan penerjemah multibahasa untuk bahasa daerah di Kalimantan Timur (Tunjung, Benuaq, Kenyah, Bahau, dan Kutai), dikembangkan di bawah ekosistem **Eunoiaverse**.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS, JavaScript (Neumorphic UI)
- **Backend:** Node.js, Express.js
- **Database:** MySQL 8.0
- **Containerization:** Docker & Docker Compose

---

## 📁 Project Structure

```text
kamus-bahasa-daerah/
├── .env.example
├── .gitignore
├── docker-compose.yml
├── README.md
├── database/
│   └── schema.sql
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── config/
│       └── db.js
└── frontend/
    └── index.html
```

## 🚀 Cara Menjalankan Aplikasi (Running Guide)
Metode 1: Menggunakan Docker (Direkomendasikan)
Cara paling cepat dan mudah untuk menjalankan seluruh layanan (Database MySQL dan Backend API) secara bersamaan.
 * Pastikan Docker & Docker Compose sudah terinstal di komputer Anda.
 * Clone atau buka direktori proyek di terminal/command prompt.
 * Jalankan perintah berikut untuk membangun dan menjalankan kontainer:
   docker-compose up --build

 * Layanan akan berjalan pada port berikut:
   * Backend API: http://localhost:5000
   * MySQL Database: localhost:3306
Metode 2: Menjalankan Secara Manual (Tanpa Docker)
Jika Anda ingin menjalankan aplikasi secara langsung di mesin lokal (local environment):
1. Konfigurasi Database
 * Buat database MySQL baru dengan nama db_kamus_daerah.
 * Impor file skema database:
   mysql -u root -p db_kamus_daerah < database/schema.sql

2. Konfigurasi Environment Backend
 * Masuk ke folder backend:
   cd backend

 * Buat file .env berdasarkan konfigurasi contoh:
   PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_lokal_anda
DB_NAME=db_kamus_daerah

 * Instal dependensi Node.js:
   npm install

 * Jalankan server:
   npm start
# atau untuk mode development (dengan nodemon)
npm run dev

3. Menjalankan Frontend
Buka file frontend/index.html langsung di browser Anda, atau gunakan ekstensi Live Server di Visual Studio Code.
___
🔌 API Endpoints
| Method | Endpoint | Description | Request Body / Params |
|---|---|---|---|
| GET | /api/words | Mengambil seluruh daftar kosakata kamus | - |
|---|---|---|---|
| POST | /api/words | Menambah atau memperbarui kata (Upsert) | { indonesia, tunjung, benuaq, kenyah, bahau, kutai } |
___
📄 License
Author : Edo Erpani
Licence : Eunoiaverse Digital Teknologi


