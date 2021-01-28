function searchMovie() {
    $('#movie-list').html('');
    // $.getJSON('http://omdbapi.com?apikey=c8932b37&s=disney');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'c8932b37',
            's': $('#search-input').val()
        },
        success: function(result) {
            // console.log(result);
            if (result.Response == "True") {
                let movies = result.Search;
                console.log(movies);
                $.each(movies, function(index, element) {
                    $('#movie-list').append(`<div class="col-md-4"><div class="card"><img src="${element.Poster}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${element.Title}</h5>
<h6 class="card-subtitle mb-2 text-muted">${element.Year}</h6><p>Type: ${element.Type}</p>
<a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-ik="` + element.imdbID + `" class="see-detail"> See detail</a>

</div>
</div></div>`)
                })
                $('#search-input').val('');
            } else {
                $('#movie-list').html('<h1 class="text-center">' + result.Error + '</h1>');
            }
        }
    })
}
$('#search-btn').on('click', function() {
    searchMovie();
});
$('#search-input').on('keyup', function(e) {
    if (e.keyCode == 13) {
        searchMovie();
    }
})
$('#movie-list').on('click', '.see-detail', function() {
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        data: {
            'apikey': 'c8932b37',
            'i': $(this).data('ik')
        },
        success: function(movie) {
            if (movie.Response == 'True') {
                // console.log(movie.imdbID);
                $('.modal-body').html(`<div class="container-fluid">
<div class="row">
<div class="col-md-4">
<img src="${movie.Poster}" class="img-fluid">
</div>
<div class="col-md-8">
<ul class="list-group">
  <li class="list-group-item"><h3>${movie.Title}</h3></li>
  <li class="list-group-item">Released: ${movie.Released}</li>
  <li class="list-group-item">Genre: ${movie.Genre}</li>
  <li class="list-group-item">Director: ${movie.Director}</li>
</ul>
</div>
</div>
</div>`);
            }
        }

    })
});