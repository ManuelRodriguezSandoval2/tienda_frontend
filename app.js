function obtenerProducto() {

    // 6. obtene el valor del <input id="usuario">
    /*  let usuario = $('#usuario').val() */

    $.ajax({

        // 7. agrega el valor a la url
        url: "http://localhost:8000/api/obtener_producto_categoria/"

    }).done(function (data) {

        for (let i = 0; i < data.length - 1; i++) {
            // 8. construyes el <tr> con tus datos de respuesta
            let div = '<div class="card  tarjeta">'+
            '<img src='+ data[i].url_image +'>'+
            
            '</br><h6>' +data[i].nombre_producto + '</h6>'+           
            '<hr>'+
            '</br><p>- Precio: $' + data[i].price +'</p>'+
            '</br><p>- Descuento: $' + data[i].discount +'</p>'+
            '</br>'
            '</div>'
            console.log(div)
            $('#div').append(div)
        }
    });
}

function obtenerProductoPorCategoria() {
    var categoria = document.getElementById("categoria").value;
    console.log(categoria)
    axios({
        method: 'get',
        url: 'http://localhost:8000/api/obtener_producto/?categoria_producto=' + categoria,
        responseType: 'stream'
    })
        .then(function (response) {

            var contenido = response.data.map(function (bar) {
                return '<li style="background-color: red;>' + bar.nombre_producto + '</li>'
            })
            console.log(contenido)
            document.getElementById("respuesta_categoria").innerHTML = contenido;
        });

}

function obtenerProductoPorNombre() {
    var producto = document.getElementById("producto").value;
    console.log(producto)
    axios({
        method: 'get',
        url: 'http://localhost:8000/api/obtener_producto_nombre/?nombre_producto=' + producto,
        responseType: 'stream'
    })
        .then(function (response) {

            var contenido = '<li style="background-color: red;>' + response.data[0].nombre_producto + '</li>'

            console.log(contenido)
            document.getElementById("texto_nav3").innerHTML = contenido;
        });

}

