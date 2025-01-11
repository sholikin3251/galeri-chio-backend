// Import modul yang diperlukan
const express = require('express');
const path = require('path');

// Inisialisasi aplikasi
const app = express();
const PORT = 3000;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, 'public')));

// Rute utama untuk halaman keranjang
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'keranjang.html'));
});

// Rute untuk halaman login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rute untuk halaman registrasi
app.get('/registrasi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registrasi.html'));
});

// Rute untuk halaman home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Rute untuk halaman kategori
app.get('/kategori', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kategori.html'));
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
