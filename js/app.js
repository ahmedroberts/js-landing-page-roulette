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

    // scrollToSections();
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

// ****************************  Slowly *******************

const navMenuList = document.querySelector('.navbar__list');

navMenuList.addEventListener("click", setActive);
// Set sections as active
function setActive (event) {
event.preventDefault();
const navMenuItems = document.querySelector('.menu__link a');
navMenuItems.foreach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    item.classList.add('active');
    item.parentElement.classList.add('active');
  })
}) }