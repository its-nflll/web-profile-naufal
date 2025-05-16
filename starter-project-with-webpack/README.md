# Website Profil Naufal

Ini adalah website portofolio personal yang responsif dan modern. Website ini dibuat menggunakan HTML, CSS, dan JavaScript dengan menggunakan webpack sebagai module bundler.

## Fitur

- **Desain Responsif**: Tampilan yang optimal di semua perangkat (desktop, tablet, dan ponsel)
- **Animasi Smooth**: Menggunakan library AOS (Animate On Scroll) untuk animasi saat scrolling
- **Navigasi Interaktif**: Menu yang responsif dengan efek scrolling yang halus
- **Kontak Form**: Form kontak yang berfungsi dengan validasi dasar
- **Optimized Build**: Konfigurasi webpack untuk development dan production

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack 5
- Babel
- AOS (Animate On Scroll)
- Font Awesome Icons

## Cara Menggunakan

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 14 atau lebih tinggi) di sistem Anda.

### Instalasi

1. Clone repository ini
```bash
git clone <repository-url>
```

2. Pindah ke direktori proyek
```bash
cd web-profile-naufal
```

3. Install dependensi
```bash
npm install
```

### Development Mode

Untuk menjalankan proyek di mode development dengan hot reload:

```bash
npm run start-dev
```

Website akan berjalan di `http://localhost:8080`

### Production Build

Untuk membuat build production:

```bash
npm run build
```

File hasil build akan tersedia di folder `dist/`.

### Menjalankan Build Production Secara Lokal

Setelah melakukan build, Anda dapat menjalankan build production secara lokal dengan:

```bash
npm run serve
```

Server akan berjalan di `http://localhost:8080`

## Struktur Project

```
web-profile-naufal/
├── src/
│   ├── public/
│   │   ├── images/     # Gambar dan aset
│   │   └── favicon.png 
│   ├── scripts/
│   │   └── index.js    # JavaScript utama
│   ├── styles/
│   │   └── styles.css  # File CSS
│   └── index.html      # File HTML utama
├── webpack.common.js   # Konfigurasi webpack umum
├── webpack.dev.js      # Konfigurasi webpack untuk development
├── webpack.prod.js     # Konfigurasi webpack untuk production
└── package.json        # Dependensi dan script
```

## Kustomisasi

Untuk menyesuaikan website ini dengan informasi Anda:

1. Edit informasi personal di `src/index.html`
2. Ganti gambar di folder `src/public/images/`
3. Sesuaikan warna dan styling di `src/styles/styles.css`

## License

ISC
