


// sidebar links sublinks toggle functionality
let links = document.querySelectorAll('.admin-sidebar__link_item');

for(i=0;i<links.length;i++){

    links[i].addEventListener('click',(e)=>{
        
        e.target.closest('.admin-sidebar__link_item')
        .querySelector('.sidebar__link_sublinks')
        .classList.toggle('show_sublinks')
    })
}


// sidebar hide or show toggle function
let toggle_sidebar_icon = document.querySelector('.menu-icon');
let admin_sidebar = document.querySelector('.admin-sidebar');
let mobile_sidebar_close_btn = document.querySelector('.hide-small-device-sidebar svg');

toggle_sidebar_icon.addEventListener('click',(e)=>{
   admin_sidebar.classList.toggle('admin-sidebar-hidden');
})

mobile_sidebar_close_btn.addEventListener('click',(e)=>{
   admin_sidebar.classList.toggle('admin-sidebar-hidden');
})

