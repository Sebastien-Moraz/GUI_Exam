document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const closeButton = document.querySelector(".close");
    const openButton = document.querySelector(".open");
  
    closeButton.addEventListener("click", () => {
      menu.style.display = "none";
    });
  
    openButton.addEventListener("click", () => {
      menu.style.display = "flex";
    });
  });
  