import $ from "jquery"

class Contact {
	constructor (name, phone, location) {
	  this.name = name;
	  this.phone = phone;
	  this.location = location;
	}
}

export { Contact }