addEventListener('DOMContentLoaded', ()=>{
    const btn_menu = document.querySelector('.btn_menu');
    const btn_sections = document.querySelectorAll('.menu_items li a')
    const menu_items = document.querySelector('.menu_items');
    const icon = document.querySelector('.btn_menu i');
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            
            menu_items.classList.toggle('show');
            icon.classList.toggle('fa-x');
            
        }); 
        
    }
    for (let i = 0; i< btn_sections.length; i++){

        btn_sections[i].addEventListener('click', ()=>{
           menu_items.classList.remove('show');
           icon.classList.toggle('fa-x');
         
        })
    }
    
})