// usar librería JS clipboard-copy.
const copiar = clipboardCopy;
var botonCopiar = document.getElementById("botonCopiar");

botonCopiar.addEventListener("click", () => {
	copiar("hola@luisromero.co");
})

// agregar animación al entrar elemento en ventana gráfica.
var proyectos = document.querySelectorAll(".proyectos .proyecto");

// comprobar si un elemento se encuentra visible en la ventana gráfica.
function enVentana(elemento) {
	var rectangulo = elemento.getBoundingClientRect();
	var html = document.documentElement;

	return (rectangulo.bottom >= 0
			&& rectangulo.right >= 0
			&& rectangulo.top <= html.clientHeight
			&& rectangulo.left <= html.clientWidth);
}

function agregarClaseAElementoEnVentana(elemento, nuevaClase) {
	if (enVentana(elemento)) {
		elemento.classList.add(nuevaClase);
	}
}

window.addEventListener("scroll", () => {
	proyectos.forEach(elemento => {
		agregarClaseAElementoEnVentana(elemento, "animar");
	});
});

// esperar a que la ventana esté enfocada para iniciar animación.
var elementosAnimar = [];
var logoHeader = document.querySelector("header .logo");
var cajaHeader = document.querySelector("header .caja-título");
var h1Header = document.querySelector("header h1");
var proyectosHeader = document.querySelector("header .proyectos-actuales");

elementosAnimar.push(logoHeader, cajaHeader, h1Header, proyectosHeader);

if (document.visibilityState === "visible") {
	elementosAnimar.forEach(elemento => {
		agregarClaseAElementoEnVentana(elemento, "animar");
	});
}

window.addEventListener("visibilitychange", controladorVisibilityChange);

function controladorVisibilityChange() {
	if (document.visibilityState === "visible") {
		elementosAnimar.forEach(elemento => {
			agregarClaseAElementoEnVentana(elemento, "animar");
		});
	}
}

// implementar apertura y cierre de tarjeta.
var tarjeta = document.querySelector(".tarjeta--base");
var iconoCerrar = document.querySelector(".icono--cerrar");
var listaProyectos = document.querySelector(".proyectos");
var listaProyectosEnTarjeta = document.querySelectorAll(".tarjeta--base .proyecto");
var proyectoSeleccionadoAnterior;
var proyectoSeleccionado;

function mostrarTarjeta() {
	tarjeta.scrollTop = 0; // restablecer la posición de la tarjeta antes de cada apertura.
	tarjeta.classList.add("mostrar-tarjeta");
	document.body.classList.add("tarjeta--base--activa");
}

function ocultarTarjeta() {
	tarjeta.classList.remove("mostrar-tarjeta");
	document.body.classList.remove("tarjeta--base--activa");
	proyectoSeleccionadoAnterior.classList.remove("mostrar-proyecto");
}

function tarjetaClic(evento) {
	if (evento.target !== tarjeta) return false;
	ocultarTarjeta();
}

function windowTecla(evento) {
	if (tarjeta.classList.contains("mostrar-tarjeta")) {
		if (evento.key === "Escape") {
			ocultarTarjeta();
		}
	}
}

function seleccionarProyecto(evento) {
	if(evento.target.parentElement.parentElement.parentElement === null) return false;

	else if(evento.target.parentElement.classList.contains("proyecto")) {
		proyectoSeleccionado = evento.target.parentElement.dataset.proyecto;
	}

	else if(evento.target.parentElement.parentElement.classList.contains("proyecto")) {
		proyectoSeleccionado = evento.target.parentElement.parentElement.dataset.proyecto;
	}

	else if(evento.target.parentElement.parentElement.parentElement.classList.contains("proyecto")) {
		proyectoSeleccionado = evento.target.parentElement.parentElement.parentElement.dataset.proyecto;
	}

	mostrarTarjeta();
	mostrarProyecto();
}

function mostrarProyecto() {
	listaProyectosEnTarjeta.forEach( elemento => {
		if (elemento.dataset.proyecto === proyectoSeleccionado) {
			elemento.classList.add("mostrar-proyecto");
			proyectoSeleccionadoAnterior = elemento;
		}
	});
}

listaProyectos.addEventListener("click", seleccionarProyecto);
iconoCerrar.addEventListener("click", ocultarTarjeta);
tarjeta.addEventListener("click", tarjetaClic);
window.addEventListener("keyup", windowTecla);