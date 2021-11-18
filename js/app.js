// var navegador = document.getElementById('barra_nav');
// var contenedor = document.querySelectorAll(".contenedor")

// window.addEventListener('scroll', ()=>{
//     var scroll = window.scrollY;
  
//         if(scroll>10){
//             navegador.style.position ='fixed'
//             navegador.style.top = '0';
//             navegador.style.display = 'flex';
//             navegador.style.justifyContent = 'space-between'
//             navegador.style.width = "100%";
//             navegador.style.backgroundColor = '#44b3c2'
//             navegador.style.color = '#fff'
//             navegador.style.zIndex = '99999';
//             contenedor.style.maxWidth = "100%";
//             navegador.style.transition = '1s';
    
            
//         }
//         else{
//             navegador.style.position ='relative'
//             navegador.style.display = 'block';
//             navegador.style.width = "100%";
//             navegador.style.transition = '0s';
            
//             navegador.style.color = '#ffffff'
//             navegador.style.backgroundColor = 'transparent'
//             navegador.style.zIndex = '99999';
//             contenedor.style.maxWidth = "1400px";
//         }

    


// });
window.onload = function () {
    
    var boton_datos = document.querySelector("#boton_datos");
   
    boton_datos.onmouseover = cambiar_color;
    boton_datos.onmouseleave = color_defecto;
}
function cambiar_color(){
    
    var imagen_formu = document.querySelector("#imagen_contacto");
   
    
    imagen_formu.style.filter= "drop-shadow(0 0 50px var(--boton))";
    
}
function color_defecto(){
    var imagen_formu = document.querySelector("#imagen_contacto");
    imagen_formu.style.filter="drop-shadow(0 0 50px var(--secundario))";
    
}




