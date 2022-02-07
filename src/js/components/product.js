import { templates , select } from '../settings.js';
import  utils  from '../utils.js';

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
    if (thisProduct.id % 2 === 0) {
      thisProduct.data.className='left';
    } else {
      thisProduct.data.className='right';
    }
    const generatedHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    /* find menu container */
    const menuContainerPages = document.querySelector(select.containerOf.products);

    /* add element to menu */
    menuContainerPages.appendChild(thisProduct.element);
  }
}


export default Product;