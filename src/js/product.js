import { templates ,select } from './settings.js';
import { utils } from '/utilis.js';

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
    thisProduct.element = utils.createDOMFormHTML(generatedHTML);
    /* find menu container */
    const menuContainerHome = document.querySelector(select.containerOf.home);
    /* add element to menu */
    menuContainerHome.append(thisProduct.element);
  }
}


export default Product;