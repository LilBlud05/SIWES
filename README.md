# SIWES Project

This project is a static web development practice folder created to learn and explore HTML, CSS, JavaScript, and front-end web page design. It contains multiple mini exercises, examples, and learning pages that demonstrate common web development concepts.

## Project Overview

The project is organized as a simple front-end website with:

- HTML pages for different lessons and tasks
- CSS files for styling and layout
- JavaScript files for interactions and logic
- Images used in the pages
- A root landing page that links to the content

The app does not use a framework or server. Everything is plain HTML, CSS, and JavaScript, so it runs directly in a browser.

## Main Files and Folders

### Root files

- `index.html` - The main homepage/landing page for the project.
- `tempCodeRunnerFile.js` - A temporary script file used during testing or development.

### `HTML/`

This folder contains the main web pages and learning exercises.

Examples include:

- `DAY2.html` to `DAY8.html` - Daily practice pages and tasks
- `Assessment.html` - Assessment page
- `exercise.html` - Exercise page
- `Guess.html` - Number guessing game page
- `Tasks.html` - Task list page
- `Page2.html` and `new.html` - Additional sample pages
- `JSDOM.html` and `JSDOM.js` - JavaScript DOM-related examples
- `External CSS.html`, `Internal CSS.html` - Styling practice pages

These files are usually linked together through anchor tags and navigation between pages.

### `CSS/`

This folder contains the styling for the project.

Examples:

- `styles.css` - General styling used in several pages
- `assessment.css` - Styling for the assessment page
- `Assignment2.css` - Styling for assignment-related pages
- `external.css` - Styles for external CSS learning examples

The CSS defines colors, layout, spacing, buttons, forms, cards, and responsive behavior.

### `JavaScript/`

This folder stores JavaScript logic and DOM manipulation scripts.

Examples:

- `script.js` - Counter logic for increment/decrement/reset actions
- `exercise.js` - JavaScript practice code
- `functions.js` - Function examples
- `map.js` - Array and map method examples
- `object.js` - Objects and properties exercises
- `tasks.js` - Task-related script logic
- `array.js` - Array practice
- `test.js` - Testing or practice script

These scripts are used to teach how JavaScript interacts with HTML elements, retrieves values, updates text content, and responds to events.

### `images/`

This folder contains image assets used across the project for design and demonstration purposes.

### `Gallery/`

This folder is reserved for gallery-related content or additional visual assets. It may be used for image collections or gallery pages.

## How the Project Works

1. A browser loads the project entry page, usually `index.html`.
2. The HTML file links to CSS and JavaScript files.
3. The CSS styles the layout, colors, fonts, and responsiveness.
4. JavaScript adds interactivity such as:
   - updating counters
   - handling button clicks
   - changing text dynamically
   - validating user input
   - creating mini games such as the guessing game
5. Each separate HTML file may act as a standalone lesson or exercise page.

## Example Flow

For a typical page:

- HTML defines the structure
- CSS controls the appearance
- JavaScript listens for events and updates the page dynamically

Example pattern:

```html
<button id="submitButton">Guess</button>
<script>
  document.getElementById("submitButton").addEventListener("click", function () {
    alert("Button clicked!");
  });
</script>
```

This is the basic flow used throughout the project: page structure → styling → JavaScript interaction.

## How to Run the Project

Because it is a static website, you can open the files directly in a browser.

### Option 1

Open `index.html` in any browser.

### Option 2

Use a local web server such as:

```bash
python3 -m http.server
```

Then visit:

```text
http://localhost:8000
```

## Learning Focus

This project mainly covers:

- HTML structure and semantic elements
- CSS styling and layout techniques
- JavaScript fundamentals
- DOM manipulation
- Event handling
- Form and input handling
- Basic web page navigation and design

## Summary

This repository is a classroom-style front-end practice project. It helps build understanding of how websites are structured and how HTML, CSS, and JavaScript work together to create interactive, styled web pages.
