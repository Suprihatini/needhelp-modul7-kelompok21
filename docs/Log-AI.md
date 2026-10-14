# Log AI dan perbaikan manual

## Catatan awal — Codex, setup ketua

Instruksi pengguna: "sekarang kerjakan bagian saya ketua dan apa saja yg harus saya siapkan contoh link figma".

Sumber: brief Modul 7 dan Figma Final UI node 85:60. Struktur 12 layar dibaca melalui metadata. Detail form login node 110:1615 diekstraksi untuk contoh komponen.

Hasil: fondasi HTML/CSS/JavaScript + Vite berbasis 9 halaman Modul 6; token CSS; form login contoh; simulasi sesi, kembali ke tujuan login, menu mobile, dan modal; PRD awal; README; instruksi anggota.

Perbaikan manual dalam implementasi: mengubah kelas hasil konteks Figma menjadi CSS biasa; menambah validasi dan logika JavaScript; modal memakai dialog native agar Escape/fokus didukung; host development localhost untuk kompatibilitas lingkungan; font lokal; contoh dibatasi ke FormCard karena unduhan dua SVG dekorasi mengembalikan HTML, bukan aset valid.

Keterbatasan: bukan aplikasi final; belum repo publik; belum semua layar; Google/login nyata/pemulihan email belum tersedia. Jangan mencatat starter ini sebagai pekerjaan anggota yang belum mereka lakukan.

## Format entri anggota

- Nama/peran dan tanggal:
- Tool AI:
- Prompt asli:
- File/fitur yang dihasilkan:
- Masalah yang ditemukan:
- Perbaikan manual:
- Cara dan hasil pengujian:
- Commit/PR terkait:

## Contoh prompt lanjutan — belum digunakan

"Implementasikan tampilan katalog Saya Butuh dari Figma node 110:1835 pada fondasi HTML/CSS/JavaScript + Vite berbasis 9 halaman Modul 6 ini. Gunakan token di assets/css/tokens.css dan komponen yang sudah tersedia. Pisahkan logika filter di assets/js/ dari markup dan CSS. Pertahankan warna, hierarki, konten dan proporsi Figma serta layout responsif. Catat aset yang dibutuhkan dan bagian yang belum tersedia."

Contoh di atas adalah saran untuk tim; bukan riwayat prompt yang telah dijalankan.

## Penyesuaian setelah dokumen sebelumnya diterima

Membaca problem statement Modul 1, PDF user flow, gambar flow, dan seluruh inventaris ZIP Modul 6. Mengubah fondasi yang semula dicoba dengan React menjadi kelanjutan HTML lama. Mengoreksi alur masuk awal menjadi beranda publik. Mempertahankan Prompt-Modul6.md sebagai sumber lama tanpa mengklaim validasi W3C baru. Mencatat perbedaan 5 nama lama vs 4 orang tim sekarang, rating lama vs 12 frame Figma, alamat Gubeng, dan backend POST yang belum tersedia.
