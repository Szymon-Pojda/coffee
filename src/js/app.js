import Contact from './components/contact.js';
import Product from './components/product.js';
import { settings, classNames, select, article, section, form } from './settings.js';


const app = {
  initPages: function () {
    const thisApp = this;

    const links = document.querySelector(select.nav.links).children;

    const articleAbout = document.querySelector(article.about);
    const sectionProduct = document.querySelector(section.product);
    const formContact = document.querySelector(form.contact);

    const idFromHash = window.location.hash.replace('#/', '');
    //console.log('idFromHash', idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    //console.log('pageMatchingHash', pageMatchingHash);
    thisApp.activetePage(pageMatchingHash);

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

  activetePage: function (pageId) {
    const thisApp = this;

    /* add class "active" tomatching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      // if(page.id == padeId){
      //  page.classList.add(classNames.pages.active);
      //  } else{
      //  page.classList.remove(classNames.pages.active);
      //}

      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" tomatching links, remove from non-matching */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }

    for (let link of thisApp.Home) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }

  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        //console.log('parsedResponse', parsedResponse);

        /* save parsedResponse as thisApp.data.products*/
        thisApp.data.products = parsedResponse;
        /* execute initMenu method */
        thisApp.initMenu();
      });

    //console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initMenu: function () {
    const thisApp = this;

    console.log('thisApp.data:', thisApp.data);

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initContact: function () {
    const thisApp = this;
    const contactPage = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactPage);
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
    thisApp.initMenu();
    thisApp.initContact();
  },
};

app.init();
export default app;