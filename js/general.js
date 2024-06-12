

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

// script.js

// Guardar datos en localStorage
document.getElementById('saveButton').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;
    const factura = document.getElementById('factura').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('direccion', direccion);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('producto', producto);
    localStorage.setItem('cantidad', cantidad);
    localStorage.setItem('precio', precio);
    localStorage.setItem('cantidad', cantidad);
    localStorage.setItem('factura', factura);
    alert('Datos guardados correctamente');
});

// Recuperar datos de localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('nombre')) {
        document.getElementById('nombre').value = localStorage.getItem('nombre');
        document.getElementById('direccion').value = localStorage.getItem('direccion');
        document.getElementById('telefono').value = localStorage.getItem('telefono');
        document.getElementById('producto').value = localStorage.getItem('producto');
        document.getElementById('cantidad').value = localStorage.getItem('cantidad');
        document.getElementById('precio').value = localStorage.getItem('precio');
        document.getElementById('factura').value = localStorage.getItem('factura')
    }
});
