async function cargarDatos() {

    // =========================
    // LEER JSON
    // =========================

    const respuestaJSON = await fetch("datos.json");

    const datos = await respuestaJSON.json();


    // =========================
    // LEER XML
    // =========================

    const respuestaXML = await fetch("empleados.xml");

    const textoXML = await respuestaXML.text();


    // =========================
    // CONVERTIR XML
    // =========================

    const parser = new DOMParser();

    const xml = parser.parseFromString(textoXML, "application/xml");


    // =========================
    // DATOS XML
    // =========================

    const nombre = xml.getElementsByTagName("nombre")[0].textContent;

    const apellidos = xml.getElementsByTagName("apellidos")[0].textContent;

    const departamento = xml.getElementsByTagName("departamento")[0].textContent;


    // =========================
    // FECHA
    // =========================

    const fechaActual = new Date();

    const fecha = fechaActual.toLocaleDateString('es-MX', {

        day: 'numeric',
        month: 'long',
        year: 'numeric'

    });


    // =========================
    // MOSTRAR CONTENIDO
    // =========================

    document.getElementById("contenido").innerHTML = `

        <h1 class="empresa">
            ${datos.empresa}
        </h1>

        <p class="fecha">
            Fecha: ${fecha}
        </p>

        <h2 class="bienvenida">
            ${datos.titulo}
            ${nombre} ${apellidos}
        </h2>

        <p class="departamento">
            Departamento: ${departamento}
        </p>

        <p class="mensaje">
            ${datos.mensaje}
        </p>

        <div class="firma">

            <p>${datos.firma}</p>

            <h2>${datos.emisor}</h2>

        </div>

        <div class="footer">

            Innovatech Solutions © 2026

        </div>

    `;
}

cargarDatos();