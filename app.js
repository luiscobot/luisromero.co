const TARJETA = document.getElementById('ventana');
const CERRARICONO = document.getElementById('tarjeta--cerrar');
const PROYECTOS = document.getElementsByClassName('proyecto');
const boton = document.getElementById('boton');

let datos = [
	{
		titulo : "Diseño adaptable",
		info : "Se realizó un diseño que se adapta a las diferentes pantallas de los dispositivos, para ello se hizo uso de las media queries en CSS.",
		foto : "photo/foto0.png",
		enlace : "https://github.com/unluisco/Project-2-Responsive-Layout"
	},
	{
		titulo : "Galería de fotos interactiva",
		info : "Para este diseño se utilizó una librería JS que nos permite implementar un carrusel, y este se usó para mostrar las diferentes fotografías.",
		foto : "photo/foto1.png",
		enlace : "https://github.com/unluisco/Project-4-Interactive-Photo-Gallery"
	},
	{
		titulo : "Reproductor de video interactivo",
		info : "Al trabajar en el reproductor se usó una librería JS para configurar las diferentes opciones y así tener un reproductor de video de calidad profesional.",
		foto : "photo/foto2.png",
		enlace : "https://github.com/unluisco/Project-6-Interactive-Video-Player"
	},
	{
		titulo : "Juego de adivinanzas",
		info : "Se construyó un juego de adivinanzas utilizando diferentes métodos y funciones en JavaScript para implementar la aleatoriedad a la hora de seleccionar la frase.",
		foto : "photo/foto3.png",
		enlace : "https://github.com/unluisco/Project-7-Build-a-Game-Show-App"
	},
	{
		titulo : "Panel para aplicación web",
		info : "Para este proyecto se aplicó las técnicas de diseño avanzadas con HTML & CSS para lograr un panel que se adapta a las diferentes pantallas.",
		foto : "photo/foto4.png",
		enlace : "https://github.com/unluisco/Project-9-Web-App-Dashboard"
	},
	{
		titulo : "Directorio de empleados",
		info : "Al construir el directorio se hizo uso de la solicitud de datos JSON a una API con JavaScript, y usando los eventos se logró colocar esa información en las tarjetas de cada trabajador.",
		foto : "photo/foto5.png",
		enlace : "https://github.com/unluisco/project-10-Employee-Directory"
	}
];

function agregarDatosATarjeta(objetivo) {
	let proyecto;

	proyecto = objetivo.getAttribute('proyecto');
	TARJETA.children[0].children[0].children[1].textContent = datos[proyecto].titulo;
	TARJETA.children[0].children[0].children[2].textContent = datos[proyecto].info;
	TARJETA.children[0].children[0].children[0].children[0].src = datos[proyecto].foto;
	TARJETA.children[0].children[0].children[0].children[1].href = datos[proyecto].enlace;
}

function mostrarTarjeta() {
	TARJETA.style.display = 'flex';
}

function ocultarTarjeta() {
	TARJETA.style.display = 'none';
}

for (let iterador of PROYECTOS) {
	iterador.addEventListener('click', function (evento) {
		agregarDatosATarjeta(evento.target);
		mostrarTarjeta();
	});

	iterador.style.background = 'url(photo/foto' + iterador.getAttribute('proyecto') + '.png) no-repeat center top';
}

CERRARICONO.addEventListener('click', ocultarTarjeta);

const copy = clipboardCopy;

boton.addEventListener('click', function () {
  copy('hola@luisromero.co')
})
