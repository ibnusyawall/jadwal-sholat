// created by ibnu syawal
// say alhamdulillah :)

var waktu = require('./inc/waktu.json'); // ini waktu nya
var req = require('request');
var warna = require('./style/warna.js');
var ini = require('./inc/ini.json');

// pala lo
var pala = require('./style/pala.js');

// wait
req('https://api.banghasan.com/sholat/format/json/jadwal/kota/917/tanggal/' + waktu.data[0].waktu, function (error, response, body){
   ambil = JSON.parse(body)
   console.log('------------------------------------------------'.hijau)
   console.log('|   '.hijau + 'Jadwal Sholat Provinsi '.biru + ini.data[2].ac.biru + '    |'.hijau)
   console.log('------------------------------------------------'.hijau)
   console.log('|           '.hijau + ini.data[1].a + '           |      '.biru + ambil["jadwal"]["data"]["subuh"] + '       |'.hijau)
   console.log('------------------------------------------------'.hijau)
   console.log('|           '.hijau + ini.data[1].b + '          |      '.biru + ambil["jadwal"]["data"]["dzuhur"] + '       |'.hijau)
   console.log('------------------------------------------------'.hijau)
   console.log('|           '.hijau + ini.data[1].c + '           |      '.biru + ambil["jadwal"]["data"]["ashar"] + '       |'.hijau)
   console.log('------------------------------------------------'.hijau)
   console.log('|           '.hijau + ini.data[1].d + '         |      '.biru + ambil["jadwal"]["data"]["maghrib"] + '       |'.hijau)
   console.log('------------------------------------------------'.hijau)
   console.log('|           '.hijau + ini.data[1].e + '            |      '.biru + ambil["jadwal"]["data"]["isya"] + '       |'.hijau)
   console.log('------------------------------------------------'.hijau)
})