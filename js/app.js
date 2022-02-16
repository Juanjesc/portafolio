window.onload = function () {
    
    var boton_datos = document.getElementById('boton_datos');
    
    boton_datos.onmouseover = cambiar_color;
    boton_datos.onmouseleave = color_defecto;
    boton_datos.onclick=function (e) {
        e.preventDefault();
        validar();
    }

    var iconQuestion = document.querySelectorAll(".fa-question");
    iconQuestion[0].title ="El nombre debe contener mínimo 3 caracteres, no debe contener números, y no debe estar vacío";
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
    //var flechita = document.querySelector(".fa-arrow-alt-circle-up");

    
    
    if(scroll>500){
        navegador.style.position ='fixed'
        navegador.style.top = '0';
        navegador.style.display = 'flex';
        navegador.style.justifyContent = 'space-around'
        navegador.style.width = "100%";
        navegador.style.backgroundColor = 'var(--negro)'
       
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
        if (window.innerWidth < 510){
            console.log("Estoy entrando aquí");
            navegador.className=("vacio");
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
        navegador.classList.remove("vacio");
      
        
        for (let i = 0; i<texto_nav.length;i++){
            
            texto_nav[i].style.fontWeight='400';
            texto_nav[i].style.color='var(--oscuro)'
        }
        if (window.innerWidth < 510){
            navegador.style.marginTop=0;
            
            
        }
        
        
    }
    
    
    
    
}); 

//validación formulario

function validar() {

    var formu = document.forms[0];
    var c_nombre= formu.nombre;
    var c_email= formu.email;
    var c_asunto = formu.asunto;

    c_nombre.className="";
    var iconQuestion=document.querySelectorAll(".fa-question");
    for(let i = 0; i<iconQuestion.length;i++){
        iconQuestion[i].style.display="none";
    }
    if (c_nombre.value == ""||c_nombre.value.length<3){
        
        c_nombre.focus();
        c_nombre.classList.toggle("campoError");
        document.querySelectorAll(".fa-question")[0].style.display="block";
        c_nombre.addEventListener("change", function(){
            c_nombre.className="";
        })

        if(c_nombre.value == ""){
            alert("ei pon un nombre crack ");
        }
        else if(c_nombre.value.length<4){
            alert("El nombre debe tener al menos 3 caracteres");
        }   
        return;
    }
    else{
        c_nombre.className="";  
    }
    if (c_email.value == ""){
        alert("ei pon un correo crack");
        c_email.focus();
        c_email.classList.toggle("campoError");
        

        return;

    }
    else{
        c_email.classList.toggle("");  
    }
}


//evenListener scroll

// window.addEventListener('resize', ()=>{
//     console.log(innerWidth);
//     var navegador = document.getElementById('barra_nav');
//     if (window.innerWidth < 510){
//         navegador.className="vacio";

//     }
// });




