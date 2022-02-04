import Product from './product.js';
import { settings, classNames, select, article , section, form} from './settings.js';
const app = {
  initPages : function() {

    const links = document.querySelector(select.nav.links).children;

    const articleAbout = document.querySelector(article.about);
    const sectionProduct = document.querySelector(section.product);
    const formContact = document.querySelector(form.contact);

    for (let link of links) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickElement = this;

        articleAbout.classList.remove(classNames.pages.active);
        console.log('!!!', articleAbout);
        sectionProduct.classList.remove(classNames.pages.active);
        console.log('section', sectionProduct);
        formContact.classList.remove(classNames.pages.active);
        console.log('form', formContact);

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
    

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse)  {
        return rawResponse.json();
      })
      .then(function (parsedResponse)  {
        console.log('parsedResponse', parsedResponse);
        
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initMenu: function (){
    const thisApp = this;

    console.log('thisApp.data:', thisApp.data);

    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  init: function() {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    //thisApp.initPages();
    thisApp.initMenu();
  },
};

app.init();
export default app;