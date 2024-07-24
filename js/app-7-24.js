// Selects various elements from the DOM to manipulate or interact with
const pageHeader = document.querySelector(".page__header")
const pageNav = document.querySelector(".page__nav");
const mainEl = document.querySelector(".page__main");
const container = document.querySelector(".container");
let isHovering = false;
let isScrolling = false;

// Creates a navigation list and a button for scrolling to the top of the page
const navList = document.createElement("ul");
navList.className = "nav-list";
const goToTopButton = document.createElement("button");
goToTopButton.textContent= "Go to Top";
goToTopButton.className = "to-top-btn"
mainEl.insertAdjacentElement("afterend", goToTopButton)

// Retrieves all section elements within the main content area
function getSections(){
    return  document.querySelectorAll(".page__main section");
}

// Populates the navigation list based on sections available in the main content area
function createNavList(){
    
    const fragment = document.createDocumentFragment();
    pageNav.innerHTML = ""; // Clears existing navigation items
    navList.innerHTML = "";
    getSections().forEach(section =>{
        const id = section.id;
        const text = section.dataset.nav;
        const listItem = document.createElement("li");
        listItem.className = "nav-list-item";
        
        const linkTag = document.createElement("a");
        linkTag.setAttribute("href", `#${id}`);
        linkTag.textContent = text;
        listItem.appendChild(linkTag);
        navList.appendChild(listItem);
        fragment.appendChild(navList)
    })
    pageNav.appendChild(fragment);
    
}
createNavList();

// Adds click event listener to navigation list for smooth scrolling
navList.addEventListener("click", scroll);

// Handles the smooth scrolling to sections when navigation items are clicked
function scroll(event){
    event.preventDefault();
    isScrolling = true;
    const target = event.target;
    if(target.tagName =="A"){
        document.removeEventListener("scroll", makeActive);
        getSections().forEach(section => section.classList.remove("active-section"))
        for (item of navList.children){
            item.classList.remove("active-list-item");
        }
        const id = "#" + target.href.split("#")[1];
        const section = document.querySelector(id);
    
        section.classList.toggle('active-section');
        section.scrollIntoView({
            behavior: "smooth",
        });
        target.parentElement.classList.add("active-list-item");
    }
}

// Dynamically updates the active class on sections and navigation items based on scroll position
function makeActive(){
    isScrolling = true;
    setTimeout(() => {isScrolling = false;}, 500);

    showHeader();
    addBackToTopButton();
    getSections().forEach(section =>{
       const boundingBox =  section.getBoundingClientRect();
       if (boundingBox.top < 100  && boundingBox.bottom > boundingBox.height /4){
            if(!section.className.includes('active-section')){
                section.classList.add('active-section');
            }
            for (const item of navList.children){
                item.classList.remove("active-list-item");
            }
            const activeNav = getNavItem(section.id);
            activeNav.classList.add("active-list-item");
       }
       else{
        section.classList.remove('active-section');
       }
    })
}
document.addEventListener("scroll", makeActive);

// Retrieves the navigation item corresponding to a given section ID
function getNavItem(id){
    for(const item of navList.children){
         if(item.children[0].href.split("#")[1]  === id){
            return item;
         }
    }
}

createNavList()

// Handles the "Go to Top" button's click event for smooth scrolling to the top of the page
goToTopButton.addEventListener("click",  (evt) =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// Initially hides the "Go to Top" button
goToTopButton.classList.add("hidden");

// Shows or hides the "Go to Top" button based on scroll position
function addBackToTopButton(){
    const rect = container.getBoundingClientRect();
    if(window.innerHeight/2 + rect.top < 0 ){
        goToTopButton.classList.remove("hidden");
    } 
    else{
        goToTopButton.classList.add("hidden");
    }
}

function hideHeader(){
    if(!isHovering  && !pageHeader.classList.contains("hidden"))
      {pageHeader.classList.add("hidden")}

}
function showHeader(){
    pageHeader.classList.remove("hidden");
}

// Hides the page header after a delay when scrolling stops
document.addEventListener("scrollend", (e) =>{
    if(isScrolling){
        isScrolling = false;
        document.addEventListener("scroll", makeActive);
    }
    
    setTimeout(hideHeader, 1500);
});
// Ensures the page header is shown when hovered over
pageHeader.addEventListener("mouseover", showHeader);

pageHeader.addEventListener("mouseover", function() {
    isHovering = true; // Update flag to true when mouse enters
    showHeader();
});

// Updates the isHovering flag when the mouse leaves the header
pageHeader.addEventListener("mouseout", function() {
    isHovering = false; 
});
