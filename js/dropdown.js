class Dropdown {
  constructor(element) {
    
    this.element = element;
     
    this.button = element.querySelector('.dropdown-img')
    
    this.content = element.querySelector('.dropdown-content');
    
    this.button.addEventListener('click', () => {this.toggleContentMenu()});
    this.button.addEventListener('click', () => {this.toggleH1Front()});
    this.button.addEventListener('click', () => {this.toggleDropdownImgFront()});
  }

  toggleContentMenu() {
    
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

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));