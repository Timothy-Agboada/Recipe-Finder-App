## 🚀 30-Day Coding Challenge: Day 4

This project is the fourth entry in my 30-day coding challenge. The objective for today was to build a highly practical and visually appealing web application that interacts with a third-party API. This app demonstrates the ability to handle asynchronous operations, manage a multi-step data flow, and create a professional, user-friendly interface.

### 📖 Project Overview

This is a responsive and modern Recipe Finder application that allows users to discover meals based on a single ingredient. The app fetches a list of recipes from TheMealDB API and displays them in a clean, card-based grid. Clicking on a recipe card opens a detailed pop-up modal with the full ingredient list and cooking instructions, providing a seamless user experience without ever leaving the page.

A strong emphasis was placed on creating a polished and aesthetically pleasing UI to complement the application's functionality.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface.
![Jun-10-2025 19-53-11](https://github.com/user-attachments/assets/812f40f8-d011-4d31-9f4b-8e7c39eb7df8)


### 🌟 Key Features

* **Live Recipe Search:** Fetches and displays recipes in real-time from TheMealDB API based on a user-provided ingredient.
* **Interactive Modal for Details:** Clicking a recipe card triggers a second API call to fetch full meal details, which are then displayed in a sleek pop-up modal.
* **Polished & Appealing UI:** A warm, inviting color scheme, modern typography, and smooth animations create a professional and enjoyable user experience.
* **Responsive Grid Layout:** The recipe results are displayed in a fully responsive grid that looks great on all devices, from mobile phones to desktop monitors.
* **Efficient Event Handling:** Uses event delegation to efficiently manage clicks on dynamically generated recipe cards.
* **Clear User Feedback:** The interface provides clear loading and error messages to keep the user informed of the application's state.

### 💻 Technologies Used

This project was built using core front-end technologies to demonstrate fundamental development skills.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![API](https://img.shields.io/badge/API-%23000000.svg?style=for-the-badge&logo=databricks&logoColor=white)

* **TheMealDB API:** Used as the source for all recipe and meal data.
* **Google Fonts:** For the 'Poppins' font family.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/recipe-finder-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd recipe-finder-app
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No API key or special installations are required.

### 🎯 Learning Objectives

This project was an excellent opportunity to practice and showcase several critical web development skills:

* **Multi-Step Asynchronous Operations:** Managing a sequence of API calls where one call depends on the results of another.
* **Complex DOM Manipulation:** Dynamically generating a grid of elements and a detailed modal view from structured JSON data.
* **Advanced UI/UX:** Focusing on creating a visually appealing and intuitive interface with CSS, including layout, typography, color theory, and animations.
* **Event Delegation:** Implementing a more performant and scalable event handling model for dynamic content.
* **Problem Solving:** Parsing a complex data object from a real-world API and extracting and formatting the necessary information for display.
