import { templates } from '../settings.js'; 

class Contact {
  constructor(element) {
    const thisContact = this;
    thisContact.render(element);
  }


  render(element) {
    const thisContact = this;

    /* generate HTML based on template */
    const generatedHTML = templates.contactPage();

    /* empty object thisBooking.dom */
    thisContact.dom = {};

    /* add wrapper to thisBooking*/
    thisContact.dom.wrapper = element;

    /* generated HTML to wrapper.innerHTML*/
    thisContact.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Contact;
