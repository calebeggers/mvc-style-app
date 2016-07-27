import { Contact } from "./classes"
import $ from "jquery"

class MainController {
	constructor (form, container) {
		this.form = form;
		this.container = container;
	}

	init () {
		this.formSubmit();
	}

	addContact (name, phone, location) {
		let contact = new Contact (name, phone, location);
		let contactHTML = this.contactTemplate(contact);

		this.container.append(contactHTML);
	}

	contactTemplate (contact) {
		return `
		<div class="single-contact">
			<img src="./images/placeholder-photo.png">
			<div class="single-contact-name">${contact.name}</div>
			<div class="single-contact-phone">${contact.phone}</div>
			<div class="single-contact-location">${contact.location}</div>
		</div>`
	}

	formSubmit () {
		this.form.on('submit', (e) => {
			e.preventDefault();
			
			let name = $(".name").val();
			let phone = $(".phone").val();
			let location = $(".location").val();

			this.addContact(name, phone, location);
		});
	}
};

export { MainController };
