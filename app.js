

// Lista de amigos
let listaAmigoSecreto = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    listaAmigoSecreto.push(nombre);
    input.value = ""; 

    // Llamar a la función para actualizar la lista
    mostarLista();
}


// Función para actualizar la lista
function mostarLista() {
let listaElement = document.getElementById("listaAmigos");
listaElement.innerHTML = ""; // Limpiar lista antes de actualizar

// Recorrer la lista de amigos y agregarlos al HTML
for (let amigo of listaAmigoSecreto) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaElement.appendChild(li);
}
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    let resultadoElement = document.getElementById("resultado");

    // Validar que haya al menos un amigo en la lista
    if (listaAmigoSecreto.length === 0) {
        resultadoElement.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);

    // Obtener el nombre sorteado
    let amigoSorteado = listaAmigoSecreto[indiceAleatorio];

    // Mostrar el resultado en la lista
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
