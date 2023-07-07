const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("bueno, con esta pagina lo que quiero es recordarte cuanto me encantas y lo feliz que me haces, te amo muchisimo y aprendere mas para hacerte una pagina muchisimo mas bonita asi como tu")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
})
noBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);