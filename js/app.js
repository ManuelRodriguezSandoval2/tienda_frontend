function obtenerProducto() {
    $("#content").show();
    $.ajax({
        url: "http://localhost:8000/api/obtener_producto_categoria/"

    }).done(function (data) {


        for (let i = 0; i < data.length; i++) {
            

            let div = '<div class="card  tarjeta">' +
                '<img src=' + data[i].url_image + '>' +
                '</br><h6>' + data[i].nombre_producto + '</h6>' +
                '<hr>' +
                '</br><p>- Precio: $' + data[i].price.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</p>' +
                '</br><p>- Descuento: $' + data[i].discount.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</p>'+
                '</br><b><p>- Categoría: ' + data[i].categoria + '</p></b>' +
                '</br>'
            '</div>'
            $('#div').append(div)
            $("#content").hide();
            $("#div").show();

        }
    });
}

function obtenerProductoPorCategoria() {
    var categoria = document.getElementById("categoria").value;
    $("#div").hide();
    $("#respuesta_categoria").hide();
    $("#content").show();
    $.ajax({
        url: 'http://localhost:8000/api/obtener_producto/?categoria_producto=' + categoria,

    }).done(function (data) {
        $("#respuesta_categoria").children("div").remove();


        if (data.length == 0) {
            respuesta_categoria = '<div>'
                + '<div class="cargando">Categoría ingresada no se encuentra...</div>'
                + '</div>'
            $('#respuesta_categoria').append(respuesta_categoria);
            $("#content").hide();
            $("#respuesta_categoria").show();

        } else {
            for (let i = 0; i < data.length; i++) {
                respuesta_categoria = '<div class="card  tarjeta">' +
                    '<img src=' + data[i].url_image + '>' +

                    '</br><h6>' + data[i].nombre_producto + '</h6>' +
                    '<hr>' +
                    '</br><p>- Precio: $' + data[i].price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</p>' +
                    '</br><p>- Descuento: $' + data[i].discount.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</p>' +
                    '</br><b><p>- Categoría: ' + data[i].categoria + '</p></b>' +
                '</div>'


                $('#respuesta_categoria').append(respuesta_categoria);

                $("#content").hide();
                $("#respuesta_categoria").show();


            }

        }
    });
}



function obtenerProductoPorNombre() {
    var producto = document.getElementById("producto").value;
    $("#div").hide();
    $("#respuesta_producto").hide();
    $("#content").show();
    $.ajax({
        url: 'http://localhost:8000/api/obtener_producto_nombre/?nombre_producto=' + producto,

    }).done(function (data) {
        $("#respuesta_producto").children("div").remove();


        if (data.length == 0) {
            respuesta_producto = '<div>'
                + '<div class="cargando">Producto ingresado, no se encuentra...</div>'
                + '</div>'
            $('#respuesta_producto').append(respuesta_producto);
            $("#content").hide();
            $("#respuesta_producto").show();

        } else {
            for (let i = 0; i < data.length; i++) {
                respuesta_producto = '<div class="card  tarjeta">' +
                    '<img src=' + data[i].url_image + '>' +

                    '</br><h6>' + data[i].nombre_producto + '</h6>' +
                    '<hr>' +
                    '</br><p>- Precio: $' + data[i].price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</p>' +
                    '</br><p>- Descuento: $' + data[i].discount.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</p>' +
                        '</br><b><p>- Categoría: ' + data[i].categoria + '</p></b>' +
                '</div>'


                $('#respuesta_producto').append(respuesta_producto);

                $("#content").hide();
                $("#respuesta_producto").show();


            }

        }
    });
}

function obtenerListaProductos() {
    $("#tabla").hide();
    $("#content").show();
    $.ajax({
        url: 'http://localhost:8000/api/obtener_lista_productos/'

    }).done(function (data) {
        if (data.length == 0) {
            respuesta_producto = '<div>'
                + '<div class="cargando">No se puede cargar productos, intente más tarde...</div>'
                + '</div>'
            $('#respuesta_producto').append(respuesta_producto);
            $("#content").hide();
            $("#respuesta_producto").show();

        } else {
            for (let i = 0; i < data.length; i++) {
                var precio = parseInt(data[i].price);
                var descuento = parseInt(data[i].discount);
                var imagen = data[i].url_image;
                var total = precio - descuento;
                /* '<img class="imagen_tabla" src=' + '>' */
                console.log(imagen)
                if (typeof imagen != 'string') {
                    imagen = "Sin imagen";
                } else if (!imagen) {
                    imagen = "Sin imagen";
                } else {
                    imagen = '<img class="imagen_tabla" src=' + imagen + '>';
                }

                let tr = '<tr>' +
                    '<td>' + imagen + '</td>' +
                    '<td>' + data[i].nombre_producto + '</td>' +
                    '<td>' + data[i].categoria + '</td>' +
                    '<td>$' + data[i].price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</td>' +
                    '<td>$' + data[i].discount.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</td>' +
                    '<td>$' + total.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</td>' +
                    '</tr>'
                $("#content").hide();
                $('#respuesta_lista').append(tr);
                $("#tabla").show();


            }

        }
    });

}

