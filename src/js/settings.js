export const select = {
  templateOf: {
    //menuProduct: '#template-menu-product',
    //cartProduct: '#template-cart-product', // CODE ADDED
    productList: '#template-product-widget',
  },
  containerOf: {
    //menu: '#product-list',
    cart: '#cart',
    pages: '#pages',
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
    url: '//localhost:3131',
    products: 'products',
  }
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
};