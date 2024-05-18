const notas = [
  {
    id: 1,
    titulo: "Aprobar el sprint 3",
    texto: "mi mama me va retar si no lo hago",
    realizada: false,
  }
];

let idGlobal = 1;

let ContenedorDeNotas = document.getElementById("contenedorNotas");

pintarTarjetas(notas, ContenedorDeNotas);



//e 
function pintarTarjetas(NotasACrear, ContenedorDeNotas){
if(NotasACrear.length === 0){
  let NoHayNotas = document.createElement("div");
 NoHayNotas.classList.add("ContenedorVacio");
NoHayNotas.textContent = 'No hay notas para mostrar'
ContenedorDeNotas.appendChild(NoHayNotas);
  console.log('NO HAY NOTAS')
  return;
}
else{
 
  for (let i = 0; i < NotasACrear.length; i++) {
    let nuevaNota = document.createElement("div");
    nuevaNota.classList.add("card", "rounded-4");
    nuevaNota.style.width = "15vw";
    nuevaNota.style.height = "40vh";

    nuevaNota.innerHTML = `
<div class="card-body rounded-4">
    <h5 class="card-title">${NotasACrear[i].titulo}</h5>
    <input ${
        NotasACrear[i].realizada ? "checked" : ""
      } type="checkbox" name="realizado" onClick="marcarRealizado(${i}, notas)" value="false" id="realizado">
    <p class="card-text ${NotasACrear[i].realizada ? "text-decoration-line-through" : ""}">${NotasACrear[i].texto}</p>
    <input class="bg-danger rounded-4" id="eliminar" onClick='borrarNota(${i}, notas)' type="button" value="Eliminar">
</div>
</div>
`;

    ContenedorDeNotas.appendChild(nuevaNota);
  }
}
}

let tituloNota = document.getElementById("tituloNota");
let contenidoNota = document.getElementById("contenidoNota");


let BorrarNotaACrear = document.getElementById("BorrarNotaACrear");

BorrarNotaACrear.addEventListener('click', () => {
  borrarContenidoEnCampos(tituloNota, contenidoNota)
})

function borrarContenidoEnCampos(titulo, contenido){ 
  titulo.value = "";
  contenido.value = "";
  console.log('borrarrrrrrrrrrrr')
}




let GuardarNotaNueva = document.getElementById("GuardarNota");
GuardarNotaNueva.addEventListener("click", () => {
  crearNota(tituloNota, contenidoNota, notas);
});

function crearNota(titulo, texto, arregloNotas) {
  if(titulo.value === '' || texto.value === '') {
  alert('Por favor, rellena los campos.');
  return;
  
}
else
{

 console.log(titulo,texto,arregloNotas);
 
    idGlobal++;
  let nota = {
    id: idGlobal,
    titulo: titulo.value,
    texto: texto.value,
    realizada: false
  };

arregloNotas.push(nota)
limpiarDivContenedor()
pintarTarjetas(arregloNotas, ContenedorDeNotas);

}
}




function limpiarDivContenedor(){
    ContenedorDeNotas.innerHTML = "";

}




function borrarNota(indice,notas){
 for(let i = 0; i < notas.length; i++) {
 if(notas[i] === notas[indice]){
    notas.splice(i,1)
 }    
 }
 limpiarDivContenedor()

 pintarTarjetas(notas, ContenedorDeNotas);
}


function marcarRealizado(indice, notas){
    notas[indice].realizada = !(notas[indice].realizada) 
    limpiarDivContenedor()
pintarTarjetas(notas, ContenedorDeNotas);
}



//o Crear un par de inputs para realizar filtro por texto y por notas realizadas.






let filtrarNotasRealizadas = document.getElementById('flexSwitchCheckDefault')

filtrarNotasRealizadas.addEventListener('change', () => {

if(filtrarNotasRealizadas.checked){ 
let NotasFiltradas = notas.filter(nota => nota.realizada === true);
limpiarDivContenedor()
pintarTarjetas(NotasFiltradas, ContenedorDeNotas)
}
else {
  limpiarDivContenedor();
  pintarTarjetas(notas, ContenedorDeNotas);
}})



let buscarNotas = document.getElementById('buscarNotas')

  buscarNotas.addEventListener('input',(e) => { console.log(e.target.value); 
  let NotasFiltradas = notas.filter(nota => nota.titulo.toLowerCase().includes(e.target.value))
  if(e.target.value != ''){
    limpiarDivContenedor();

    pintarTarjetas(NotasFiltradas, ContenedorDeNotas)}
  else{ 
    limpiarDivContenedor();

    pintarTarjetas(notas, ContenedorDeNotas)}})
  
