$(document).ready(function(){

    $('#sendmoney-form').on('submit', function(e){
        e.preventDefault();

        const contacto = $('#contact-input').val();
        const monto = parseInt($('#amount-input').val());

        if (!contacto) {
            alert('Por favor selecciona un contacto.');
            return;
        }
        if (isNaN(monto) || monto <= 0) {
            alert('Por favor ingresa un monto válido.')
            return;
        }

        let saldoActual = parseInt(localStorage.getItem('saldoWallet')) || 0;

        if (monto > saldoActual) {
            alert('Fondos insuficientes para realizar esta transferencia.');
            return;
        }

        const nuevoSaldo = saldoActual - monto;
        localStorage.setItem('saldoWallet', nuevoSaldo);

        alert(`Transferencia exitosa de $${monto} a ${contacto}.`);
        window.location.href = 'menu.html';
    });
});