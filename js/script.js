// archivo interactivo de la pagina de fraude digital bancario
// cada bloque indica que seccion visual de la website modifica

document.addEventListener("DOMContentLoaded", function () {

    // esta funcion principal espera que el html cargue completo antes de ejecutar el codigo
    // afecta a toda la pagina porque evita errores al buscar elementos por id


    // =====================================================
    // seccion 3: resumen del portal
    // afecta al div id="panelResumen"
    // proposito de la tarea: practica variables, tipos de datos, arreglo de objetos y loop for
    // esta parte crea tarjetas visuales con informacion general del portal
    // =====================================================

    let nombrePortal = "Seguridad Bancaria";
    let cantidadTemas = 3;
    let portalActivo = true;

    let resumen = [
        {
            titulo: "Portal",
            valor: nombrePortal,
            detalle: "guía educativa para usuarios bancarios"
        },
        {
            titulo: "Temas",
            valor: cantidadTemas,
            detalle: "fraudes principales explicados"
        },
        {
            titulo: "Estado",
            valor: portalActivo ? "activo" : "inactivo",
            detalle: "contenido disponible para revisión"
        }
    ];

    let panelResumen = document.getElementById("panelResumen");

    for (let i = 0; i < resumen.length; i++) {
        let columna = document.createElement("div");
        columna.className = "col-md-4 mb-3";

        columna.innerHTML =
            '<div class="card">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + resumen[i].titulo + '</h5>' +
                    '<p class="card-text display-6">' + resumen[i].valor + '</p>' +
                    '<span class="badge bg-info text-dark">' + resumen[i].detalle + '</span>' +
                '</div>' +
            '</div>';

        panelResumen.appendChild(columna);
    }


    // =====================================================
    // seccion 4: tipos de fraude mas comunes
    // afecta al div id="tarjetasFraude"
    // proposito de la tarea: practica arreglos, objetos y loop for
    // esta parte crea las tarjetas de ath movil, phishing y fraude con tarjetas
    // =====================================================

    let fraudes = [
        {
            nombre: "ath móvil",
            descripcion: "mensajes donde alguien pide devolver dinero o enviar un pago con urgencia.",
            nivel: "alto"
        },
        {
            nombre: "phishing bancario",
            descripcion: "correos o enlaces falsos que aparentan ser de una institución financiera.",
            nivel: "alto"
        },
        {
            nombre: "fraude con tarjetas",
            descripcion: "cargos no reconocidos, compras no autorizadas o uso indebido de la tarjeta.",
            nivel: "alto"
        }
    ];

    let tarjetasFraude = document.getElementById("tarjetasFraude");

    for (let i = 0; i < fraudes.length; i++) {
        let columna = document.createElement("div");
        columna.className = "col-md-4 mb-3";

        columna.innerHTML =
            '<div class="card">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + fraudes[i].nombre + '</h5>' +
                    '<p class="card-text">' + fraudes[i].descripcion + '</p>' +
                    '<span class="badge bg-danger">cuidado ' + fraudes[i].nivel + '</span>' +
                '</div>' +
            '</div>';

        tarjetasFraude.appendChild(columna);
    }


    // =====================================================
    // seccion 6: evaluador de situacion sospechosa
    // afecta al select id="tipoFraude", boton id="btnEvaluar",
    // mensaje id="resultado" y barra id="barraRiesgo"
    // proposito de la tarea: practica funcion, if, else if, else y evento click
    // la funcion evaluarSituacion recibe una opcion y devuelve mensaje y porcentaje de cuidado
    // =====================================================

    function evaluarSituacion(tipo) {
        if (tipo === "athmovil") {
            return {
                mensaje: "cuidado alto: verifica directamente en la aplicación oficial antes de enviar o devolver dinero.",
                porcentaje: 90
            };
        } else if (tipo === "phishing") {
            return {
                mensaje: "cuidado alto: no abras enlaces ni escribas contraseñas en páginas sospechosas.",
                porcentaje: 95
            };
        } else if (tipo === "tarjeta") {
            return {
                mensaje: "cuidado alto: revisa tus movimientos y reporta cargos no reconocidos.",
                porcentaje: 85
            };
        } else {
            return {
                mensaje: "cuidado moderado: recopila evidencia y verifica antes de actuar.",
                porcentaje: 60
            };
        }
    }

    let btnEvaluar = document.getElementById("btnEvaluar");
    let resultado = document.getElementById("resultado");
    let barraRiesgo = document.getElementById("barraRiesgo");

    btnEvaluar.addEventListener("click", function () {
        let tipo = document.getElementById("tipoFraude").value;
        let evaluacion = evaluarSituacion(tipo);

        resultado.textContent = evaluacion.mensaje;
        resultado.className = "alert alert-warning";

        barraRiesgo.style.width = evaluacion.porcentaje + "%";
        barraRiesgo.textContent = evaluacion.porcentaje + "%";
    });


    // =====================================================
    // seccion 7: plan rapido si sospechas fraude
    // afecta a la lista id="listaPasos"
    // proposito de la tarea: practica arreglo y loop while
    // esta parte añade pasos de respuesta dentro de una lista ordenada
    // =====================================================

    let pasos = [
        "guarda evidencia del mensaje o transacción.",
        "verifica directamente con el banco o aplicación oficial.",
        "cambia tus contraseñas si compartiste información.",
        "revisa tus movimientos recientes.",
        "reporta cargos o pagos que no reconozcas."
    ];

    let listaPasos = document.getElementById("listaPasos");
    let contadorPasos = 0;

    while (contadorPasos < pasos.length) {
        let paso = document.createElement("li");
        paso.textContent = pasos[contadorPasos];
        listaPasos.appendChild(paso);
        contadorPasos++;
    }


    // =====================================================
    // seccion 7: revision inicial del plan
    // afecta al div id="revisionInicial"
    // proposito de la tarea: practica do...while
    // esta parte muestra un mensaje de revision inicial completada
    // =====================================================

    let revision = 0;
    let mensajeRevision = "";

    do {
        mensajeRevision = "revisión inicial completada: ya puedes verificar los pasos recomendados.";
        revision++;
    } while (revision < 1);

    let revisionInicial = document.getElementById("revisionInicial");
    revisionInicial.textContent = mensajeRevision;
    revisionInicial.className = "alert alert-success";


    // =====================================================
    // seccion 8: informacion que se maneja en un caso
    // afecta a la lista id="nivelesInformacion"
    // proposito de la tarea: practica alcance global, local y de bloque
    // la funcion mostrarDatosDelCaso añade ejemplos de informacion a la pagina
    // =====================================================

    let nivelesInformacion = document.getElementById("nivelesInformacion");

    let datoGeneral = "dato general del portal: tema de seguridad bancaria.";

    function mostrarDatosDelCaso() {
        let datoDelCaso = "dato del caso: tipo de fraude seleccionado por el usuario.";

        if (true) {
            let datoDeRevision = "dato de revisión: mensaje que se muestra luego de evaluar la situación.";

            let itemRevision = document.createElement("li");
            itemRevision.textContent = datoDeRevision;
            nivelesInformacion.appendChild(itemRevision);
        }

        let itemCaso = document.createElement("li");
        itemCaso.textContent = datoDelCaso;
        nivelesInformacion.appendChild(itemCaso);
    }

    let itemGeneral = document.createElement("li");
    itemGeneral.textContent = datoGeneral;
    nivelesInformacion.appendChild(itemGeneral);

    mostrarDatosDelCaso();


    // =====================================================
    // seccion 9: seguimiento de intentos de reporte
    // afecta al boton id="btnContador", numero id="contador"
    // y mensaje id="mensajeContador"
    // proposito de la tarea: practica clausura y evento click
    // la funcion crearRegistroDeIntentos recuerda el total de intentos aunque ya termino su ejecucion inicial
    // =====================================================

    function crearRegistroDeIntentos() {
        let totalIntentos = 0;

        return function () {
            totalIntentos++;
            return totalIntentos;
        };
    }

    let registrarIntento = crearRegistroDeIntentos();

    let btnContador = document.getElementById("btnContador");
    let contador = document.getElementById("contador");
    let mensajeContador = document.getElementById("mensajeContador");

    btnContador.addEventListener("click", function () {
        let total = registrarIntento();

        contador.textContent = total;
        mensajeContador.textContent = "intento registrado correctamente. total actual: " + total;
        mensajeContador.className = "alert alert-success";
    });

});