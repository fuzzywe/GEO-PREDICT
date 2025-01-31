document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let delay = 0.2; // Animation delay increment

    cards.forEach((card, index) => {
        card.style.animationDelay = `${delay * index}s`;
        card.classList.add("animate");
    });
});
