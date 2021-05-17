
// switchTheme = () => {
//   let targetTheme = document.getElementById("themeSwitcher").textContent;
//   if(targetTheme == "dark"){
//     document.getElementById("themeStyleSheet").setAttribute("href", "css/dark.css");
//     document.getElementById("themeSwitcher").textContent = "light";
//   } else {
//     document.getElementById("themeStyleSheet").setAttribute("href", "css/light.css");
//     document.getElementById("themeSwitcher").textContent = "dark";
//   }
// };
// document
// .getElementById("themeSwitcher")
// .addEventListener("click", switchTheme)



const toggleButton = document.getElementsByClassName("toggle-button")[0]
// gets the toggle button element,since it returns an array [0] is used to just get the first element being 'toggle-button'
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
// grabs the navbar navbarLinks
if (toggleButton){
toggleButton.addEventListener("click", () =>{
  // whenever the element is clicked run this function
  navbarLinks.classList.toggle("active")
  // if the active class doesn't exist, this will add it. If it does exist, it will remove it
})
}
const toggleButton2 = document.getElementsByClassName("toggle-button2")[0]
// gets the toggle button element,since it returns an array [0] is used to just get the first element being 'toggle-button'
const navbarLinks2 = document.getElementsByClassName("navbar-links2")[0]
// grabs the navbar navbarLinks
if (toggleButton2){
toggleButton2.addEventListener("click", () =>{
  // whenever the element is clicked run this function
  navbarLinks2.classList.toggle("active")
  // if the active class doesn't exist, this will add it. If it does exist, it will remove it
})
}

function submitForm() {
   window.location.href="thankyou.html";
   // when form is submited, go to thankyou.html page
   return false; // Prevent page refresh
}


const searchButton = document.getElementsByClassName("search-button")[0]
// grabs the search button element

searchButton.addEventListener("click", () =>{
  let searchTerm = document.getElementsByClassName('search')[0].value;
  // when clicked, takes the text in the search box as a value
  let galleryArray = document.querySelectorAll(".gallery div");
  Array.from(galleryArray).forEach( element => {
    if(!element.getAttribute('data-tags').includes(searchTerm)){
      searchTerm = searchTerm.toLowerCase();
      element.style.display = "none";
      // cycles through the new array created within the gallery div, searching
      // through the data tags to find matching value
      // makes all search terms be read in lower case
    }
   })
  })
