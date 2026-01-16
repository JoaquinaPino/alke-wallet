$(document).ready(function(){
    const bd = obtenerDatos();
    const usuario = bd.usuario;

    $('#username').text(usuario.nombre);

    $('#user-account').text(usuario.numeroCuenta);

    const saldoFormateado = '$' + parseInt(usuario.saldo).toLocaleString('es-CL');
    $('#account-balance').text(saldoFormateado);
});