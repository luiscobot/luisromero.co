const TARJETA = document.getElementById('ventana');
const CERRARICONO = document.getElementById('tarjeta--cerrar');
const PROYECTOS = document.getElementsByClassName('proyecto');

function mostrarTarjeta() {
	TARJETA.style.display = 'flex';
}

function ocultarTarjeta() {
	TARJETA.style.display = 'none';
}

for (let iterador of PROYECTOS) {
	iterador.addEventListener('click', function (evento) {
		mostrarTarjeta();
	});
}

CERRARICONO.addEventListener('click', ocultarTarjeta);
