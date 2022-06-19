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
    btn_sections.forEach(element => {
        element.addEventListener('click', ()=>{
            document.getElementById(element.ariaValueText).scrollIntoView();
            menu_items.classList.remove('show');
            icon.classList.toggle('fa-x');

        })
    })
    
    
})