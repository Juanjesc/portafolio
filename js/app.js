window.onload = function () {
    
    var boton_submit = document.getElementById('boton_submit');
    
    
    boton_submit.onmouseover = cambiar_color;
    boton_submit.onmouseleave = color_defecto;
    boton_submit.onclick=function (e) {
        e.preventDefault();
        validar();
    }

    var iconQuestion = document.querySelectorAll(".fa-question");
    iconQuestion[0].title ="El nombre debe contener mínimo 3 caracteres, no debe contener números, y no debe estar vacío.";
    iconQuestion[1].title ="El email debe ser válido conteniendo el carácter '@', el email no puede estar vacío."
    iconQuestion[3].title ="El mensaje no debe quedar vacío."
    /* Redireccionamiento de los enlaces a las distintas secciones */
    var enlaces = document.querySelectorAll("#barra_nav a");
    enlaces.forEach(element =>{
     
        element.addEventListener('click', ()=>{
            document.getElementById(element.name).scrollIntoView();

        })
     
    })
    /* Redireccionamiento al top de la web */
    const arrow_top = document.getElementById('arrow_top');
    arrow_top.addEventListener('click',()=>{
        document.getElementById('hero').scrollIntoView();
    })

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
    var texto_nav = document.querySelectorAll("#barra_nav.activoo a");
    var flechita = document.querySelector(".fa-arrow-alt-circle-up");
    var header = document.querySelector('header');
    const menu_items = document.querySelector('.menu_items');
    const icon = document.querySelector('.btn_menu i');
 
    if(scroll>700){
        if (window.innerWidth > 910){
            navegador.className="boxi";
            navegador.classList.toggle('activoo');
            flechita.style.display='block';
            texto_nav.forEach(button =>{
                button.style.fontWeight='bold';
                button.style.color='var(--parrafos)';
                //button.style.fontSize='1.3rem'
            })  
        }
        else if (window.innerWidth <= 910){
            header.style.display='block';
        }
        /* Función que fija el estilo hover a los botones */
        if (window.innerWidth < 510){
            navegador.className=("vacio");
        }
          
    } //fin scroll > 700
    else{
        navegador.className="";
        navegador.classList.remove('activoo')
        navegador.classList.remove("vacio");
        flechita.style.display='none';
        header.style.display='none';
        menu_items.classList.remove('show');
        icon.classList.remove('fa-x')

        texto_nav.forEach(button =>{
            button.style.fontWeight='400';
            button.style.color='var(--parrafos)';
        })  
        if (window.innerWidth < 510){
            navegador.style.marginTop=0;
        }
    }
}); 

//validación formulario

function validar() {
    
    var formu = document.forms[0];
    var widget = document.querySelector(".widget");
    var c_nombre= formu.nombre;
    var c_email= formu.email;
    var c_asunto = formu.asunto;
    var c_mensaje = formu.mensaje;
    var info_error = document.createElement("p"); //mensaje en rojo que alertará de un error
    info_error.className="errorText";
    var allcampoDiv = document.querySelectorAll(".campo");
    var text_name_empty = document.createTextNode("Por favor rellene el campo");

    c_nombre.className="";
    c_email.className="";
    var iconQuestion=document.querySelectorAll(".fa-question");
    for(let i = 0; i<iconQuestion.length;i++){
        iconQuestion[i].style.display="none";
    }
    

    if(widget.getElementsByTagName("p").length>0){
        
    
        for (let i = widget.getElementsByTagName("p").length-1; i >= 0 ; i--) {
            widget.removeChild(widget.getElementsByTagName("p")[i]);
        
        }
    }
    var c_nombre_output = c_nombre.value.trim();
    //Validar campo nombre
    if (c_nombre.value == ""||c_nombre.value.length<3 || c_nombre_output.length <3) {
        
        c_nombre.focus();
        c_nombre.classList.toggle("campoError");
        if (window.innerWidth >800){
            
            document.querySelectorAll(".fa-question")[0].style.display="block";
        }
        c_nombre.addEventListener("input", function(){
            if (c_nombre.value.length>=3){
                c_nombre.className="";
            }
        })

        if(c_nombre.value == ""){
            info_error.appendChild(text_name_empty);
            
            
        }
        else if(c_nombre.value.length<4 || c_nombre_output.length<4){
            var text_name_length = document.createTextNode("El nombre debe contener más de 3 letras");
            if (window.innerWidth < 400){
               
                info_error.style.lineHeight=1.3;
                info_error.style.textAlign="center";
            }
            info_error.appendChild(text_name_length);
           
           
        }   
        allcampoDiv[0].before(info_error);
        allcampoDiv[0].addEventListener("change", function(){
            info_error.style.display="none";
        })
        return;
    }
    else{
        c_nombre.className="";  
        c_nombre_output.className="";
       // console.log('El nombre output enviado es: ' + c_nombre_output + ' el nombre cnombre enviado es : ' + c_nombre.value)
    }
    // //Validar campo email
    if (c_email.value == "" || !validarCorreo(c_email.value)){

        c_email.focus();
        c_email.classList.toggle("campoError");
        if (window.innerWidth >800){
            
            document.querySelectorAll(".fa-question")[1].style.display="block";
        }
        
        c_email.addEventListener("input", function(){
            if (c_email.value.includes('@')){

                c_email.className="";
            }
        })

        if (c_email.value == ""){
            info_error.appendChild(text_name_empty);

        }
        else if(!validarCorreo(c_email.value)){
            var text_email_error = document.createTextNode("Asegúrese de que el correo es válido");
            info_error.appendChild(text_email_error);
        }
       
        allcampoDiv[1].before(info_error);
        allcampoDiv[1].addEventListener("change", function(){
            info_error.style.display="none";
        })
        return;

    }
    else{
        c_email.className="";  
    }

    //Validar campo mensaje (el campo asunto puede estar vacío)

    if (c_mensaje.value == ""){

        info_error.appendChild(text_name_empty);
        c_mensaje.focus();
        c_mensaje.classList.toggle("campoError");
        if (window.innerWidth >800){
            
            document.querySelectorAll(".fa-question")[3].style.display="block";
        }
        
        c_mensaje.addEventListener("input", function(){
            c_mensaje.className="mensajito";
            
            
        });
        allcampoDiv[3].before(info_error);
        allcampoDiv[3].addEventListener("input", function(){
            if (c_mensaje != ""){

                info_error.style.display="none";
            }
        })

        return


    }
    else{
        c_mensaje.className="mensajito";
    }




    formu.submit();
}
function validarCorreo(correo) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);
    if (valido){
        return true;
    }
    else{
        return false;
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




