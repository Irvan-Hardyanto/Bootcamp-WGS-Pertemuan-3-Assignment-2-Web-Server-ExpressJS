//import modul modul yang dibutuhkan
const express=require('express');
const fs = require('fs');

const app= express();
const port = 3000;//port number

//path-path ke berkas-berkas html yang dibutuhkan.
const pathAbout = './about.html';
const pathContact = './contact.html';
const pathIndex = './index.html';

//Menampilkan sebuah berkas .html tanpa menggunakan modul lain selain express.js
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');//__dirname itu turunan dari javascript yang menunjuk pada lokasi tempat berkas ini berada
  })

//Menampilkan sebuah berkas .html tanpa menggunakan modul lain selain express.js
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
})

//kalau ditaruh di sini. route /contact dan semua route setelah baris ini tidak bisa diakses, 
//di redirect kesini semuanya 
// app.use('/',(req,res)=>{
//     res.send('test')
// })

//Menampilkan sebuah berkas .html tanpa menggunakan modul lain selain express.js
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html');
})

//jika akses selain route selain yang disediakan diatas, tampilkan error 404
app.use('/',(req,res)=>{//todo: cari cara buat nampilin html 404 not found.
    res.writeHead(404);//buat status code
    res.write('Error: page not found');
    res.end();
})

//jalankan web servernya 
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})