$(document).ready(function(){

    $('#sendmoney-form').on('submit', function(e){
        e.preventDefault();

        const contactoNombre = $('#contact-input').val();
        const monto = parseInt($('#amount-input').val());

        if (!contactoNombre) {
            alert('Por favor selecciona un contacto.');
            return;
        }
        if (isNaN(monto) || monto <= 0) {
            alert('Por favor ingresa un monto válido.');
            return;
        }

        const bd = obtenerDatos();
        const saldoActual = bd.usuario.saldo;

        if (monto > saldoActual) {
            alert('Fondos insuficientes para realizar esta transferencia.');
            return;
        }

        bd.usuario.saldo = saldoActual - monto;

        const nuevaTransaccion = {
            id: bd.transacciones.length + 1,
            fecha: new Date().toLocaleDateString(),
            monto: -monto,
            tipo: "egreso",
            descripcion: `Transferencia a ${contactoNombre}`
        };
        bd.transacciones.unshift(nuevaTransaccion);

        guardarDatos(bd);

        alert(`Transferencia exitosa de $${monto} a ${contactoNombre}.`);
        window.location.href = 'menu.html';
    });
});