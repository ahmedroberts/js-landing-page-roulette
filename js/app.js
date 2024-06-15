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

// ul nav element
const mainNavUl = document.getElementById("navbar__list");

// get all sections
const mainSections = document.querySelectorAll("main section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const pageBody = document.body;
const numSections = mainSections.length;
const testDiv = document.createElement("div");
const testContent =
  "<br/><hr/><br/> >>> Number of Sectons: >>> " +
  numSections +
  " >>> <hr/><br/>";
testDiv.innerHTML = testContent;
testDiv.classList.add("test_color_01");
pageBody.append(testDiv);

const mainHeader = document.querySelector(".page__header");
mainHeader.append(testDiv);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildMainNavigationManually() {
  /** 1. create a list item
   * -- Test 1
   */
  const testNavLi = document.createElement("li");
  testNavLi.classList.add("menu__link")
  // 2. add text to list item
  // testNavLi.textContent = 'Raikage & Roulette';
  // 3. create and anchor
  const testNavAnchor = document.createElement("a");
  // 4. set anchor attributes
  testNavAnchor.href = "#1_King_Ahmd_https://ahmedroberts.com";
  testNavAnchor.target = "_blank";
  testNavAnchor.innerText = "1. Raikage & Roulette";
  // 5. append anchor to list item
  testNavLi.appendChild(testNavAnchor);
  // 6. append list item to up for Main Nav
  mainNavUl.appendChild(testNavLi);

  testNavAnchor.style.color = "darkorange";

  /** 1. create a list item
   * -- Test 1
   */
  const testNavLi2 = document.createElement("li");
  testNavLi2.classList.add("menu__link")
  // 2. add text to list item
  // testNavLi2.textContent = '2 Raikage & Roulette';
  // 3. create and anchor
  const testNavAnchor2 = document.createElement("a");
  // 4. set anchor attributes

  testNavAnchor2.href = "#2_King_Ahmd_https://ahmedroberts.com";
  testNavAnchor2.target = "_blank";
  testNavAnchor2.innerText = "2. Raikage & Roulette";

  // 5. append anchor to list item
  testNavLi2.appendChild(testNavAnchor2);
  // 6. append list item to up for Main Nav
  mainNavUl.appendChild(testNavLi2);

  testNavAnchor2.style.color = "darkorchid";
}

function buildMainNavDynamically() {
  let i = 1;
  for(const section of mainSections) {
    console.log(i);
    i = i++;
    // create list Items
    const navLi     = document.createElement('li');
    navLi.classList.add("menu__link");
    // crate anchor and attributes
    const navAnchor = document.createElement('a');
    navAnchor.href = `#${section.id}`;
    navAnchor.textContent = section.dataset.nav;
    // add anchor to list item
    navLi.appendChild(navAnchor);
    // add list item to mainNav
    mainNavUl.append(navLi);
  }

  console.log('Build a dynamic Navigation bar.');
}

buildMainNavDynamically();
buildMainNavigationManually();


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
