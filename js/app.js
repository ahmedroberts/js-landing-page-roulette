// Define Global Variables
const pageHeader = document.querySelector(".page__header");
const pageNav = document.querySelector(".page__nav");
const mainPage = document.querySelector(".page__main");
let isHovering = false;
let isScrolling = false;

// Create a the navigation list
const navList = document.createElement("ul");
navList.className = "nav-list";

// Create a go to top button
const goToTopButton = document.createElement("button");
goToTopButton.textContent = "Go to Top";
goToTopButton.className = "btn-gototop";
mainPage.insertAdjacentElement("afterend", goToTopButton);

// This collects all the sections
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
    fragment.appendChild(navList);
  });
  pageNav.appendChild(fragment);
}
createNavList();

// Click Event listener for scrolling
navList.addEventListener("click", scroll);

// Smooths the scrolling
function scroll(event) {
  event.preventDefault();
  isScrolling = true;
  const target = event.target;
  if (target.tagName == "A") {
    document.removeEventListener("scroll", makeActive);
    getSections().forEach((section) =>
      section.classList.remove("active-section")
    );
    for (item of navList.children) {
      item.classList.remove("active-list-item");
    }
    const id = "#" + target.href.split("#")[1];
    const section = document.querySelector(id);

    section.classList.toggle("active-section");
    section.scrollIntoView({
      behavior: "smooth",
    });
    target.parentElement.classList.add("active-list-item");
  }
}

// Dynamically updates the active class on sections and navigation items based on scroll position
function makeActive() {
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 500);

  showHeader();
  addBackToTopButton();
  getSections().forEach((section) => {
    const boundingBox = section.getBoundingClientRect();
    if (boundingBox.top < 100 && boundingBox.bottom > boundingBox.height / 4) {
      if (!section.className.includes("active-section")) {
        section.classList.add("active-section");
      }
      for (const item of navList.children) {
        item.classList.remove("active-list-item");
      }
      const activeNav = getNavItem(section.id);
      activeNav.classList.add("active-list-item");
    } else {
      section.classList.remove("active-section");
    }
  });
}
document.addEventListener("scroll", makeActive);

// Retrieves the navigation item corresponding to a given section ID
function getNavItem(id) {
  for (const item of navList.children) {
    if (item.children[0].href.split("#")[1] === id) {
      return item;
    }
  }
}

createNavList();

// Handles the "Go to Top" button's click event for smooth scrolling to the top of the page
goToTopButton.addEventListener("click", (evt) => {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
});
// Initially hides the "Go to Top" button
goToTopButton.classList.add("hidden");

// Shows or hides the "Go to Top" button based on scroll position
function addBackToTopButton() {
  const rect = mainPage.getBoundingClientRect();
  if (window.innerHeight / 2 + rect.top < 0) {
    goToTopButton.classList.remove("hidden");
  } else {
    goToTopButton.classList.add("hidden");
  }
}

// Show and hide the page header
function hideHeader() {
  if (!isHovering && !pageHeader.classList.contains("hidden")) {
    pageHeader.classList.add("hidden");
  }
}
function showHeader() {
  pageHeader.classList.remove("hidden");
}

// Hides the page header after a delay when scrolling stops
document.addEventListener("scrollend", (e) => {
  if (isScrolling) {
    isScrolling = false;
    document.addEventListener("scroll", makeActive);
  }
  setTimeout(hideHeader, 1500);
});
// Ensures the page header is shown when hovered over
pageHeader.addEventListener("mouseover", showHeader);

pageHeader.addEventListener("mouseover", function () {
  isHovering = true; // Update flag to true when mouse enters
  showHeader();
});

// Updates the isHovering flag when the mouse leaves the header
pageHeader.addEventListener("mouseout", function () {
  isHovering = false;
});
