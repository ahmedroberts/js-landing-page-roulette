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

// Main section
const mainMain = document.querySelector("main");
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
  testNavLi.classList.add("menu__link");
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
  testNavLi2.classList.add("menu__link");
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
  for (const section of mainSections) {
    console.log(i);
    i = i++;
    // create list Items
    const navLi = document.createElement("li");
    navLi.classList.add("menu__link");
    // crate anchor and attributes
    const navAnchor = document.createElement("a");
    navAnchor.href = `#${section.id}`;
    navAnchor.textContent = section.dataset.nav;
    // add anchor to list item
    navLi.appendChild(navAnchor);
    // add list item to mainNav
    mainNavUl.append(navLi);
  }

  console.log("Build a dynamic Navigation bar.");
}
/// ---------------------------------------------------------------------------------
//  -- Adds a section
function addWinningPlay() {
  // Adds a new section to the main content area and updates the navigation list
  const newSection = document.createElement("section");
  newSection.id = "winning";
  newSection.dataset["nav"] = "Winning Play";
  newSection.innerHTML = `<div class="landing__container">
<h2>Winning Play</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed convallis sollicitudin mauris ac tincidunt. 
Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, 
ut pulvinar quam nunc eu augue. 
Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. 
Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
Phasellus imperdiet porta orci eget mollis.  Morbi a tincidunt felis. 
Sed leo nunc, pharetra et elementum non, faucibus vitae elit. 
Integer nec libero venenatis libero ultricies molestie semper in tellus. 
Sed congue et odio sed euismod. Pellentesque maximus imperdiet elit a pharetra. 
Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, 
ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, 
vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet 
porttitor tortor, eget elementum tortor mollis non.</p>
</div>`;

  // Section creation and appending omitted for brevity
  mainMain.appendChild(newSection);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addWinningPlay();
buildMainNavDynamically();
buildMainNavigationManually();

// Scroll to section on link click

// Set sections as active
