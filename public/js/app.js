var cargarPagina = function () {
    cargarPersonajes();
};

var url = "http://pokeapi.co/api/v2/pokemon/";
var contador = 1;

var cargarPersonajes = function () {
    $.getJSON(url, function (response) {
        var pokemons = response.results;
        mostrarPokemons(pokemons);
    });
};

var pokemonCapturadosTotal = function (total) {
    $('#total').text(total);
};
var imagenesPokemons = ["assets/01.png", "assets/02.png", "assets/03.png", "assets/04.png", "assets/05.png", "assets/06.png", "assets/07.png", "assets/08.png", "assets/09.png", "010.png", "011.png", "012.png", "assets/013.png", "assets/014.png", "assets/015.png", "assets/016.png", "017.png", "018.png", "assets/019.png", "assets/020.png"];

var mostrarPokemons = function (pokemons) {
    var $pokeList = $('#pokemonList');
    pokemons.forEach(function (pokemon) {
        var $poke = $("<div />");
        $poke.attr("data-url", pokemon.url);
        
        var $card = '<div class="row center">' +
            '<div class="col m4">' +
            '<img src="__urlImg__">'+
            '<h4>__nombre__</h4>' +
            '</div>' +
            '</div>';
        $poke.attr("data-url", pokemon.url);
        $poke.append($card);
        $pokeList.append($poke);
    });
};


var imgPokemon = function(){
    var $divImg = $(".imgPokemon");
    $.each(imagenesPokemons,function(i, val) {
        $("<img />").attr("src", val).appendTo($divImg);
    });
};

var infoAdicional = function () {

};


/*var plantillaModal = '<div id="modal' + contador + 'class="modal modal-fixed-footer">' +
    '<div class="modal-content">' +
    '<h4>__nombre__</h4>' +
    '<h6>tipo <span>__type__</span></h6>' +
    '<h6>Experiencia base <span>__baseXp__</span></h6>' +
    '</div>' +
    '<div class = "modal-footer" >' +
    '<a href = "#!" class = "modal-action modal-close waves-effect waves-green btn-flat " > Agree < /a> </div>' +
    '</div>'*/

/* Plantilla Card Reval
var plantilla = ' <div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                    '<img class="activator" src="assets/0"".png">'+
                '</div>'+
                '<div class="card-content">'+
                    '<span class="card-title activator grey-text text-darken-4">__nombre__<i class="material-icons right">more_vert</i></span>'+
                '</div>'+
                '<div class="card-reveal">'+
                    '<span class="card-title grey-text text-darken-4">__nombre__<i class="material-icons right">close</i></span>'+
                     '<h6>tipo <span>__type__</span></h6>'+
                    '<h6>Experiencia base <span>__baseXp__</span></h6>'+
                '</div>'+
            '</div>';*/

var infoPokemon = function () {
    var url = $(this).data('url');
    $getJSON(url, function (response) {
        $pokedex.html(plantilla.replace)('__nombre__', response.name);
    });
};

$(document).ready(cargarPagina);
