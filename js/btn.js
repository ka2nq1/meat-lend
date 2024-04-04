window.onscroll = function showHeader(){
    let cont = document.querySelector('.cont');

    if(window.scrollY > 790){
        cont.style.display = "block";
    } else {
        cont.style.display = "none";
    }
}