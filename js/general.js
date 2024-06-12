

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("facturacion-form");
    const resumenDiv = document.getElementById("factura-resumen");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById("nombre").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;
        const producto = document.getElementById("producto").value;
        const cantidad = parseInt(document.getElementById("cantidad").value);
        const precio = parseFloat(document.getElementById("precio").value);

        // Calcular el total
        const total = cantidad * precio;

        // Crear el resumen de la factura
        const resumenHTML = `
            <h2>Resumen de la Factura</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Producto:</strong> ${producto}</p>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Precio:</strong> $${precio.toFixed(2)}</p>
            <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        `;

        // Mostrar el resumen en el div
        resumenDiv.innerHTML = resumenHTML;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('content');
    const saveButton = document.getElementById('saveButton');

    // Cargar el contenido guardado desde localStorage
    const savedContent = localStorage.getItem('content');
    if (savedContent) {
        textarea.value = savedContent;
    }

    // Guardar el contenido en localStorage cuando se hace clic en el botón
    saveButton.addEventListener('click', function() {
        const content = textarea.value;
        localStorage.setItem('content', content);
        alert('Cambios guardados');
    });

    // Guardar el contenido automáticamente cada vez que se cambia
    textarea.addEventListener('input', function() {
        localStorage.setItem('content', textarea.value);
    });
});
