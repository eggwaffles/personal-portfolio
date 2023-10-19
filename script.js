const filterButtons = document.querySelectorAll("#filterbuttons button");
const filterableCards = document.querySelectorAll(".gallerycontainer .galleryitem");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    
    filterableCards.forEach(galleryitem => {
        galleryitem.classList.add("hide");

        if(galleryitem.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            galleryitem.classList.remove("hide");
        }
    });
};
filterButtons.forEach(button => button.addEventListener("click",filterCards));