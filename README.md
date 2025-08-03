# ONE-CHALLENGE-AMIGO SECRETO

Este challenge es realizado dentro del curso **ONE**, el cual nos permite trabajar la lógica de programación.

## ¿CÓMO FUNCIONA EL CÓDIGO?

1. Se crea un arreglo con el nombre de `amigos` que se inicializa vacío:

   ```js
   let amigos = [];
   ```
2. se crea la funcion `agregarAmigos`, esta permite agregar los amigos dentro del input de la pagina al arreglo creado con anterioridad; ademas de vaciar el campo para facilitar al usuario el ingreso de otro nombre. ahi mismo se hace uso de un condicional para verificar que el campo no este vacio.

```js
function agregarAmigo(){
    if(document.getElementById("amigo").value === ""){
        alert("Por favor, ingresa un nombre.");
        return;
    } else {
        amigos.push(document.getElementById("amigo").value)
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}
```

