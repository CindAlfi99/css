function tampil() {
    $.getJSON('pizza.json', function(result) {
        let menu = result.menu;

        $.each(menu, function(index, element) {

            $('#daftar-menu').append('<div class="col col-md-4"><div class="card mb-3"><img src="./img/menu/' + element.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + element.nama + '</h5><p class="card-text">' + element.deskripsi + '</p><h5 class = "card-title">' + 'Rp.' + element.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');

        });
    });
}
tampil();



$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    // $(this).addClass('active');
    let kategori = $(this).html();
    $('h1').html(kategori);
    if (kategori == "All Menu") {
        tampil();
        return;
    }
    // console.log(kategori);
    $.getJSON('pizza.json', function(data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function(index, element) {
            if (element.kategori == kategori.toLowerCase()) {
                content += '<div class="col col-md-4"><div class="card mb-3"><img src="./img/menu/' + element.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + element.nama + '</h5><p class="card-text">' + element.deskripsi + '</p><h5 class = "card-title">' + 'Rp.' + element.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        })
        $('#daftar-menu').html(content);
    })
})