/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const pageNav = document.querySelector(".page__nav");
let isScrolling = false;

// Navbar unordered list replacement
const navList = document.createElement("ul");
navList.className = "nav-list";

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Retrieves all section elements within the main content area
function getSections() {
  return document.querySelectorAll(".page__main section");
}

// Populates the navigation list based on sections available in the main content area
function createNavList() {
  const fragment = document.createDocumentFragment();
  pageNav.innerHTML = ""; // Clears existing navigation items
  navList.innerHTML = "";
  getSections().forEach((section) => {
    const id = section.id;
    const text = section.dataset.nav;
    const listItem = document.createElement("li");
    listItem.className = "nav-list-item";

    const linkTag = document.createElement("a");
    linkTag.setAttribute("href", `#${id}`);
    linkTag.textContent = text;
    listItem.appendChild(linkTag);
    navList.appendChild(listItem);
    /* Append to ul navbar__list ************************************************** */
    fragment.appendChild(navList);
  });
  pageNav.appendChild(fragment);
}

// Retrieves the navigation item corresponding to a given section ID
function getNavItem(id) {
  for (const item of navList.children) {
    if (item.children[0].href.split("#")[1] === id) {
      return item;
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Add class 'active' to section when near top of viewport
// Dynamically updates the active class on sections and navigation items based on scroll position
function makeActive() {
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 500);

  getSections().forEach((section) => {
    const boundingBox = section.getBoundingClientRect();
    if (boundingBox.top < 100 && boundingBox.bottom > boundingBox.height / 4) {
      if (!section.className.includes("your-active-class")) {
        section.classList.add("your-active-class");
      }
      for (const item of navList.children) {
        item.classList.remove("active");
      }
      const activeNav = getNavItem(section.id);
      activeNav.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event
// Handles the smooth scrolling to sections when navigation items are clicked
function scroll(event) {
  event.preventDefault();
  isScrolling = true;
  const target = event.target;
  if (target.tagName == "A") {
    document.removeEventListener("scroll", makeActive);
    getSections().forEach((section) =>
      section.classList.remove("your-active-class")
    );
    for (item of navList.children) {
      item.classList.remove("active");
    }
    const id = "#" + target.href.split("#")[1];
    const section = document.querySelector(id);

    section.classList.toggle("your-active-class");
    section.scrollIntoView({
      behavior: "smooth",
    });
    target.parentElement.classList.add("active");
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// -- Adds click event listener to navigation list for smooth scrolling
createNavList();
navList.addEventListener("click", scroll);

// Scroll to section on link click
// Set sections as active
document.addEventListener("scroll", makeActive);
