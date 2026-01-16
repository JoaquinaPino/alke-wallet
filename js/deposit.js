$(document).ready(function(){

    $('#deposit-form').on('submit', function(e){
        e.preventDefault();

        const montoIngresado = $('#deposit-amount').val();
        const monto = parseInt(montoIngresado);

        if(isNaN(monto) || monto <= 0 ) {
            alert('Por favor ingrese un monto válido mayor a $0.');
            return;
        }

        const bd = obtenerDatos();
        
        bd.usuario.saldo = parseInt(bd.usuario.saldo) + monto;

        const nuevaTransaccion = {
            id: bd.transacciones.length + 1,
            fecha: new Date().toLocaleDateString(),
            monto: monto,
            tipo: "ingreso",
            descripcion: "Depósito en cuenta"
        };
        bd.transacciones.push(nuevaTransaccion);

        guardarDatos(bd);

        alert(`¡Depósito exitoso! Has añadido $${monto} a tu cuenta.`);
        window.location.href = 'menu.html';
    });
});