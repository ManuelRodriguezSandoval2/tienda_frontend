function obtenerProductos() {
    axios({
        method: 'get',
        url: 'http://localhost:8000/api/obtener_producto_categoria/',
        responseType: 'stream'
    })
        .then(function (response) {
            
            var contenido = response.data.map(function (bar) {
                return '<div style="background-color: green;>' + 
                bar.nombre_producto + '</br>-  <img src='+ 
                bar.url_image +' >'+'</br>- $'+
                bar.price+'</br>- '+bar.discount+'</br>- '+
                bar.categoria+'</div>'
            })
            document.getElementById("texto_nav1").innerHTML = contenido;
        });
}

function obtenerProductoPorCategoria(){
    var categoria = document.getElementById("categoria").value;
    console.log(categoria)
    axios({
        method: 'get',
        url: 'http://localhost:8000/api/obtener_producto/?categoria_producto='+categoria,
        responseType: 'stream'
    })
        .then(function (response) {
            
            var contenido = response.data.map(function (bar) {
                return '<li style="background-color: red;>' + bar.nombre_producto + '</li>'
            })
            console.log(contenido)
            document.getElementById("texto_nav2").innerHTML = contenido;
        });

}

function obtenerProductoPorNombre(){
    var producto = document.getElementById("producto").value;
    console.log(producto)
    axios({
        method: 'get',
        url: 'http://localhost:8000/api/obtener_producto_nombre/?nombre_producto='+producto,
        responseType: 'stream'
    })
        .then(function (response) {
            
            var contenido = '<li style="background-color: red;>'+response.data[0].nombre_producto+'</li>'
         
            console.log(contenido)
            document.getElementById("texto_nav3").innerHTML = contenido;
        });

}

