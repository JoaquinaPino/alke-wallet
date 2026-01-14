$(document).ready(function(){
    let saldo = localStorage.getItem('saldoWallet');

    if (saldo === null) {
        saldo = 50000;
        localStorage.setItem('saldoWallet', saldo);
    }

    const saldoPantalla = $('#account-balance');
    if (saldoPantalla.length > 0) {
        saldoPantalla.text('$' + parseInt(saldo).toLocaleString('es-CL'));
    }

    const usuario = "Joaquina";
    $('#username').text(usuario);
});