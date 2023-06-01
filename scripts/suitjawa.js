let lanjut = true;

while (lanjut) {
  //menangkap jawban pelayer
  let p = prompt(`Pilih Jawaban : orang, gajah, semut`);

  // menangkap jawaban computer
  // mengambil data random
  let ai = Math.random();

  //Menentukan jawaban ai

  if (ai < 0.33) {
    ai = 'semut';
  } else if (ai > 0.33 && ai <= 0.66) {
    ai = 'gajah';
  } else {
    ai = 'orang';
  }

  // menentukan hasil suit
  let hasil = '';
  if (p == ai) {
    hasil = 'SERI';
  } else if (p == 'orang') {
    if (ai == 'gajah') {
      hasil = 'KALAH';
    } else {
      hasil = 'MENANG';
    }
  } else if (p == 'gajah') {
    hasil = ai == 'semut' ? 'MENANG' : 'KALAH';
  } else if (p == 'semut') {
    hasil = ai == 'gajah' ? 'MENANG' : 'KALAH';
  } else {
    hasil = 'Anada memasukan jawaban yang salah';
  }

  alert(`Kamu Memilih : ${p} \n comp Memilih : ${ai} \n Kamu ${hasil}`);

  lanjut = confirm('Lanjut ?');
}

alert('Terima Kasih Sudah Bermain');
