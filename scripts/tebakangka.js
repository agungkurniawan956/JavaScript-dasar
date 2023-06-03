let ulang = true;
while (ulang) {
  let kesempatan = 3;
  let ai = Math.floor(Math.random() * 10) + 1;
  let hasil = '';

  while (kesempatan >= 1) {
    alert(
      `Mulai Tebak Angka 1-10, kesempatan yang anda miliki ${kesempatan} X`
    );
    let p = parseInt(prompt(`Masukan angka Tebakan 1-10`));
    if (p == ai) {
      hasil = 'BENAR';
      alert(`Anda ${hasil} Angka yang anda jawab adalah ${p}`);
      break;
    } else if (p > ai) {
      hasil = 'BESAR';
      kesempatan--;
      alert(`Terlalu ${hasil}, Jawaban Anda ${p}`);
    } else if (p < ai) {
      hasil = 'RENDAH';
      kesempatan--;
      alert(`Terlalu ${hasil}, Jawaban Anda ${p}`);
    } else {
      alert(`Jawaban Yang Anda Masukan Bukan 1-10`);
    }
    if (kesempatan == 0) {
      alert('Kesempatan anda Habis');
    }
  }
  ulang = confirm(`Ingin Main Lagi?`);
}
