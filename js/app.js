document.addEventListener('DOMContentLoaded',()=>{
   cargarportafolio();
})
function cargarportafolio(){
   fetch('datos.json')
   .then((_respuesta)=>{
       return _respuesta.json();
   })
   .then((datos)=>{
        let html='';
        datos.portafolio.forEach(portafolio=>{
            //crear el template
            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
            `;
        });
        document.querySelector('#listado').innerHTML=html;
   })
}