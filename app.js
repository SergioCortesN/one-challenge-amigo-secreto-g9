let amigos = [];
let mensajeError = "";
function agregarAmigo(){
    if(validarNombre() === false){
        alert(mensajeError);
        return;
    } else {
        validarNombre() 
        amigos.push(document.getElementById("amigo").value)
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]} <button class="button-delete" onclick="eliminarAmigo(${index})"> 
        <img src="assets/icon_delete.png" width="20" height="20"> </button> </li>`
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    }else {
        document.getElementById("listaAmigos").innerHTML = "";
        let indiceAleatorio = Math.floor(Math.random() * (amigos.length-1));
        document.getElementById("resultado").innerHTML = `el amigo secreto es: ${amigos[indiceAleatorio]}`;
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}

function eliminarAmigo(index){
    amigos.pop(index);
    mostrarAmigos();
}

function validarNombre() {
    if (document.getElementById("amigo").value === "") {
        mensajeError = "Por favor, ingresa un nombre.";
        return false;
    }else if( amigos.includes(document.getElementById("amigo").value)) {
        mensajeError = "El nombre ya está en la lista.";
        return false;
    } else if (document.getElementById("amigo").value.length < 3) {
        mensajeError = "El nombre debe tener al menos 3 caracteres.";
        return false;
    } else if (document.getElementById("amigo").value.length > 20) {
        mensajeError = "El nombre no puede tener más de 20 caracteres.";
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(document.getElementById("amigo").value)) {
        mensajeError = "El nombre solo puede contener letras y espacios.";
        return false;
    } else {
        mensajeError = "";
        return true;
    }
}