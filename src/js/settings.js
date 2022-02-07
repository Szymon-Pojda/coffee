export const select = {
  templateOf: {
    productList: '#template-product-widget',
    contactPage: '#template-contact-widget', 
   
  },
  containerOf: {
    products: '.products .container',
    cart: '#cart',
    pages: '#pages',
    contact: '.contact .container',
    //booking: '.booking-wrapper',
  },

  nav: {
    links: '.main-nav a',
  },
};

export const article = {
  products: '#article-product',
};

export const section = {
  about: '#section-about',
};

export const form = {
  contact: '#form-contact'
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    contact: 'contact',
  }
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};