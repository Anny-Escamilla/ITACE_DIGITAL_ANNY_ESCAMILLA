document.getElementById("externalBtn").addEventListener("click", () => {
    if (
        confirm("Vas a abrir el sitio oficial del ITACE en otra pestaña. ¿Quieres continuar?")
    ) {
        window.open(
            "https://www.itace.edu.mx/","_blank","noopener,noreferrer"
        );
    }
});

// INSTALACIONES
const imagenFt = document.getElementById("ft");
const nombreLugar = document.getElementById("nombre-lugar");
const descripcionLugar = document.getElementById("descripcion-lugar");
const contadorFts = document.getElementById("contador-fts");

let indiceFt = 0;
const instalaciones = [
  {
    nombre: "Entrada del ITACE", 
    imagen: "img/instalaciones/entrada.png",
    descripcion: "Acceso principal al ITACE, que da la bienvenida a estudiantes, docentes, personal y visitantes."
  },
  {
    nombre: "Foro del ITACE", 
    imagen: "img/instalaciones/foro.png",
    descripcion: "Espacio destinado a presentaciones, expresiones artísticas y actividades culturales que fomentan la participación estudiantil.",
  },
  {
    nombre: "Explanada del ITACE", 
    imagen: "img/instalaciones/explanada.png",
    descripcion: "Área abierta que permite realizar reuniones, ceremonias, eventos escolares y diversas actividades de la comunidad educativa.",
  },
  {
    nombre: "Estacionamiento", 
    imagen: "img/instalaciones/estacionamiento.png",
    descripcion: "Espacio destinado al estacionamiento de vehículos del personal y de las personas autorizadas para ingresar al plantel.",
  },
  {
    nombre: "Cancha", 
    imagen: "img/instalaciones/cancha.png",
    descripcion: "Espacio deportivo destinado a la actividad física, la convivencia y la participación de los estudiantes en actividades recreativas.",
  },
  {
    nombre: "Comedor", 
    imagen: "img/instalaciones/comedor.png",
    descripcion: "Área destinada al descanso y a la convivencia de los estudiantes durante sus horarios de receso.",
  },
  {
    nombre: "Murales", 
    imagen: "img/instalaciones/murales.png",
    descripcion: "Expresiones artísticas que decoran las instalaciones y aportan color, creatividad e identidad visual a los espacios escolares.",
  },
  {
    nombre: "Baños", 
    imagen: "img/instalaciones/restroom.png",
    descripcion: "Instalaciones sanitarias destinadas a la higiene y comodidad de los estudiantes, docentes y demás integrantes de la comunidad escolar.",
  },
  {
    nombre: "Plaza del Estudiante", 
    imagen: "img/instalaciones/plaza-del-estudiante.png",
    descripcion: "Espacio de convivencia donde los alumnos pueden reunirse, descansar y compartir momentos durante la jornada escolar.",
  },
  {
    nombre: "Pasillo", 
    imagen: "img/instalaciones/pasillo3.png",
    descripcion: "Espacios de circulación que conectan los distintos edificios y salones, facilitando el desplazamiento dentro del plantel.",
  },
  {
    nombre: "Taller de Danza", 
    imagen: "img/instalaciones/taller-de-danza.png",
    descripcion: "Espacio dedicado a la expresión corporal y al desarrollo de habilidades artísticas mediante la práctica de diferentes estilos de danza.",
  },
  {
    nombre: "Taller de Electrónica/Semiconductores y Microelectrónica", 
    imagen: "img/instalaciones/taller-de-electronica.png",
    descripcion: "Área de aprendizaje práctico donde los estudiantes trabajan con circuitos, componentes y dispositivos electrónicos para desarrollar habilidades técnicas.",
  },
  {
    nombre: "Taller de Maquinas de Combustión Interna", 
    imagen: "img/instalaciones/taller-de-maquinas.png",
    descripcion: "Espacio especializado en el aprendizaje sobre el funcionamiento, diagnóstico y mantenimiento de motores de combustión interna.",
  },
  {
    nombre: "Área de Orientación Educativa y Enfermeria", 
    imagen: "img/instalaciones/orientacion-y-enfermeria.png",
    descripcion: "Áreas destinadas a brindar orientación y apoyo a los estudiantes, así como atención básica ante situaciones relacionadas con su bienestar.",
  },
  {
    nombre: "Edificios Administrativos", 
    imagen: "img/instalaciones/edificios-administrativos.png",
    descripcion: "Instalaciones donde se realizan actividades de organización, gestión y atención relacionadas con el funcionamiento del plantel.",
  },
  {
    nombre: "Auditorio y Centro de Computo", 
    imagen: "img/instalaciones/auditorio-y-centros-de-computo.png",
    descripcion: "Espacios destinados a actividades académicas, presentaciones y al aprendizaje mediante el uso de equipos de cómputo y herramientas digitales.",
  },
  {
    nombre: "Departamentos de Vinvulacion, Finanzas, Control Escolar, etc.", 
    imagen: "img/instalaciones/direccion-vinculacion-finanzas.png",
    descripcion: "Áreas administrativas encargadas de la gestión institucional, los trámites escolares, la administración de recursos y la coordinación de las actividades del plantel.",
  },
  {
    nombre: "Bodega de Banda de Guerra", 
    imagen: "img/instalaciones/bg-y-talleres.png",
    descripcion: "Espacio destinado al almacenamiento y resguardo de los instrumentos, accesorios y utensilios utilizados por los integrantes de la banda de guerra.",
  },
  {
    nombre: "Mural de Generaciones", 
    imagen: "img/instalaciones/murales2.png",
    descripcion: "Mural conmemorativo donde los estudiantes dejan la huella de su mano como recuerdo de su generación, creando un símbolo de identidad, pertenencia y unión con el ITACE.",
  },
  {
    nombre: "Pasillo trasero de los salones", 
    imagen: "img/instalaciones/pasillo2.png",
    descripcion: "Corredor ubicado en la parte posterior de las aulas, rodeado de árboles que aportan sombra y crean un ambiente natural y agradable dentro del plantel.",
  },
  {
    nombre: "Plantas", 
    imagen: "img/instalaciones/plantas4.png",
    descripcion: "Áreas verdes y elementos naturales que aportan color al entorno escolar y contribuyen a crear un ambiente más agradable.",
  },
];

function mostrarFt(indice) {
    indiceFt = (indice + instalaciones.length) % instalaciones.length;

    const ftActual = instalaciones[indiceFt];

    imagenFt.src = ftActual.imagen;
    imagenFt.alt = ftActual.nombre;
    imagenFt.dataset.figura = indiceFt;

    nombreLugar.textContent = ftActual.nombre;
    descripcionLugar.textContent = ftActual.descripcion;

    // Actualizar el contador
    contadorFts.textContent =
        String(indiceFt + 1).padStart(2, "0") +
        "/" +
        String(instalaciones.length).padStart(2, "0");

    // Reiniciar la animación de la imagen
    imagenFt.style.animation = "none";
    imagenFt.offsetWidth;
    imagenFt.style.animation = "";
}

// Botón para regresar a la imagen anterior
document.getElementById("ft-anterior").addEventListener("click", () => {
    mostrarFt(indiceFt - 1);
});

// Botón para avanzar a la siguiente imagen
document.getElementById("ft-siguiente").addEventListener("click", () => {
    mostrarFt(indiceFt + 1);
});

mostrarFt(0);

/* ==================================================
   REPRODUCTOR MUSICAL
================================================== */

const reproductor = document.getElementById("audio-reproductor");
const listaCanciones = document.getElementById("lista-canciones");
const botonPlay = document.getElementById("audio-play");
const botonAnterior = document.getElementById("audio-anterior");
const botonSiguiente = document.getElementById("audio-siguiente");
const tituloCancion = document.getElementById("cancion-titulo");
const estadoCancion = document.getElementById("cancion-estado");
const botonMinimizar = document.getElementById("reproductor-minimizar");
const reproductorMusical = document.getElementById("reproductor-musical");

const nombresCanciones = [
    "Música de fondo",
    "Himno del ITACE",
    "Himno de Tamaulipas"
];

// Cargar la canción seleccionada inicialmente
reproductor.src = listaCanciones.value;

function actualizarCancion() {
    const indice = listaCanciones.selectedIndex;
    tituloCancion.textContent = nombresCanciones[indice];
}

// Seleccionar otra canción
listaCanciones.addEventListener("change", () => {
    const estabaReproduciendo = !reproductor.paused;

    reproductor.pause();
    reproductor.src = listaCanciones.value;
    reproductor.load();

    actualizarCancion();
    botonPlay.textContent = "▶";
    estadoCancion.textContent = "Lista para reproducir";

    // Si ya estaba sonando, reproducir la nueva canción
    if (estabaReproduciendo) {
        reproducirCancion();
    }
});

// Reproducir audio
async function reproducirCancion() {
    try {
        await reproductor.play();
    } catch (error) {
        estadoCancion.textContent =
            "No se pudo reproducir. Revisa el archivo de audio.";

        botonPlay.textContent = "▶";
        console.error("Error de reproducción:", error);
    }
}

// Botón de reproducir y pausar
botonPlay.addEventListener("click", () => {
    if (reproductor.paused) {
        reproducirCancion();
    } else {
        reproductor.pause();
    }
});

// Cambiar el estado visual del reproductor
reproductor.addEventListener("play", () => {
    botonPlay.textContent = "Ⅱ";
    estadoCancion.textContent = "Reproduciendo ahora";
});

reproductor.addEventListener("pause", () => {
    botonPlay.textContent = "▶";

    if (reproductor.ended) {
        estadoCancion.textContent = "Canción terminada";
    } else {
        estadoCancion.textContent = "En pausa";
    }
});

reproductor.addEventListener("ended", () => {
    siguienteCancion();
});

// Cambiar de canción
function seleccionarCancion(indice) {
    const total = listaCanciones.options.length;

    listaCanciones.selectedIndex =
        (indice + total) % total;

    listaCanciones.dispatchEvent(new Event("change"));
}

function siguienteCancion() {
    seleccionarCancion(listaCanciones.selectedIndex + 1);
    reproducirCancion();
}

function anteriorCancion() {
    seleccionarCancion(listaCanciones.selectedIndex - 1);
    reproducirCancion();
}

botonSiguiente.addEventListener("click", siguienteCancion);
botonAnterior.addEventListener("click", anteriorCancion);

// Minimizar o expandir el reproductor
botonMinimizar.addEventListener("click", () => {
    const minimizado = reproductorMusical.classList.toggle(
        "reproductor-minimizado"
    );

    botonMinimizar.textContent = minimizado ? "+" : "−";

    botonMinimizar.setAttribute(
        "aria-label",
        minimizado
            ? "Expandir reproductor"
            : "Minimizar reproductor"
    );
});

// Mostrar el título inicial
actualizarCancion();


/* ==================================================
   EVITAR AUDIOS Y VIDEOS SIMULTÁNEOS
================================================== */

const medios = document.querySelectorAll("audio, video");

medios.forEach((medio) => {
    medio.addEventListener("play", () => {
        medios.forEach((otroMedio) => {
            if (otroMedio !== medio && !otroMedio.paused) {
                otroMedio.pause();
            }
        });
    });
});
