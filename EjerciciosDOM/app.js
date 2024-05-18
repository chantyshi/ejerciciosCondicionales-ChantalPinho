let pesoInput = document.getElementById('peso')
let alturaInput = document.getElementById('altura')
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado')




// peso / estatura * estatura 


calcular.addEventListener('click', () => {
  let peso = parseFloat(pesoInput.value);
   let altura = parseFloat(alturaInput.value);

let imc = peso / (altura * altura);
resultado.value = imc
})




let dolarInput = document.getElementById('dolar')
let pesoARGInput = document.getElementById('pesoArgentino')

pesoARGInput.addEventListener('change', () => {

let pesosIngresados = parseFloat(pesoARGInput.value)
let dolarDevuelto = pesosIngresados / 800;
dolarInput.value = dolarDevuelto


})

dolarInput.addEventListener('change', () => {

    let dolarIngresado = parseFloat(dolarInput.value)
    let pesoDevuelto = dolarIngresado * 800;
    pesoARGInput.value = pesoDevuelto
    
    
    })
    