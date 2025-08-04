# ONE-CHALLENGE-AMIGO SECRETO

Este challenge es realizado dentro del curso **ONE**, el cual nos permite trabajar la lógica de programación.

## ¿CÓMO FUNCIONA EL CÓDIGO?

1. Se crea un arreglo con el nombre de `amigos` que se inicializa vacío:

   ```js
   let amigos = [];
   ```
2. Se crea la funcion `agregarAmigos`, esta permite agregar los amigos dentro del input de la pagina al arreglo creado con anterioridad; ademas de vaciar el campo para facilitar al usuario el ingreso de otro nombre. ahi mismo se hace uso de un condicional para verificar que el campo no este vacio.

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
3. Creación de la funcion `mostrarAmigos`, permite vizualizar la lista de amigos que se van agregando al momento de dar clic en el boton añadir, como se mostro en el fragmento anterior, se agrego dentro del else tras verificar que el input no esta vacio

```js
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]}</li>`;
    }
}
```
4. Por ultimo, fue creada la funcion `sortearAmigo`, esta permite tomar un nombre aleatorio que se encuentre en el arreglo, para ello se realizo lo siguiente:

   a. Se agrea un condicional `if` para verificar que el arreglo no este vacio al momento de sortear, en caso de estarlo, manda una alerta al usuario diciendole que no existen amigos que sortear.

   b. En caso contrario, se hace el sorteo utilizando la libreria `Math` de JS, utilizando sus funciones `Math.floor` y `Math.random` limitando el numero obtenido entre 0 y el tamaño del arreglo menos 1 (se pone menos 1 para evitar el acceso a un indice mayor al posible).

   c. Se envia el amigo sorteado de manera visual al usuario con un mensaje indicandole el nombre del **AMIGO SECRETO**

```js
function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    }else {
        document.getElementById("listaAmigos").innerHTML = "";
        let indiceAleatorio = Math.floor(Math.random() * amigos.length-1);
        document.getElementById("resultado").innerHTML = `el amigo secreto es: ${amigos[indiceAleatorio]}`;
    }
}
```
5. Se agrego un boton de reiniciar junto con su funcion para reiniciar los valores y comenzar de nuevo
```js
function reiniciar(){
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}
```
