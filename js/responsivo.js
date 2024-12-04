//HAMBÚRGUER
document.addEventListener("DOMContentLoaded", function () {
    const menuHamburguer = document.querySelector(".pos-f-t");

    function toggleMenuHamburguer() {
        if (window.innerWidth <= 768) {
            menuHamburguer.style.display = "block";
        } else {
            menuHamburguer.style.display = "none";
        }
    }

    toggleMenuHamburguer();

    window.addEventListener("resize", toggleMenuHamburguer);
});
