let productos = [];

let formProducto = document.getElementById('form-producto');
let mensajeProducto = document.getElementById('mensajeProducto');

formProducto.addEventListener('submit', function (event) {
  event.preventDefault();

  let nombre = document.getElementById('nombreProducto').value.trim();
  let descripcion = document.getElementById('descripcionProducto').value.trim();
  let precio = parseFloat(document.getElementById('precioProducto').value);
  let stock = parseInt(document.getElementById('stockProducto').value);

  if (!nombre || !descripcion || isNaN(precio) || isNaN(stock)) {
    mensajeProducto.textContent = 'Todos los campos deben estar completos y correctos.';
    return;
  }

  // Verificar si ya existe un producto con ese nombre
  let existe = productos.find(function (p) { return p.nombre.toLowerCase() === nombre.toLowerCase(); });

  if (existe) {
    mensajeProducto.textContent = 'Ya existe un producto con ese nombre.';
    return;
  }

  // Crear producto
  let nuevoProducto = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    stock: stock
  };

  productos.push(nuevoProducto);
  mensajeProducto.textContent = `Producto "${nombre}" agregado correctamente.`;

  formProducto.reset();
});
