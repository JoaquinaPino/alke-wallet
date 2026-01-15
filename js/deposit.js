$(document).ready(function(){

    $('#deposit-form').on('submit', function(e){
        e.preventDefault();

        const montoIngresado = $('#deposit-amount').val();
        const monto = parseInt(montoIngresado);

        if(isNaN(monto) || monto <= 0 ) {
            alert('Por favor ingrese un monto válido mayor a $0.');
            return;
        }

        let saldoActual = localStorage.getItem('saldoWallet');
        if (!saldoActual) saldoActual = 0;

        const nuevoSaldo = parseInt(saldoActual) + monto;
        
        localStorage.setItem('saldoWallet', nuevoSaldo);

        alert(`¡Depósito exitoso! Has añadido $${monto} a tu cuenta.`);
        window.location.href = 'menu.html';

    });
});