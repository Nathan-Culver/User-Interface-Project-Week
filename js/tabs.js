class TabLink {
  constructor(element) {

    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    this.tabItem = new TabItem(this.item);

    this.element.addEventListener('click', () => this.select()
    );
  };

  select() {

    let links = document.querySelectorAll('.tabs-link');

    links.forEach( link => 
      link.classList.remove('tabs-link-selected')
    );

    this.element.classList.add('tabs-link-selected');

    this.tabItem.select(this.element);
  }
}

class TabItem {
  constructor(element) {

    this.element = element;
  }

  select() {

    let items = document.querySelectorAll('.tabs-item');

    items.forEach( item => 
      item.classList.remove('tabs-item-selected')
    )

    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');

links = Array.from(links).map( link => new TabLink(link));