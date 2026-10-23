/* ==================================================
   BOTÓN "CONOCE MÁS SOBRE NOSOTROS"
================================================== */
function iniciarBotonExterno() {
    const botonExterno = document.getElementById("externalBtn");
    if (!botonExterno) return;

    botonExterno.addEventListener("click", () => {
        const continuar = confirm(
            "Vas a abrir el sitio oficial del ITACE en otra pestaña. ¿Quieres continuar?"
        );

        if (continuar) {
            window.open("https://www.itace.edu.mx/", "_blank", "noopener,noreferrer");
        }
    });
}

/* ==================================================
   INSTALACIONES
================================================== */
const instalaciones = [
    {
        nombre: "Entrada del ITACE",
        imagen: "img/instalaciones/entrada.png",
        descripcion: "Acceso principal al ITACE, que da la bienvenida a estudiantes, docentes, personal y visitantes."
    },
    {
        nombre: "Foro del ITACE",
        imagen: "img/instalaciones/foro.png",
        descripcion: "Espacio destinado a presentaciones, expresiones artísticas y actividades culturales que fomentan la participación estudiantil."
    },
    {
        nombre: "Explanada del ITACE",
        imagen: "img/instalaciones/explanada.png",
        descripcion: "Área abierta que permite realizar reuniones, ceremonias, eventos escolares y diversas actividades de la comunidad educativa."
    },
    {
        nombre: "Estacionamiento",
        imagen: "img/instalaciones/estacionamiento.png",
        descripcion: "Espacio destinado al estacionamiento de vehículos del personal y de las personas autorizadas para ingresar al plantel."
    },
    {
        nombre: "Cancha",
        imagen: "img/instalaciones/cancha.png",
        descripcion: "Espacio deportivo destinado a la actividad física, la convivencia y la participación de los estudiantes en actividades recreativas."
    },
    {
        nombre: "Comedor",
        imagen: "img/instalaciones/comedor.png",
        descripcion: "Área destinada al descanso y a la convivencia de los estudiantes durante sus horarios de receso."
    },
    {
        nombre: "Murales",
        imagen: "img/instalaciones/murales.png",
        descripcion: "Expresiones artísticas que decoran las instalaciones y aportan color, creatividad e identidad visual a los espacios escolares."
    },
    {
        nombre: "Baños",
        imagen: "img/instalaciones/restroom.png",
        descripcion: "Instalaciones sanitarias destinadas a la higiene y comodidad de los estudiantes, docentes y demás integrantes de la comunidad escolar."
    },
    {
        nombre: "Plaza del Estudiante",
        imagen: "img/instalaciones/plaza-del-estudiante.png",
        descripcion: "Espacio de convivencia donde los alumnos pueden reunirse, descansar y compartir momentos durante la jornada escolar."
    },
    {
        nombre: "Pasillo",
        imagen: "img/instalaciones/pasillo3.png",
        descripcion: "Espacios de circulación que conectan los distintos edificios y salones, facilitando el desplazamiento dentro del plantel."
    },
    {
        nombre: "Taller de Danza",
        imagen: "img/instalaciones/taller-de-danza.png",
        descripcion: "Espacio dedicado a la expresión corporal y al desarrollo de habilidades artísticas mediante la práctica de diferentes estilos de danza."
    },
    {
        nombre: "Taller de Electrónica / Semiconductores y Microelectrónica",
        imagen: "img/instalaciones/taller-de-electronica.png",
        descripcion: "Área de aprendizaje práctico donde los estudiantes trabajan con circuitos, componentes y dispositivos electrónicos para desarrollar habilidades técnicas."
    },
    {
        nombre: "Taller de Máquinas de Combustión Interna",
        imagen: "img/instalaciones/taller-de-maquinas.png",
        descripcion: "Espacio especializado en el aprendizaje sobre el funcionamiento, diagnóstico y mantenimiento de motores de combustión interna."
    },
    {
        nombre: "Área de Orientación Educativa y Enfermería",
        imagen: "img/instalaciones/orientacion-y-enfermeria.png",
        descripcion: "Áreas destinadas a brindar orientación y apoyo a los estudiantes, así como atención básica ante situaciones relacionadas con su bienestar."
    },
    {
        nombre: "Edificios Administrativos",
        imagen: "img/instalaciones/edificios-administrativos.png",
        descripcion: "Instalaciones donde se realizan actividades de organización, gestión y atención relacionadas con el funcionamiento del plantel."
    },
    {
        nombre: "Auditorio y Centro de Cómputo",
        imagen: "img/instalaciones/auditorio-y-centros-de-computo.png",
        descripcion: "Espacios destinados a actividades académicas, presentaciones y al aprendizaje mediante el uso de equipos de cómputo y herramientas digitales."
    },
    {
        nombre: "Departamentos de Vinculación, Finanzas, Control Escolar, etc.",
        imagen: "img/instalaciones/direccion-vinculacion-finanzas.png",
        descripcion: "Áreas administrativas encargadas de la gestión institucional, los trámites escolares, la administración de recursos y la coordinación de las actividades del plantel."
    },
    {
        nombre: "Bodega de Banda de Guerra",
        imagen: "img/instalaciones/bg-y-talleres.png",
        descripcion: "Espacio destinado al almacenamiento y resguardo de los instrumentos, accesorios y utensilios utilizados por los integrantes de la banda de guerra."
    },
    {
        nombre: "Mural de Generaciones",
        imagen: "img/instalaciones/murales2.png",
        descripcion: "Mural conmemorativo donde los estudiantes dejan la huella de su mano como recuerdo de su generación, creando un símbolo de identidad, pertenencia y unión con el ITACE."
    },
    {
        nombre: "Pasillo trasero de los salones",
        imagen: "img/instalaciones/pasillo2.png",
        descripcion: "Corredor ubicado en la parte posterior de las aulas, rodeado de árboles que aportan sombra y crean un ambiente natural y agradable dentro del plantel."
    },
    {
        nombre: "Plantas",
        imagen: "img/instalaciones/plantas4.png",
        descripcion: "Áreas verdes y elementos naturales que aportan color al entorno escolar y contribuyen a crear un ambiente más agradable."
    }
];

function iniciarCarrusel() {
    const imagenFt = document.getElementById("ft");
    const nombreLugar = document.getElementById("nombre-lugar");
    const descripcionLugar = document.getElementById("descripcion-lugar");
    const contadorFts = document.getElementById("contador-fts");
    const botonAnterior = document.getElementById("ft-anterior");
    const botonSiguiente = document.getElementById("ft-siguiente");

    if (!imagenFt || !nombreLugar || !descripcionLugar || !contadorFts ||
        !botonAnterior || !botonSiguiente) return;

    const raiz = imagenFt.getAttribute("src").split("img/")[0];

    let indiceFt = 0;

    function precargar(indice) {
        const siguiente = instalaciones[(indice + 1) % instalaciones.length];
        const imagenOculta = new Image();
        imagenOculta.src = raiz + siguiente.imagen;
    }

    function mostrarFt(indice) {
        indiceFt = (indice + instalaciones.length) % instalaciones.length;

        const ftActual = instalaciones[indiceFt];

        imagenFt.src = raiz + ftActual.imagen;
        imagenFt.alt = ftActual.nombre;
        imagenFt.dataset.figura = indiceFt;

        nombreLugar.textContent = ftActual.nombre;
        descripcionLugar.textContent = ftActual.descripcion;

        // Actualizar el contador
        contadorFts.textContent =
            String(indiceFt + 1).padStart(2, "0") +
            "/" +
            String(instalaciones.length).padStart(2, "0");

        imagenFt.style.animation = "none";
        void imagenFt.offsetWidth;
        imagenFt.style.animation = "";

        precargar(indiceFt);
    }

    // Botón para regresar a la imagen anterior
    botonAnterior.addEventListener("click", () => {
        mostrarFt(indiceFt - 1);
    });

    // Botón para avanzar a la siguiente imagen
    botonSiguiente.addEventListener("click", () => {
        mostrarFt(indiceFt + 1);
    });

    const seccion = document.getElementById("instalaciones");
    if (seccion) {
        seccion.addEventListener("keydown", (evento) => {
            if (evento.key === "ArrowLeft") mostrarFt(indiceFt - 1);
            if (evento.key === "ArrowRight") mostrarFt(indiceFt + 1);
        });
    }

    mostrarFt(0);
}


/* ==================================================
    REPRODUCTOR MUSICA
================================================== */
function iniciarReproductor() {
    const reproductor = document.getElementById("audio-reproductor");
    const listaCanciones = document.getElementById("lista-canciones");
    const botonPlay = document.getElementById("audio-play");
    const botonAnterior = document.getElementById("audio-anterior");
    const botonSiguiente = document.getElementById("audio-siguiente");
    const tituloCancion = document.getElementById("cancion-titulo");
    const estadoCancion = document.getElementById("cancion-estado");
    const botonMinimizar = document.getElementById("reproductor-minimizar");
    const reproductorMusical = document.getElementById("reproductor-musical");


    if (!reproductor || !listaCanciones || !botonPlay || !botonAnterior ||
        !botonSiguiente || !tituloCancion || !estadoCancion ||
        !botonMinimizar || !reproductorMusical) return;

    function actualizarCancion() {
        const opcion = listaCanciones.options[listaCanciones.selectedIndex];
        tituloCancion.textContent = opcion.textContent.trim();
    }

    // Reproducir audio (solo cuando la persona pulsa un botón)
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

    function cargarSeleccionada(reproducirDespues) {
        reproductor.pause();
        reproductor.src = listaCanciones.value;
        reproductor.load();

        actualizarCancion();
        botonPlay.textContent = "▶";
        estadoCancion.textContent = "Lista para reproducir";

        if (reproducirDespues) {
            reproducirCancion();
        }
    }

    function seleccionarCancion(indice, reproducirDespues) {
        const total = listaCanciones.options.length;
        listaCanciones.selectedIndex = (indice + total) % total;
        cargarSeleccionada(reproducirDespues);
    }

    listaCanciones.addEventListener("change", () => {
        cargarSeleccionada(!reproductor.paused);
    });

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
        estadoCancion.textContent = reproductor.ended ? "Canción terminada" : "En pausa";
    });

    reproductor.addEventListener("ended", () => {
        seleccionarCancion(listaCanciones.selectedIndex + 1, true);
    });

    reproductor.addEventListener("error", () => {
        estadoCancion.textContent = "No se encontró el archivo de audio.";
        botonPlay.textContent = "▶";
    });

    botonSiguiente.addEventListener("click", () => {
        seleccionarCancion(listaCanciones.selectedIndex + 1, true);
    });

    botonAnterior.addEventListener("click", () => {
        seleccionarCancion(listaCanciones.selectedIndex - 1, true);
    });

    // Minimizar o expandir el reproductor
    function minimizarReproductor(minimizar) {
        reproductorMusical.classList.toggle("reproductor-minimizado", minimizar);
        botonMinimizar.textContent = minimizar ? "+" : "−";
        botonMinimizar.setAttribute(
            "aria-label",
            minimizar ? "Expandir reproductor" : "Minimizar reproductor"
        );
    }

    botonMinimizar.addEventListener("click", () => {
        minimizarReproductor(
            !reproductorMusical.classList.contains("reproductor-minimizado")
        );
    });

    reproductor.src = listaCanciones.value;
    actualizarCancion();

    if (window.innerWidth < 700) {
        minimizarReproductor(true);
    }
}


/* ==================================================
 EVITAR AUDIOS Y VIDEOS SIMULTÁNEOS
================================================== */
function evitarMediosSimultaneos() {
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
}
iniciarBotonExterno();
iniciarCarrusel();
iniciarReproductor();
evitarMediosSimultaneos();