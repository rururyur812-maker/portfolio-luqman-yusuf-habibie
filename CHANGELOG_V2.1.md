# Portfolio Luqman V2.1 — Smooth Motion

## Optimasi JavaScript

- Event scroll dan pointer kini dibatasi dengan `requestAnimationFrame` agar pembaruan visual tidak berjalan berulang kali dalam satu frame.
- Ditambahkan pembersihan event listener dan observer ketika berpindah halaman agar listener lama tidak menumpuk.
- Transisi tab Projects, Certificates, dan Digital Toolkit memakai Web Animations API dengan fallback aman.
- Efek tilt, magnetic button, dan pointer glow memakai pembaruan transform yang dibatch.
- Animasi dekoratif otomatis dijeda ketika section berada jauh di luar viewport.
- Reveal section memakai satu `IntersectionObserver` dan stagger delay ringan.
- Dukungan `prefers-reduced-motion` dipertahankan.

## Perbaikan Tipografi

- Letter spacing heading dibuat lebih longgar dan natural.
- Line-height judul, paragraf, project card, About, Contact, dan Project Detail diperbaiki.
- Jarak heading terhadap deskripsi diperbesar.
- Kerning, optical sizing, dan font smoothing diaktifkan.
- Font utama tetap Syne, Manrope, dan Instrument Serif.

## Perbaikan Interaksi

- Project, certificate, dan Digital Toolkit mendapat pointer-following glow yang ringan.
- Hover project lebih halus dan menggunakan transform GPU-friendly.
- Pergantian filter dan tab tidak lagi terasa mendadak.
- Efek blur berat pada reveal dihilangkan untuk mengurangi beban rendering.

## Cara membuka

Klik dua kali `index.html`. Project ini tidak memerlukan CMD, Node.js, npm, atau server lokal.
