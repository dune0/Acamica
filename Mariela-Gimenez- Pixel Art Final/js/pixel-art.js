var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var imagenesSuperheroes = document.querySelector('.imgs');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Aca se arma la paleta de colores

function paletaDeColores(){
  for (var i = 0; i < nombreColores.length; i++) {
    var colorDiv = document.createElement("div");
    colorDiv.className += "color-paleta";
    colorDiv.style.backgroundColor = nombreColores[i];
    document.getElementById("paleta").appendChild(colorDiv);
  }
}
paletaDeColores();

//Aca se arma la grilla

function crearGrilla(){
  for(var i = 0; i < 1750; i++) {
    var pixel = document.createElement("div");
    pixel.idName = "pixel-grilla";
    pixel.className = "pixelgrilla"
    document.getElementById("grilla-pixeles").appendChild(pixel);  
  }
}
crearGrilla();

//Aca se cambiar de color el indicador de color

var pixelPaleta = document.getElementById('paleta');

pixelPaleta.addEventListener('click', colorSeleccionado);

function colorSeleccionado(e){
	var indicadorDeColor = document.getElementById('indicador-de-color');
	indicadorDeColor.style.backgroundColor= e.target.style.backgroundColor;
}

//Aca se cambiar de color del pixel de la grilla 

var pintarPixel = document.getElementById('grilla-pixeles');
pintarPixel.addEventListener('click', pintarGrilla);

function pintarGrilla(e){
	e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}

//Aca se elige un color de la rueda 

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    document.getElementById('indicador-de-color').style.backgroundColor = colorActual;
  })
);

// Acá van los eventos del mouse

var mouseEvent = false;
grillaPixeles.addEventListener('mousedown', clickeado);
grillaPixeles.addEventListener('mouseup', noClickeado);

function clickeado(){
  mouseEvent=true;
}

function noClickeado(){
  mouseEvent=false;
}

grillaPixeles.addEventListener('mousemove', addMovement);
function addMovement(e){
        if(mouseEvent){
            e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
        }
}


//Se borra la pantalla apretando un botón
var todosLosPixeles = $(".pixelgrilla");

$("#borrar").click(function(){
  todosLosPixeles.css({
    transition : 'background-color 2s ease-in-out',
    "background-color": "white"
   });
    return crearGrilla();
  });

  //Cargá a los superhéroes en forma de píxeles

$("#batman").click(function (){
cargarSuperheroe(batman)
   });

$("#wonder").click(function (){
  cargarSuperheroe(wonder)
  });

$("#flash").click(function (){
  cargarSuperheroe(flash)
  });

$("#invisible").click(function (){
  cargarSuperheroe(invisible)
  });

//Habilitá la descarga de cada obra de arte
  $("#guardar").click(function (){
    guardarPixelArt()
  });