document.addEventListener("DOMContentLoaded", function() {
const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const addButton = counter.querySelector(".add");
        const removeButton = counter.querySelector(".remove");
        const span = counter.querySelector("span");

        addButton.addEventListener("click", () => {
            const value = parseInt(span.textContent);
            span.textContent = value + 1;
        });

        removeButton.addEventListener("click", () => {
            const value = parseInt(span.textContent);
            if (value <= 0) return;
            span.textContent = value - 1;
        });
    });
});