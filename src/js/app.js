import Product from './product.js';
import { settings, classNames, select, article , section, form} from './settings.js';
const app = {
  initPages : function() {

    const links = document.querySelectorAll(select.nav.links);

    const articleAbout = document.querySelector(article.about);
    const sectionProduct = document.querySelector(section.product);
    const formContact = document.querySelector(form.contact);

    for (let link of links) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickElement = this;

        articleAbout.classList.remove(classNames.pages.active);
        console.log(articleAbout);
        sectionProduct.classList.remove(classNames.pages.active);
        console.log(sectionProduct);
        formContact.classList.remove(classNames.pages.active);
        console.log(formContact);

        const href = clickElement.getAttribute('href');

        if (href == '#home') {
          articleAbout.classList.add(classNames.pages.active);
        } if (href == '#products') {
          sectionProduct.classList.add(classNames.pages.active);
        } if (href == '#contact') {
          formContact.classList.add(classNames.pages.active);
        }
      });
    }
  },
    

  initData: function() {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse)  {
        return rawResponse.json();
      })
      .then(function (parsedResponse)  {
        this.data.products = parsedResponse;
        thisApp.initMenu();
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initMenu: function (){
    const thisApp = this;
    for(let productData in thisApp.data.product){
      new Product(thisApp.data.product[productData], this.data.product[productData]);
    }
  },

  init: function() {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
  },
};

app.init();
export default app;