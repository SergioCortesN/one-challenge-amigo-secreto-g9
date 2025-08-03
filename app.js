let amigos = [];

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

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]}</li>`;
    }
}