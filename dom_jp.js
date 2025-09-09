const rodri_círculo = document.getElementById('círculo')
let tamanho_rodri = 10


rodri_círculo.addEventListener('dblclick',()=>{
    rodri_círculo.style.borderRadius = `${tamanho_rodri}px`
    rodri_círculo.style.width = `${tamanho_rodri}px`
    rodri_círculo.style.height = `${tamanho_rodri}px`
    tamanho_rodri = tamanho_rodri+20
})