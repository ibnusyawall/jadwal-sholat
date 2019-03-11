/* coded by ibnu syawall */
/* Jadwal Sholat All Provinsi Indonesia */

// ---------- module ----------

var read = require('readline');    // npm install --save readline
var shel = require('shelljs') ;    // npm install --save shelljs
var warn = require('colors')  ;    // npm install --save colors
var requ = require('request') ;    // npm install --save request
var ini  = require('./inc/ini.json');

// ---------- warna ---------*

warn.setTheme({
  k : 'yellow',
  h : 'green',
  b : 'blue',
  m : 'red',
  o : 'white',
  z : ['white', 'bgBlue'],
  i : ['black', 'bgWhite'],
  p : ['white', 'bgRed']

});a=' ['.k; b='] '.k;

// ---------- prov ----------

shel.echo('');shel.echo(' ###################### '.b + 'Jadwal Sholat Provinsi Indonesia' + ' ###################### '.b);shel.echo('');
shel.echo(a + '1 ' + b + 'Aceh                 ' + a + '6 ' + b + 'Kepulauan Riau           ' + a + '11' + b + 'Banten     ')
shel.echo(a + '2 ' + b + 'Sumatra Utara        ' + a + '7 ' + b + 'Jambi                    ' + a + '12' + b + 'DKI Jakarta')
shel.echo(a + '3 ' + b + 'Sumatra Barat        ' + a + '8 ' + b + 'Bangka Belitung          ' + a + '13' + b + 'Jawa Barat ')
shel.echo(a + '4 ' + b + 'Sumatra Selatan      ' + a + '9 ' + b + 'Bengkulu                 ' + a + '14' + b + 'Jawa Tengah')
shel.echo(a + '5 ' + b + 'Riau                 ' + a + '10' + b + 'Lampung                  ' + a + '15' + b + 'Jawa Timur ')
shel.echo('');
shel.echo(a + '16' + b + 'DI Yogyakarta        ' + a + '21' + b + 'Kalimantan Barat         ' + a + '26' + b + 'Sulawesi Utara   ')
shel.echo(a + '17' + b + 'Bali                 ' + a + '22' + b + 'Kalimantan Tengah        ' + a + '27' + b + 'Sulawesi Barat   ')
shel.echo(a + '18' + b + 'Nusa Tenggara Barat  ' + a + '23' + b + 'Kalimantan Selatan       ' + a + '28' + b + 'Sulawesi Tengah  ')
shel.echo(a + '19' + b + 'Nusa Tenggara Timur  ' + a + '24' + b + 'Kalimantan Timur         ' + a + '29' + b + 'Sulawesi Selatan ')
shel.echo(a + '20' + b + 'Kalimantan Utara     ' + a + '25' + b + 'Gorontalo                ' + a + '30' + b + 'Sulawesi Tenggara')
shel.echo('');
shel.echo( a + '31' + b + 'Maluku  ' + a + '32' + b + 'Maluku Utara  ' + a + '33' + b + 'Papua  ' + a + '34' + b + 'Papua Barat  ' + a + '00' + b + 'Keluar');shel.echo('');
shel.echo(' ##################### '.b + a + '      Ahlan Wasahlan ^_^      ' + b + ' ###################### '.b);shel.echo('');

// ---------- tanya ----------

const tanya = read.createInterface({
    input : process.stdin,
    output: process.stdout
}); tanya.question(a + '!'.m + b + ' [ JS | NO ] > ', (jawab) => {
    shel.echo('');

// ---------- start ----------

if (`${jawab}` == 'Aceh' || `${jawab}` == 1 || `${jawab}` == 01) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (ao) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/530/tanggal/${ao}`, function (error, response, body){
      ambil = JSON.parse(body)
      if (response.statusCode == 200) {
         shel.echo(' ------------------------------------------------'.h)
         shel.echo(' |       '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].a.b + '      |'.h)
         shel.echo(' ------------------------------------------------'.h)
         shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
         shel.echo(' ------------------------------------------------'.h)
         shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
         shel.echo(' ------------------------------------------------'.h)
         shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
         shel.echo(' ------------------------------------------------'.h)
         shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
         shel.echo(' ------------------------------------------------'.h)
         shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
         shel.echo(' ------------------------------------------------'.h); shel.echo('');

   }

}); tanya.close(); })

} else if (`${jawab}` == 'Sumatra Utara' || `${jawab}` == 2 || `${jawab}` == 02) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (bq) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/560/tanggal/${bq}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |  '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].b.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sumatra Barat' || `${jawab}` == 3 || `${jawab}` == 03) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (c) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/580/tanggal/${c}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |  '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].c.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sumatra Selatan' || `${jawab}` == 4 || `${jawab}` == 04) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (d) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/622/tanggal/${d}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat  Provinsi '.b + ini.data[2].h.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Riau' || `${jawab}` == 5 || `${jawab}` == 05) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (e) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/597/tanggal/${e}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |      '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].d.b + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Kepulauan Riau' || `${jawab}` == 6 || `${jawab}` == 06) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (f) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/663/tanggal/${f}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' | '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].e.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Jambi' || `${jawab}` == 7 || `${jawab}` == 07) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (g) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/608/tanggal/${g}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |      '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].f.b + '      |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Bangka Belitung' || `${jawab}` == 8 || `${jawab}` == 08) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (h) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/657/tanggal/${h}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].i.b + '    |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Bengkulu' || `${jawab}` == 9 || `${jawab}` == 09)  {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (i) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/635/tanggal/${i}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].g.b + '     |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Lampung' || `${jawab}` == 10) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (j) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/649/tanggal/${j}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |     '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].j.b + '     |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Banten' || `${jawab}` == 11) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (k) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/673/tanggal/${k}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |     '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].k.b + '      |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Jakarta' || `${jawab}` == 12) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (l) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/667/tanggal/${l}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].m.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Jawa Barat' || `${jawab}` == 13) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (m) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/679/tanggal/${m}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].l.b + '    |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Jawa Tengah' || `${jawab}` == 14) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (n) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/728/tanggal/${n}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].n.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Jawa Timur' || `${jawab}` == 15) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (o) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/770/tanggal/${o}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].p.b + '    |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Yogyakarta' || `${jawab}` == 16) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (p) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/783/tanggal/${p}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |  '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].o.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Bali' || `${jawab}` == 17) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (q) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/792/tanggal/${q}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |      '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].q.b + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'NTB' || `${jawab}` == 18) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (r) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/801/tanggal/${r}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |  '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].r.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'NTT' || `${jawab}` == 19) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (s) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/807/tanggal/${s}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |  '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].s.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Kalut' || `${jawab}` == 20) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (t) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/832/tanggal/${t}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].t.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Kalbar' || `${jawab}` == 21) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (u) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/832/tanggal/${u}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].u.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Kalteng' || `${jawab}` == 22) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (v) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/852/tanggal/${v}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].v.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Kalsel' || `${jawab}` == 23) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (w) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/864/tanggal/${w}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].w.b + '  |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Kaltim' || `${jawab}` == 24) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (x) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/874/tanggal/${x}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].x.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Gorontalo' || `${jawab}` == 25) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (y) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/949/tanggal/${y}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].y.b + '    |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sulut' || `${jawab}` == 26) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (z) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/892/tanggal/${z}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].z.b + '     |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sulbar' || `${jawab}` == 27) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (aa) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/953/tanggal/${aa}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].aa.b + '     |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sulteng' || `${jawab}` == 28) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (bb) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/908/tanggal/${bb}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |    '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].ab.b + '    |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sulsel' || `${jawab}` == 29) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (cc) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/917/tanggal/${cc}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].ac.b + '    |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Sulgra' || `${jawab}` == 30) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (dd) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/944/tanggal/${dd}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Provinsi '.b + ini.data[2].ad.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Maluku' || `${jawab}` == 31) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (ee) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/968/tanggal/${ee}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |      '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].af.b + '     |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Malut' || `${jawab}` == 32) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (ff) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/968/tanggal/${ff}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |  '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].ae.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Papua' || `${jawab}` == 33) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (gg) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/983/tanggal/${gg}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |      '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].ah.b + '      |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 'Papua Barat' || `${jawab}` == 34) {
  shel.echo(' usage : ' + 'tahun'.p+'-'+'bulan'.p+'-'+'tanggal'.p+' ||'+' contoh : '+'2019'.p+'-'+'02'.p+'-'+'10'.p);shel.echo('');
  tanya.question(a + '?'.o + b + 'Masukan Tanggal : ', (hh) => {
  shel.echo('');
    requ(`https://api.banghasan.com/sholat/format/json/jadwal/kota/1013/tanggal/${hh}`, function (error, response, body){
      ambil = JSON.parse(body)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |   '.h + 'Jadwal Sholat Untuk Provinsi '.b + ini.data[2].ag.b + '   |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].a + '           |      '.b + ambil["jadwal"]["data"]["subuh"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].b + '          |      '.b + ambil["jadwal"]["data"]["dzuhur"] + '       |    '.h + ini.data[0].a.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].c + '           |      '.b + ambil["jadwal"]["data"]["ashar"] + '       |    '.h + ini.data[0].b.z)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].d + '         |      '.b + ambil["jadwal"]["data"]["maghrib"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h)
      shel.echo(' |           '.h + ini.data[1].e + '            |      '.b + ambil["jadwal"]["data"]["isya"] + '       |'.h)
      shel.echo(' ------------------------------------------------'.h); shel.echo('');

}); tanya.close(); })

} else if (`${jawab}` == 00) {
  shel.echo(' --------------- ' + a + 'Harap Tunggu'.b + b + ' ---------------');
  tanya.close(); shel.exec('clear'); shel.echo(a + '    Thanks For Using This Tools ^_^    '.i + b); shel.exec('clear && ls');
} else {
  shel.echo(a + '!'.m + b + 'Masukan input dengan benar !'); shel.echo(''); tanya.close();
}; })

// ---------- done ----------
