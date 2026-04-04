require('dotenv').config()
const express = require('express')
const cors    = require('cors')
const contactRouter = require('./routes/contact')

const app  = express()
const PORT = process.env.PORT || 5000

/* ── Middleware ── */
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

/* ── Routes ── */
app.use('/api/contact', contactRouter)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

/* ── 404 catch-all ── */
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

/* ── Start ── */
app.listen(PORT, () => {
  console.log(`✅ MS Canopy server running on http://localhost:${PORT}`)
})
