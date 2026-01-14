$(document).ready(function(){

    $('#login-form').on('submit', function(e){
        e.preventDefault();

        const email = $('#email').val();
        const password = $('#password').val();

        if (email === '' || password === ''){
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Simulo credenciales, mejorar
        console.log('Login exitoso. Usuario: "' + email);

        window.location.href = 'menu.html';
    });
});
