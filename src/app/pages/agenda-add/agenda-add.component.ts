import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact.interface';
import { AgendaService } from '../../services/agenda.service';

@Component({
	selector: 'agenda-add',
	templateUrl: './agenda-add.component.html',
	styleUrls: ['./agenda-add.component.scss'],
	providers: [AgendaService]
})
export class AgendaAddComponent implements OnInit {
	agendaItems: Contact[] = [];

	contactForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
		organization: new FormControl('')
	});

	constructor(public router: Router, public agendaService: AgendaService) {}
	ngOnInit() {}

	addContact(contact: Contact) {
		let existContact = false;
		if (this.agendaItems.length) {
			existContact = this.agendaItems.some(
				item => item.phone === contact.phone
			);
		}
		if (!existContact) {
			this.agendaItems.push(contact);
			localStorage.setItem('agenda', JSON.stringify(this.agendaItems));
			this.contactForm.reset();
		}
	}

	submitForm() {
		if (this.contactForm.invalid) {
			return;
		}
		this.addContact(this.contactForm.value);
	}
}
