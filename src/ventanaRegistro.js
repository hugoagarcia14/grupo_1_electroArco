const abrirRegistro = document.querySelector('.abrirRegistro');
abrirRegistro.addEventListener('click',()=>{
    alert("Vamos bien");
})
const overlay = document.querySelector('#overlay');
const formularioRegistro = document.querySelector('#formularioRegistro');
const cerrarRegistro = document.querySelector('#botonCerrar');

abrirRegistro.addEventListener("click", ()=>{
    overlay.showModal();
})
cerrarRegistro.addEventListener("click",()=>{
    overlay.close();
})