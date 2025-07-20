let usuarios = [];
// Este script maneja el inicio de sesión y registro de usuarios en una aplicación web.
let formLogin = document.getElementById('form-login');
let message = document.getElementById('message');
let modoRegistroCB = document.getElementById('modoRegistro');

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let modoRegistro = modoRegistroCB.checked;

    if (!username) {
        message.textContent = 'Por favor, completá todos los campos.';
        return;
    }

    let usuario = usuarios.find(function (u) {
        return u.username === username;
    });

    if (modoRegistro) {
        if (usuario) {
            message.textContent = 'Ese usuario ya existe. Elegí otro nombre o desmarcá "Quiero registrarme".';
            return;
        }
        usuarios.push({ username: username, password: password });
        message.textContent = `Usuario ${username} registrado con éxito. Ya podés iniciar sesión.`;
        modoRegistroCB.checked = false;
        formLogin.reset();
        return;
    }

    if (!usuario) {
        message.textContent = 'El usuario no existe. Marcá "Quiero registrarme" para crearlo.';
        return;
    }

    if (usuario.password !== password) {
        message.textContent = 'Contraseña incorrecta.';
        return;
    }

    message.textContent = `Bienvenido, ${username}! Has iniciado sesión.`;
    mostrarSecciones();
    formLogin.reset();
});

function mostrarSecciones() {
    document.getElementById('auth').style.display = 'none';
}
