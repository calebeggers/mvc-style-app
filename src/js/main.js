import $ from "jquery"

import { MainController } from "./main.controller";
import { Contact } from "./classes"


const contactForm = $(".form");
const contactList = $(".contact-list");

let app = new MainController(contactForm, contactList);

app.init();