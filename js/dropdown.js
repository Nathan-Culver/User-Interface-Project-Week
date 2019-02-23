class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)  
    this.button = element.querySelector('.dropdown-img')
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {this.toggleContentMenu()});
    this.button.addEventListener('click', () => {this.toggleH1Front()});
    this.button.addEventListener('click', () => {this.toggleDropdownImgFront()});
  }

  toggleContentMenu() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }

  toggleH1Front() {
    
    let element = document.getElementById("h1-z-index");
    element.classList.toggle("h1-z-index-style");
  }

  toggleDropdownImgFront() {
    
    let element = document.getElementById("dropdown-img-z-index");
    element.classList.toggle("dropdown-img-z-index-style");
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));