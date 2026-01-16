$(document).ready(function(){

    let bd = obtenerDatos();
    const listaContactos = $('#lista-contactos');
    const inputBuscador = $('#buscador-contacto');
    const inputSeleccionado = $('#contacto-seleccionado');

    function renderizarContactos(filtro = "") {
        listaContactos.empty(); 

        const contactosFiltrados = bd.contactos.filter(c => 
            c.nombre.toLowerCase().includes(filtro.toLowerCase())
        );

        if (contactosFiltrados.length === 0) {
            listaContactos.append('<div class="list-group-item text-muted text-center">No se encontraron contactos.</div>');
            return;
        }

        contactosFiltrados.forEach(c => {
            const item = `
                <button type="button" class="list-group-item list-group-item-action contact-item" data-nombre="${c.nombre}">
                    <div class="d-flex w-100 justify-content-between align-items-center">
                        <h6 class="mb-1 fw-bold">${c.nombre}</h6>
                        <small class="text-muted">${c.banco}</small>
                    </div>
                    <small class="text-muted fst-italic">${c.tipo} - N°: ${c.numeroCuenta}</small>
                </button>
            `;
            listaContactos.append(item);
        });
    }

    renderizarContactos();

    inputBuscador.on('keyup', function() {
        const texto = $(this).val();
        renderizarContactos(texto);
    });

    listaContactos.on('click', '.contact-item', function() {

        $('.contact-item').removeClass('active bg-primary text-white');
        $('.contact-item').find('small').removeClass('text-white-50').addClass('text-muted');
        
        $(this).addClass('active bg-primary text-white');
        $(this).find('small').removeClass('text-muted').addClass('text-white-50');
        
        const nombre = $(this).data('nombre');
        inputSeleccionado.val(nombre);
    });

    $('#form-nuevo-contacto').on('submit', function(e) {
        e.preventDefault();

        const nuevoContacto = {
            id: Date.now(),
            nombre: $('#nuevo-nombre').val(),
            rut: $('#nuevo-rut').val(),
            banco: $('#nuevo-banco').val(),
            tipo: $('#nuevo-tipo').val(),
            numeroCuenta: $('#nuevo-num-cuenta').val()
        };

        bd.contactos.push(nuevoContacto);
        guardarDatos(bd);

        renderizarContactos();
        
        $('#modalNuevoContacto').modal('hide');
        $('#form-nuevo-contacto')[0].reset();
        alert("Contacto agregado exitosamente.");
    });

    $('#sendmoney-form').on('submit', function(e){
        e.preventDefault();

        const contactoNombre = inputSeleccionado.val();
        const monto = parseInt($('#amount-input').val());

        if (!contactoNombre) {
            alert('Por favor haz click en un contacto de la lista para seleccionarlo.');
            return;
        }
        if (isNaN(monto) || monto <= 0) {
            alert('Por favor ingresa un monto válido.');
            return;
        }

        bd = obtenerDatos();
        const saldoActual = bd.usuario.saldo;

        if (monto > saldoActual) {
            alert('Fondos insuficientes.');
            return;
        }

        bd.usuario.saldo = saldoActual - monto;

        const nuevaTransaccion = {
            id: Date.now(),
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