<?php
// mengubah json jadi array asscociative php
$ubah = file_get_contents('coba.json'); //get file 
$ubah = json_decode($ubah);// ubah ke array
var_dump( $ubah);
$arrayassociative= ["cindi" => "nama","mi"=> "prodi"];
// mengubah array jadi json
$arrayassociative = json_encode($arrayassociative);
var_dump($arrayassociative);

//ambil data dari database
$conn = mysqli_connect("localhost", "root","","phpdasar");
$query = mysqli_query($conn, "SELECT * FROM mahasiswa");
$fetchquery = mysqli_fetch_all($query);
$fetchquery = json_encode($fetchquery);
var_dump($fetchquery);
