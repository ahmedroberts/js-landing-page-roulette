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
const mainNav = document.getElementById('navbar__list');

// get all sections
const mainSections = document.querySelectorAll('main section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const pageBody = document.body;
const numSections = mainSections.length;
const testDiv = document.createElement('div')
const testContent = "<br/><hr/><br/> >>> Number of Sectons: >>> " + numSections + " >>> <hr/><br/>";
testDiv.innerHTML = testContent;
testDiv.classList.add("test_color_01");
pageBody.append(testDiv);

const mainHeader = document.querySelector('.page__header');
mainHeader.append(testDiv);



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMainNavigation () {
  
}


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


