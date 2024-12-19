
let btnMenu = document.getElementById('btn-menu');
let menu_Mobile = document.getElementById('menu-mobile');
let overMenu = document.getElementById('overMenu-mobile');
let btnFechar = document.querySelector('.btn-fechar');
// Função para abrir o menu
btnMenu.addEventListener('click', () => {
    menu_Mobile.classList.add('abrir-menu'); 
    overMenu.classList.add('fechar-over'); 
});

// Função para fechar o menu ao clicar na sobreposição
overMenu.addEventListener('click', () => {
    menu_Mobile.classList.remove('abrir-menu');
    overMenu.classList.remove('fechar-over');  
});

// Função para fechar o menu ao clicar no botão de fechar
btnFechar.addEventListener('click', () => {
    menu_Mobile.classList.remove('abrir-menu'); 
    overMenu.classList.remove('fechar-over'); 
});
