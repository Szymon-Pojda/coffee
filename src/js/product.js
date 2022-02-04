import { templates , select } from './settings.js';
import  utils  from './utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    console.log(thisProduct.id);

    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProduct = this;
    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const menuContainerPages = document.querySelector(select.containerOf.pages);
    /* add element to menu */
    menuContainerPages.appendChild(thisProduct.element);
  }
}


export default Product;