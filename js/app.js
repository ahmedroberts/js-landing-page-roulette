/**
 * Define Global Variables
 *
 */

const mainMain = document.querySelector("main"); // Main section
const mainNavUl = document.getElementById("navbar__list"); // ul nav element
const mainSections = document.querySelectorAll("main section"); // get all sections

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav functions

/// ---------------------------------------------------------------------------------
//  -- Builds the main navigation based on sections
function buildMainNavDynamically() {
  for (const section of mainSections) {
    // create list items
    const navLi = document.createElement("li");
    navLi.classList.add("menu__link");
    // crate anchor and attributes
    const navAnchor = document.createElement("a");
    navAnchor.href = `#${section.id}`;
    navAnchor.textContent = section.dataset.nav;

    // clicking an item from the navigation menu will scroll the section into view
    navAnchor.addEventListener("click", (e) => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    });

    // add anchor to list item
    navLi.appendChild(navAnchor);
    // add list item to mainNav
    mainNavUl.append(navLi);
  }
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu - initialize functions
buildMainNavDynamically();

// Scroll to section on link click
/// ---------------------------------------------------------------------------------
//  -- Adds a smooth scroll
function scrollToSections() {
  // get all anchors in the main navigation
  const navMenuLinks = document.querySelectorAll(".menu__link a");
  console.log(navMenuLinks.length);
  // add smooth scroll to each anchor
  for (const navAnchor of navMenuLinks) {
    let hrefValue = navAnchor.getAttribute("href");
    hrefValue = hrefValue.substring(1);

    const sectionElement = String(document.getElementById(hrefValue));
    console.log("first : ", sectionElement);
    // sectionElement = sectionElement.substring(1);

    console.log(hrefValue);
    navAnchor.addEventListener("click", (e) => {
      e.preventDefault();
      sectionElement.scrollIntoView({ behavior: "smooth" });
      // hrefValue.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
// scrollToSections();

// Set sections as active
