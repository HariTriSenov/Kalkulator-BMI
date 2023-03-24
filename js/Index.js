function BMI(){
    var w=document.getElementById('w').value;
    var h=document.getElementById('h').value;
    var u=document.getElementById('u').value;
    var bmi=w/(h/100*h/100);
    if (u <= 18) {
        document.getElementById("result").innerHTML="Umur Anda Belum 18 Tahun Ke-Atas";
    } else{
        document.getElementById("contenthasil").style.display = "block";
        document.getElementById("contentunderweight").style.display = "none";
        document.getElementById("contentoverweight").style.display = "none";
        document.getElementById("result").innerHTML="" + bmi.toFixed(2).toString();
    }
    if (bmi < 19) {
        document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kurang";
        document.getElementById("ket").innerHTML = "Anda kekurangan berat badan";
        document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori kekurangan berat badan. <br /> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
        document.getElementById("kualitasBMI").innerHTML = "Hasil BMI < 18.5";
        document.getElementById("contentunderweight").style.display = "block";
    } else if (bmi < 22.9) {
        document.getElementById("hasilKualitas").innerHTML = "Normal";
        document.getElementById("ket").innerHTML = "Anda memiliki berat badan ideal.<br />Good job!!";
        document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori berat badan yang normal. <br /> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. ";
        document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 18.5 dan 22.9";
    } else if (bmi < 25) {
        document.getElementById("hasilKualitas").innerHTML = "Berat Badan Lebih";
        document.getElementById("ket").innerHTML = "Anda memiliki berat badan berlebih";
        document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. <br /> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.  <br /> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 23 dan 25 ";
        document.getElementById("contentoverweight").style.display = "block";
    } else {
        document.getElementById("hasilKualitas").innerHTML = "Obesitas";
        document.getElementById("ket").innerHTML = "Anda berada dalam kategori obesitas";
        document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori obesitas. <br /> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br /> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
        document.getElementById("kualitasBMI").innerHTML = "Hasil BMI lebih dari 25";
        document.getElementById("contentoverweight").style.display = "block";
    }
       
    
}
