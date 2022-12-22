
// sidebar links sublinks toggle functionality
let links = document.querySelectorAll('.has_sublink');

for(i=0;i<links.length;i++){
    links[i].addEventListener('click',(e)=>{
        e.target.parentNode.querySelector('.sidebar__link_sublinks').classList.toggle('show_sublinks')

    })
}

// sidebar hide or show toggle function
let toggle_sidebar_icon = document.querySelector('.menu-icon');
let admin_sidebar = document.querySelector('.admin-sidebar');
let mobile_sidebar_close_btn = document.querySelector('.close-sidebar svg');

toggle_sidebar_icon.addEventListener('click',(e)=>{
   admin_sidebar.classList.toggle('admin-sidebar-hide');
})
mobile_sidebar_close_btn.addEventListener('click',(e)=>{
   admin_sidebar.classList.toggle('admin-sidebar-hide');
})


// setTimeout(()=>{
//     //let rw =  'Qd'+Math.random(12,90);
//     //window.history.pushState({page: "another"}, "another page",);
//     //location.href = 'http://127.0.0.1:5500/'+Math.random(12,90);
// },2000)