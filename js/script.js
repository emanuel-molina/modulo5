document.addEventListener("DOMContentLoaded", function () {

    // parte 1

    console.log("Parte 1: La página cargó correctamente desde script.js.");


    // parte 2

    let nombrePortal = "Centro Educativo de Fraude Digital";
    let totalAlertas = 3;
    let portalActivo = true;

    let datosPortal = {
        tema: "Fraude digital bancario",
        enfoque: "Prevención y educación",
        ubicacion: "Puerto Rico"
    };

    let panelPortal = document.getElementById("panelPortal");

    panelPortal.innerHTML =
        "<h3>Datos del portal</h3>" +
        "<p>Nombre: " + nombrePortal + "</p>" +
        "<p>Total de alertas: " + totalAlertas + "</p>" +
        "<p>Portal activo: " + portalActivo + "</p>" +
        "<p>Tema: " + datosPortal.tema + "</p>" +
        "<p>Enfoque: " + datosPortal.enfoque + "</p>" +
        "<p>Ubicación: " + datosPortal.ubicacion + "</p>";

    console.log("Parte 2: Se cargaron los datos principales del portal.");


    // parte 3

    let alertas = [
        {
            nombre: "ATH Móvil falso",
            descripcion: "Mensaje donde alguien pide enviar o devolver dinero con urgencia.",
            consejo: "Verifica directamente en la aplicación oficial.",
            riesgo: "alto"
        },
        {
            nombre: "Phishing bancario",
            descripcion: "Correo o enlace que aparenta ser de un banco para robar información.",
            consejo: "No abras enlaces sospechosos.",
            riesgo: "alto"
        },
        {
            nombre: "Cargo no reconocido",
            descripcion: "Movimiento extraño en una tarjeta o cuenta bancaria.",
            consejo: "Revisa tus movimientos y reporta al banco.",
            riesgo: "alto"
        }
    ];

    let contenedorAlertas = document.getElementById("contenedorAlertas");

    for (let i = 0; i < alertas.length; i++) {
        let columna = document.createElement("div");
        columna.className = "col-md-4 mb-3";

        columna.innerHTML =
            '<div class="card">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + alertas[i].nombre + '</h5>' +
                    '<p class="card-text">' + alertas[i].descripcion + '</p>' +
                    '<p><strong>Consejo:</strong> ' + alertas[i].consejo + '</p>' +
                    '<span class="badge bg-danger">Riesgo ' + alertas[i].riesgo + '</span>' +
                '</div>' +
            '</div>';

        contenedorAlertas.appendChild(columna);

        console.log("Parte 3: Se creó una tarjeta para " + alertas[i].nombre + ".");
    }


    // parte 4

    function evaluarSituacion(tipo) {
        if (tipo === "athmovil") {
            return {
                mensaje: "Riesgo alto: confirma en ATH Móvil antes de enviar o devolver dinero.",
                recomendacion: "No actúes por presión. Verifica primero desde la aplicación oficial.",
                porcentaje: 90
            };
        } else if (tipo === "phishing") {
            return {
                mensaje: "Riesgo alto: puede ser un intento de robar tus credenciales.",
                recomendacion: "No abras enlaces ni escribas contraseñas en páginas desconocidas.",
                porcentaje: 95
            };
        } else if (tipo === "tarjeta") {
            return {
                mensaje: "Riesgo alto: puede haber un cargo no autorizado.",
                recomendacion: "Revisa la cuenta y reporta el cargo al banco.",
                porcentaje: 85
            };
        } else {
            return {
                mensaje: "Riesgo moderado: la situación necesita verificación.",
                recomendacion: "Guarda evidencia y consulta con tu banco antes de actuar.",
                porcentaje: 60
            };
        }
    }

    let btnEvaluar = document.getElementById("btnEvaluar");
    let resultadoEvaluacion = document.getElementById("resultadoEvaluacion");
    let barraRiesgo = document.getElementById("barraRiesgo");
    let recomendacionFinal = document.getElementById("recomendacionFinal");

    btnEvaluar.addEventListener("click", function () {
        let tipoSeleccionado = document.getElementById("tipoFraude").value;
        let evaluacion = evaluarSituacion(tipoSeleccionado);

        resultadoEvaluacion.textContent = evaluacion.mensaje;
        resultadoEvaluacion.className = "alert alert-warning";

        barraRiesgo.style.width = evaluacion.porcentaje + "%";
        barraRiesgo.textContent = evaluacion.porcentaje + "%";

        recomendacionFinal.textContent = evaluacion.recomendacion;

        console.log("Parte 4: Se evaluó la opción seleccionada: " + tipoSeleccionado + ".");
    });


    // parte 5

    let pasos = [
        {
            titulo: "Paso 1",
            texto: "Guardar evidencia del mensaje o transacción."
        },
        {
            titulo: "Paso 2",
            texto: "Verificar directamente con el banco o aplicación oficial."
        },
        {
            titulo: "Paso 3",
            texto: "No enviar dinero por presión."
        },
        {
            titulo: "Paso 4",
            texto: "Cambiar contraseñas si se compartió información."
        },
        {
            titulo: "Paso 5",
            texto: "Reportar cargos o pagos no reconocidos."
        }
    ];

    let listaPasos = document.getElementById("listaPasos");
    let contadorPasos = 0;

    while (contadorPasos < pasos.length) {
        let columnaPaso = document.createElement("div");
        columnaPaso.className = "col-md-4 mb-3";

        columnaPaso.innerHTML =
            '<div class="paso-card">' +
                '<span class="badge bg-primary">' + pasos[contadorPasos].titulo + '</span>' +
                '<p>' + pasos[contadorPasos].texto + '</p>' +
            '</div>';

        listaPasos.appendChild(columnaPaso);

        console.log("Parte 5: Se cargó " + pasos[contadorPasos].titulo + ".");

        contadorPasos++;
    }


    // parte 5

    let verificaciones = [
        "Evidencia identificada",
        "Banco pendiente de contacto",
        "Recomendaciones cargadas"
    ];

    let revisionVisual = document.getElementById("revisionVisual");
    let contadorRevision = 0;
    let textoRevision = "";

    do {
        let columnaRevision = document.createElement("div");
        columnaRevision.className = "col-md-4 mb-3";

        columnaRevision.innerHTML =
            '<div class="revision-card">' +
                '<span class="check">✓</span>' +
                '<p>' + verificaciones[contadorRevision] + '</p>' +
            '</div>';

        revisionVisual.appendChild(columnaRevision);

        textoRevision = "Revisión completada: el plan básico de acción fue cargado correctamente.";

        console.log("Parte 5: Se completó la revisión visual: " + verificaciones[contadorRevision] + ".");

        contadorRevision++;

    } while (contadorRevision < verificaciones.length);

    let mensajeRevision = document.getElementById("mensajeRevision");
    mensajeRevision.textContent = textoRevision;
    mensajeRevision.className = "alert alert-success";


    // parte 6

    let infoCaso = document.getElementById("infoCaso");

    let datoGeneral = "Dato general: la página trata sobre fraude digital bancario.";

    function mostrarInfoCaso() {
        let datoCaso = "Dato del caso: el usuario evalúa una situación sospechosa.";

        if (true) {
            let datoRevision = "Dato de revisión: se recomienda verificar antes de actuar.";

            let itemRevision = document.createElement("li");
            itemRevision.textContent = datoRevision;
            infoCaso.appendChild(itemRevision);

            console.log("Parte 6: Se cargó un dato de revisión.");
        }

        let itemCaso = document.createElement("li");
        itemCaso.textContent = datoCaso;
        infoCaso.appendChild(itemCaso);

        console.log("Parte 6: Se cargó un dato del caso.");
    }

    let itemGeneral = document.createElement("li");
    itemGeneral.textContent = datoGeneral;
    infoCaso.appendChild(itemGeneral);

    console.log("Parte 6: Se cargó un dato general.");

    mostrarInfoCaso();


    // parte 6

    function crearContador() {
        let totalIntentos = 0;

        return function () {
            totalIntentos++;
            return totalIntentos;
        };
    }

    let registrarIntento = crearContador();

    let btnContador = document.getElementById("btnContador");
    let contador = document.getElementById("contador");
    let mensajeContador = document.getElementById("mensajeContador");

    btnContador.addEventListener("click", function () {
        let total = registrarIntento();

        contador.textContent = total;
        mensajeContador.textContent = "Intento registrado correctamente. Total actual: " + total;
        mensajeContador.className = "alert alert-success";

        console.log("Parte 6: Se registró un intento número " + total + ".");
    });

});