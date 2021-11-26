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

window.addEventListener('scroll', ()=>{
    var navegador = document.getElementById('barra_nav');
    var scroll = window.scrollY;
    var texto_nav = document.querySelectorAll("#barra_nav a");
    
    
    if(scroll>500){
        navegador.style.position ='fixed'
        navegador.style.top = '0';
        navegador.style.display = 'flex';
        navegador.style.justifyContent = 'space-around'
        navegador.style.width = "100%";
        navegador.style.backgroundColor = 'var(--negro)'
        navegador.style.color = '#fff'
        navegador.style.zIndex = '99999';
        
        navegador.style.transition = '1s ease-in';
        navegador.style.left='0';
        navegador.style.padding= .8+"rem";
        navegador.style.boxShadow='0 5px 10px var(--secundario)';
        navegador.style.margin=0;
        for (let i = 0; i<texto_nav.length;i++){
            
            texto_nav[i].style.fontWeight='400';
            texto_nav[i].style.color='var(--parrafos)';
            
            
            
            
        }
        
        
        
        
    }
    else{
        navegador.style.position ='relative'
        navegador.style.display = 'block';
        navegador.style.width = "100%";
        navegador.style.transition = '.1s';
        navegador.style.padding=0;
        navegador.style.marginTop=2+"rem";
        navegador.style.color = '#ffffff'
        navegador.style.backgroundColor = 'transparent'
        navegador.style.zIndex = '99999';
        navegador.style.boxShadow='none';
        
        for (let i = 0; i<texto_nav.length;i++){
            
            texto_nav[i].style.fontWeight='400';
            texto_nav[i].style.color='var(--oscuro)'
        }
        if (window.innerWidth < 510){
            navegador.style.marginTop=0;
            
            
        }
        
        
    }
    
    
    
    
}); //evenListener scroll

// window.addEventListener('resize', ()=>{
//     console.log(innerWidth);
//     var navegador = document.getElementById('barra_nav');
//     if (window.innerWidth < 510){
//         navegador.className="vacio";

//     }
// });




