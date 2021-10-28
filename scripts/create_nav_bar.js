// Create the big parent div
const nav_bar = document.querySelector("#nav_bar");

// Smaller divs
const games_span = document.createElement("span");
const hardware_span = document.createElement("span");
const software_span = document.createElement("span");
const contact_us_span = document.createElement("span");
const about_us_span = document.createElement("span");

// Create anchor tags
const anchor = document.createElement("a");

// List of different divs
list_of_boxes = [games_span, hardware_span, software_span, contact_us_span, about_us_span];
list_of_names = ["Games", "Hardware", "Software", "Contact us", "About us"];
list_of_html_files = ["games.html", "hardware.html", "software.html", "contact_us.html", "about_us.html"];

// Styling the parent div (and all common styling of children elements)
nav_bar.style.backgroundColor = "black";
nav_bar.style.padding = "25px";
nav_bar.style.borderBottomRightRadius = "1.5%";
nav_bar.style.borderBottomLeftRadius = "1.5%";

// Handling of each div before appending to parent div (nav_bar)
let counter = 0
for (i of list_of_boxes){  
    // Create the links
    const anchor = document.createElement("a");
    anchor.href= (list_of_html_files[counter]);
    anchor.innerHTML = (list_of_names[counter]);
    console.log(anchor);

    // Giving each div a header
    anchor.innerHTML = list_of_names[counter];
    
    // Styling the element at hand (from list_of_boxes)
            // Stylinng Box
    anchor.style.padding = "10px";
    anchor.style.marginLeft = "12%";
            // Styling text content
    anchor.style.textDecoration = "none";
    anchor.style.color = "white";
    anchor.style.fontFamily = "Sendha, verdana, sans-serif";                                // ISSUE!!! SENDHA NOT WORKING PROPERLY (Custom font)
    anchor.style.textShadow = "0px 2px 6px #ff00ff"

    // Appending new divs to parent div (nav_bar div)
    nav_bar.appendChild(anchor);

    // Accumulator Variable
    counter += 1;
}

// add inner HTML to divs
console.log(nav_bar);
