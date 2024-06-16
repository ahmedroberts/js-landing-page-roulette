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

/// ---------------------------------------------------------------------------------
//  -- Create a main section HTML Fragment
function createSectionFragment() {
  const sectionFragment = `<h2>Winning Play</h2>
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
    porttitor tortor, eget elementum tortor mollis non.</p>`;

  return sectionFragment;
}
// create winning__play section
function createWinningPlaySection() {
  const winningPlaySection = document.createElement("section");
  winningPlaySection.id = "winning__play";
  winningPlaySection.dataset.nav = "Winning Play";
  // create div in section
  const winningPlayDiv = document.createElement("div");
  winningPlayDiv.classList.add("landing__container");
  winningPlayDiv.innerHTML = createSectionFragment();
  winningPlaySection.append(winningPlayDiv);
  mainMain.append(winningPlaySection);
}

createWinningPlaySection();

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

// Set sections as active
