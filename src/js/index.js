var modal = document.querySelector("#modalOverlay")


var projetos = document.querySelectorAll(".imagem-projeto-faculdade")

for(let projeto of projetos){
    projeto.addEventListener("click", function(){
        const videoId = projeto.getAttribute("id");
        modal.querySelector("iframe").textContent`Oi`

    });
}

function openModal(){
    modal.classList.add("openModal")
    var whiteModal = document.querySelector(".modal")
    setTimeout(function(){
        modal.classList.add("defModal");
        modal.classList.remove("modalOverlay");
        modal.classList.remove("openModal");

}, 2100);
    setTimeout(function(){whiteModal.classList.add("whiteModal")}, 1500);
}


function closeModal(){

        modal.classList.remove("defModal");
        modal.classList.add("modalOverlay");
        whiteModal.classList.remove("whiteModal")
        document.querySelector("#whiteModal").classList.remove("whiteModal")
        modal.querySelector("iframe").src=""

}