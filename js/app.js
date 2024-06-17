/**
 * Define Global Variables
 *
 */

const mainMain = document.querySelector("main"); // Main section
const mainNavList = document.getElementById("navbar__list"); // ul nav element
// const mainSections = document.querySelectorAll("main section"); // get all sections

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
/// ---------------------------------------------------------------------------------
//  -- Retrieves all main sections
function getMainSections() {
  return document.querySelectorAll("main section");
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav functions

/// ---------------------------------------------------------------------------------
//  -- Builds the main navigation based on sections
function buildMainNav() {
  const mainSections = getMainSections();
  for (const section of mainSections) {
    // create list items
    const navListItem = document.createElement("li");
    navListItem.classList.add("menu__link");
    // crate anchor and attributes
    const navAnchor = document.createElement("a");
    navAnchor.href = `#${section.id}`;
    navAnchor.textContent = section.dataset.nav;
    // add anchor to list item
    navListItem.appendChild(navAnchor);
    // add list item to mainNav
    mainNavList.append(navListItem);

    // clicking an item from the navigation menu will scroll the section into view
    navAnchor.addEventListener("click", (e) => {
      console.log('navAnchor event called ... --AOR')
      e.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu - initialize functions
buildMainNav();

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
