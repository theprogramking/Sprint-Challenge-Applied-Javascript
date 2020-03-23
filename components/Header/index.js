// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Create the element
    let div = document.createElement("div");
    let dateSpan = document.createElement("span");
    let h1 = document.createElement("h1");
    let tempSpan = document.createElement("span");

    // Set classes 
    div.setAttribute("class", "header");
    dateSpan.setAttribute("class", "date");
    tempSpan.setAttribute("class", "temp");

    // Set text content
    dateSpan.textContent = "MARCH 28, 2019";
    h1.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    // Append the elements
    div.append(dateSpan);
    div.append(h1);
    div.append(tempSpan);

    return div;
}

let container = document.querySelector(".header-container");
container.append(Header());