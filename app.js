let nombresIngresados = [];

function agregarAmigo(){
    nombresIngresados.push(document.getElementById("amigo").value);
    document.getElementById("listaAmigos").innerHTML += "<li>" + document.getElementById("amigo").value + "</li>";
    document.getElementById("amigo").value = "";
}