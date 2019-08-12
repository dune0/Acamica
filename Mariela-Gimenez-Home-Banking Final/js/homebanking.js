//Declaración de variables
var nombreUsuario = "Mariela Gimenez";
var saldoCuenta = 5000;
var limiteExtraccion = 1000;

//Servicios a pagar
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Cuentas para transferencias
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Iniciar Sesión
var codigoDeSeguridad = 2103;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones Creadas

function sumarDinero(montoIngresado) {
    saldoCuenta += montoIngresado;
}


function restarDinero(montoIngresado) {
    saldoCuenta -= montoIngresado;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese el nuevo límite de extracción"));
    console.log("Nuevo limite " + nuevoLimite);

    limiteExtraccion = nuevoLimite;
    console.log("Limite " + limiteExtraccion);


    actualizarLimiteEnPantalla();
    alert("El nuevo limite es " + limiteExtraccion);
}


function extraerDinero() {
    var montoIngresado = parseInt(prompt("Ingrese un monto"));
    console.log("Monto Ingresado " + montoIngresado);

    var saldoAnterior = saldoCuenta;
    console.log("Saldo Anterior " + saldoAnterior);


    if (montoIngresado > saldoAnterior) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
    } else if (montoIngresado > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción");
    } else if (montoIngresado % 100) {
        alert("Solo puedes extraer billetes de 100");
    } else {
        restarDinero(montoIngresado);
        actualizarSaldoEnPantalla();
        console.log("Saldo Actual " + saldoCuenta);
        alert("Has retirado $" + " " + montoIngresado + "\n" + "Saldo anterior $" + " " + saldoAnterior + "\n" + "Saldo actual $" + " " + saldoCuenta);
    }

}


function comprarDolares() {
    var valorDeDolar = 47;
    var montoIngresado = parseInt(prompt("Ingrese el monto que desea invertir"));
    console.log("Monto Ingresado " + montoIngresado);

    var saldoAnterior = saldoCuenta;
    console.log("Saldo Anterior " + saldoAnterior);


    if (montoIngresado > saldoAnterior) {
        alert("No hay saldo disponible para comprar dólares")
    } else {
        restarDinero(montoIngresado);
        //var saldoEnDolares = montoIngresado;
        var inversion = montoIngresado / valorDeDolar;
        var dineroInvertido = inversion.toFixed(2);
        console.log(dineroInvertido);
        document.getElementById("saldo-dolares").innerHTML = "Actualmente tienes u$s " + dineroInvertido + " en tu cuenta";
        alert("Saldo en dólares u$s" + " " + dineroInvertido);
    }

    actualizarSaldoEnPantalla();
}

function depositarDinero() {
    var montoIngresado = parseInt(prompt("Ingrese un monto"));
    console.log("Monto Ingresado " + montoIngresado);

    var saldoAnterior = saldoCuenta;
    console.log("Saldo Anterior " + saldoAnterior);

    sumarDinero(montoIngresado);
    actualizarSaldoEnPantalla();
    console.log("Saldo Actual " + saldoCuenta);

    alert("Has depositado $" + " " + montoIngresado + "\n" + "Saldo anterior $" + " " + saldoAnterior + "\n" + "Saldo actual $" + " " + saldoCuenta);

}

function realizarPago(servicio) {
    if (saldoCuenta > servicio) {
        saldoCuenta -= servicio;
    } else {
        alert("No hay suficientebsaldo en tu cuenta para pagar este servicio");
    }
}

function pagarServicio() {
    var servicio = parseInt(prompt("Ingrese el número que corresponda con el servicio que querés pagar" + "\n" + "1 - Agua" + "\n" + "2 - Luz" + "\n" + "3 - Internet" + "\n" + "4 - Teléfono"));
    var saldoAntesDeAbonar = saldoCuenta; //saldo anterior
    //var servicio -  dinero descontado
    var saldoDespuesDeAbonar = saldoCuenta - servicio; // saldo actual
    console.log(servicio);
    switch (servicio) {
        case 1:
            servicio = agua;
            alert("Has pagado el servicio de Agua" + "\n" + "Saldo Anterior $" + " " + saldoAntesDeAbonar + "\n" + "Dinero descontado $" + " " + servicio + "\n" + "Saldo actual $" + " " + saldoDespuesDeAbonar);
            realizarPago(servicio);
            break;
        case 2:
            servicio = luz;
            alert("Has pagado el servicio de Luz" + "\n" + "Saldo Anterior $" + " " + saldoAntesDeAbonar + "\n" + "Dinero descontado $" + " " + servicio + "\n" + "Saldo actual $" + " " + saldoDespuesDeAbonar);
            realizarPago(servicio);
            break;
        case 3:
            servicio = internet;
            alert("Has pagado el servicio de Internet" + "\n" + "Saldo Anterior $" + " " + saldoAntesDeAbonar + "\n" + "Dinero descontado $" + " " + servicio + "\n" + "Saldo actual $" + " " + saldoDespuesDeAbonar);
            realizarPago(servicio);
            break;
        case 4:
            servicio = telefono;
            alert("Has pagado el servicio de Teléfono" + "\n" + "Saldo Anterior $" + " " + saldoAntesDeAbonar + "\n" + "Dinero descontado $" + " " + servicio + "\n" + "Saldo actual $" + " " + saldoDespuesDeAbonar);
            realizarPago(servicio);
            break;
        default:
            alert("No existe el servicio que se ha seleccionado");
    }
    actualizarSaldoEnPantalla();
}

function transferirDinero() {
    var transferencia = parseInt(prompt("Ingrese el monto que desea transferir"));
    console.log(transferencia);


    if (saldoCuenta > transferencia) {
        var cuentaAmiga = parseInt(prompt("Ingrese el número de cuenta al que desea transferir el dinero"));
        console.log(cuentaAmiga);
        if (cuentaAmiga === cuentaAmiga1 || cuentaAmiga === cuentaAmiga2) {
            saldoCuenta -= transferencia;
            alert("Se han transferido: $" + transferencia + "\n" + "Cuenta destino: " + cuentaAmiga);
        } else {
            alert("solo puede transferirse dinero a una cuenta amiga");
        }
    } else {
        alert("No puede transferirse esa cantidad de dinero");
    }

    actualizarSaldoEnPantalla();
}


function iniciarSesion() {
    var codigoDeCuenta = parseInt(prompt("Ingrese el código de seguridad"));
    console.log(codigoDeCuenta);
    if (codigoDeSeguridad === codigoDeCuenta) {
        alert("Bienvenido/a Mariela Gimenez ya puedes comenzar a realizar operaciones");
    } else {
        saldoCuenta = 0;
        alert("Código incorrecto: Tu dinero ha sido retenido por cuestiones de seguridad");
    }

}
iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}