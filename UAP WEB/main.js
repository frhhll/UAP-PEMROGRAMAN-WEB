const dataBarang = {
  "001": { nama: "Barang A", harga: 10000 },
  "002": { nama: "Barang B", harga: 20000 },
  "003": { nama: "Barang C", harga: 30000 },
};

function totalHargaBarang() {
  const kodeBarang = document.getElementById("kodeBarang").value;
  const jumlahBarang = parseInt(document.getElementById("jumlahBarang").value);

  if (dataBarang.hasOwnProperty(kodeBarang)) {
    const totalHarga = dataBarang[kodeBarang].harga * jumlahBarang;
    alert(`Total Pembayaran adalah Rp ${totalHarga}`);

    const uangUser = parseFloat(prompt("Masukkan Uang User:"));

    if (!isNaN(uangUser)) {
      const kembalianUser = uangUser - totalHarga;
      alert(`Total Kembalian Anda adalah Rp ${kembalianUser}`);
    } else {
      alert("Anda Tidak Menginput Jumlah Uang");
    }
  } else {
    alert("Kode Barang Yang Anda Inputkan Salah");
  }
}
