// ini bagan head

var warna = require('./warna.js');
var ini = require('../inc/ini.json');
var waktu = require(../inc/waktu.json')
console.log("")
console.log("+-+-+-+-+-+-+ +-+-+-+-+-+-+".hijau + "  C : " + ini.data[0].a)
console.log("|J|A|D|W|A|L| |S|H|O|L|A|T|".hijau + "  T : " + ini.data[0].b)
console.log("+-+-+-+-+-+-+ +-+-+-+-+-+-+".hijau + "  N : " + ini.data[0].c)
console.log("[".kuning + "!".merah + "]".kuning + " Jadwal untuk tanggal : ".kuning + waktu.data[0].waktu.biru)
console.log("[".kuning + "!".merah + "]".kuning + " Load data ...".kuning)

