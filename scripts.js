// 1. When PET button is clicked, icon changes accordingly to corresponding state.
const petButtons = document.querySelectorAll(".btn-full");
petButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const icon = btn.querySelector("i");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
    });
});

// 2. When PET ALL button is clicked, all PET button icon change into a solid icon.
const selectAllBtn = document.querySelector("#btn-select-all");
selectAllBtn.addEventListener("click", () => {
    petButtons.forEach((btn) => {
        const icon = btn.querySelector("i");
        icon.classList.add("fa-solid");
        icon.classList.remove("fa-regular");
    })
})

// 3. When UNPET ALL button is clicked, all PET button icon change into a regular icon.
const unselectAllBtn = document.querySelector("#btn-unselect-all");
unselectAllBtn.addEventListener("click", () => {
    petButtons.forEach((btn) => {
        const icon = btn.querySelector("i");
        icon.classList.add("fa-regular");
        icon.classList.remove("fa-solid");
    })
})

const cards = document.querySelectorAll(".card");
let selectedIndex = 0; 

function updateSelection(index) {
    document.querySelector(".card-selected")?.classList.remove("card-selected", "active");
    cards[index].classList.add("card-selected", "active");
    selectedIndex = index;
}

// 4. When Last button >> is clicked, the last card from the gallery will be highlighted.
const lastBtn = document.querySelector("#btn-select-last");
lastBtn.addEventListener("click", () => {
    updateSelection(cards.length - 1);
});


// 5. When First button << is clicked, the first card from the gallery will be highlighted.
const firstBtn = document.querySelector("#btn-select-first");
firstBtn.addEventListener("click", () => {
    updateSelection(0);
});

// 6. When Next button > is clicked, the highlighted card will be the next item from the currently selected.
//     * If the last item is currently selected, then next button is clicked, the highlight card will be moved to the first card from the gallery.
const nextBtn = document.querySelector("#btn-select-next");
nextBtn.addEventListener("click", () => {
    let nextIndex = (selectedIndex + 1) % cards.length;
    updateSelection(nextIndex);
});


// 7. When Previous button < is clicked, the highlighted card will be the previous item from the currently selected.
//     * If the last item is currently selected, then next button is clicked, the highlight card will be moved to the first card from the gallery.
const prevBtn = document.querySelector("#btn-select-previous");
prevBtn.addEventListener("click", () => {
    let prevIndex = (selectedIndex - 1 + cards.length) % cards.length;
    updateSelection(prevIndex);
});


// 8. When Site Logo "BARK!-ada" from the banner is clicked, an animation will display on the site logo.
//     * Can reference to https://animate.style/
const banner = document.querySelector(".banner-content");
banner.addEventListener("click", () => {
    banner.classList.add("animate__animated", "animate__bounce");
    setTimeout(()=> {
        banner.classList.remove("animate__animated", "animate__bounce");
    }, 1000);
});