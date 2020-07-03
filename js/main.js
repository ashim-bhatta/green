var isNavOpen = false;
const mobMenu = document.getElementById('mob-menu');
const toogleMenu = document.getElementById('toggle-menu');

openMobMenu = ( ) => {
    if ( isNavOpen == false ){
        isNavOpen = true
        mobMenu.classList.add('open')
        toogleMenu.classList.add('open')

    }
    else if(isNavOpen == true){
        isNavOpen = false
        mobMenu.classList.remove('open')
        toogleMenu.classList.remove('open')
    }
}

