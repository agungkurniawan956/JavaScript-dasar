let penumpang = [];

let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang
    penumpang.push(namaPenumpang);
    //kemablikan array
    return penumpang;
  } else {
    //telusuri kursi
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      // tambah penumpang di kursi yang kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;

        //jika sudah ada nama penumpang
        //tampilkan pesan kesalahan
      } else if (penumpang[i] == namaPenumpang) {
        console.info(`${namaPenumpang} Sudah di dalam`);
        return penumpang;
        //jika kursi penun
        //tambahkan penumpang di akhir
        //kemabalikan array
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.info('Angkot Masih Kosong');
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.info(`${namaPenumpang} Tidak Ada Di angkot`);
        return penumpang;
      }
    }
  }
};
