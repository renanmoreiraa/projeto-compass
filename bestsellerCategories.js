// Seleciona todas as seções de "Bestseller Products"
const bestsellerSections = document.querySelectorAll(".product-categories-wrapper");

bestsellerSections.forEach(section => {
    const categories = section.querySelectorAll(".product-categories a");
    const leftArrow = section.querySelector(".category-arrows .left-arrow");
    const rightArrow = section.querySelector(".category-arrows .right-arrow");

    let currentCategoryIndex = 0;

    // Função para atualizar a categoria ativa
    function updateActiveCategory(index) {
        categories.forEach((category, i) => {
            category.classList.toggle("active", i === index);
        });
    }

    // Evento para a seta da esquerda
    leftArrow.addEventListener("click", () => {
        currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
        updateActiveCategory(currentCategoryIndex);
    });

    // Evento para a seta da direita
    rightArrow.addEventListener("click", () => {
        currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
        updateActiveCategory(currentCategoryIndex);
    });

    // Evento para clique direto nas categorias
    categories.forEach((category, index) => {
        category.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            currentCategoryIndex = index;
            updateActiveCategory(currentCategoryIndex);
        });
    });

    // Inicializa a primeira categoria como ativa
    updateActiveCategory(currentCategoryIndex);
});
