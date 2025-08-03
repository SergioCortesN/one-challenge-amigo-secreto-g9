let amigos = [];

function agregarAmigo(){
    if(document.getElementById("amigo").value === ""){
        alert("Por favor, ingresa un nombre.");
        return;
    } else {
        amigos.push(document.getElementById("amigo").value)
        document.getElementById("amigo").value = "";
    }
}