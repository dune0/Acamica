/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  movimientos: function (x, y, tecla) {
    
    this.x += x;
    this.y += y;
    
    switch(tecla){
      case 'izq': 
        this.sprite = 'imagenes/auto_rojo_izquierda.png';
        this.alto = 15;
        this.ancho = 30;
        break;
      case 'der':
        this.sprite = 'imagenes/auto_rojo_derecha.png';
        this.alto = 15;
        this.ancho = 30;
        break;
      case 'arriba': 
        this.sprite = 'imagenes/auto_rojo_arriba.png';
        this.alto = 30;
        this.ancho = 15;
        break;
      case 'abajo':
        this.sprite = 'imagenes/auto_rojo_abajo.png';
        this.alto = 30;
        this.ancho = 15;
        break;
    }
    
  },
  perdidaDeVidas: function(cantVidas){
    this.vidas -= cantVidas;
  }
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}

var Salida = {
  sprite: 'imagenes/exit.png',
  x: 900,
  y: 500,
  ancho: 40,
  alto: 50,
}

var Salida2 = {
  sprite: 'imagenes/exit.png',
  x: 700,
  y: 500,
  ancho: 40,
  alto: 50,
}