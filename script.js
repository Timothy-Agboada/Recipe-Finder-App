document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultsContainer = document.getElementById('results-container');
    const messageDiv = document.getElementById('message');
    
    // Modal elements
    const modalContainer = document.getElementById('recipeModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalRecipeDetails = document.getElementById('modalRecipeDetails');

    // Fetch recipes by ingredient
    async function fetchRecipesByIngredient(ingredient) {
        displayMessage("Searching for recipes...");
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            if (data.meals) {
                displayRecipeCards(data.meals);
            } else {
                displayMessage("Sorry, no recipes found. Try another ingredient!");
            }
        } catch (error) {
            console.error("Error fetching recipes:", error);
            displayMessage("An error occurred. Please try again later.");
        }
    }

    // Display recipe cards in the grid
    function displayRecipeCards(recipes) {
        resultsContainer.innerHTML = ''; // Clear previous results
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.dataset.id = recipe.idMeal; // Store meal ID in data attribute

            recipeCard.innerHTML = `
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                <div class="recipe-info">
                    <h3>${recipe.strMeal}</h3>
                </div>
            `;
            resultsContainer.appendChild(recipeCard);
        });
    }

    // Fetch full recipe details by ID
    async function fetchRecipeDetails(mealID) {
        modalRecipeDetails.innerHTML = '<p>Loading recipe details...</p>';
        openModal();

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
            const data = await response.json();
            displayRecipeDetails(data.meals[0]);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
            modalRecipeDetails.innerHTML = '<p>Could not load recipe details.</p>';
        }
    }

    // Display the full recipe details in the modal
    function displayRecipeDetails(meal) {
        let ingredientsList = '';
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
                ingredientsList += `<li>${measure} ${ingredient}</li>`;
            } else {
                break; // No more ingredients
            }
        }

        modalRecipeDetails.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h4>Ingredients</h4>
            <ul>${ingredientsList}</ul>
            <h4>Instructions</h4>
            <p>${meal.strInstructions.replace(/\n/g, '<br>')}</p>
        `;
    }

    // Modal helper functions
    function openModal() {
        modalContainer.classList.remove('hidden');
    }
    function closeModal() {
        modalContainer.classList.add('hidden');
    }

    // --- Event Listeners ---

    // Listener for search button and Enter key
    const performSearch = () => {
        const ingredient = searchInput.value.trim();
        if (ingredient) {
            fetchRecipesByIngredient(ingredient);
        }
    };
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', e => e.key === 'Enter' && performSearch());
    
    // Listener for recipe card clicks (Event Delegation)
    resultsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.recipe-card');
        if (card) {
            fetchRecipeDetails(card.dataset.id);
        }
    });

    // Listeners for closing the modal
    modalCloseBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', e => (e.target === modalContainer) && closeModal());
    
    // Helper to display messages
    function displayMessage(message) {
        resultsContainer.innerHTML = `<div class="message"><p>${message}</p></div>`;
    }
});