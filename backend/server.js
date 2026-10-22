const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Get all dictionary records
app.get('/api/words', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM kamus_kata ORDER BY indonesia ASC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Insert or update a word (Upsert)
app.post('/api/words', async (req, res) => {
  const { indonesia, tunjung, benuaq, kenyah, bahau, kutai } = req.body;
  if (!indonesia) {
    return res.status(400).json({ success: false, error: 'Indonesian word is required' });
  }

  try {
    const query = `
      INSERT INTO kamus_kata (indonesia, tunjung, benuaq, kenyah, bahau, kutai)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        tunjung = COALESCE(VALUES(tunjung), tunjung),
        benuaq = COALESCE(VALUES(benuaq), benuaq),
        kenyah = COALESCE(VALUES(kenyah), kenyah),
        bahau = COALESCE(VALUES(bahau), bahau),
        kutai = COALESCE(VALUES(kutai), kutai)
    `;
    await pool.query(query, [
      indonesia.toLowerCase().trim(),
      tunjung ? tunjung.toLowerCase().trim() : null,
      benuaq ? benuaq.toLowerCase().trim() : null,
      kenyah ? kenyah.toLowerCase().trim() : null,
      bahau ? bahau.toLowerCase().trim() : null,
      kutai ? kutai.toLowerCase().trim() : null
    ]);
    res.json({ success: true, message: 'Word saved successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Kamus API Server running on port ${PORT}`);
});
