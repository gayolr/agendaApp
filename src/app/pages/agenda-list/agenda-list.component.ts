import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact.interface';
import { AgendaService } from '../../services/agenda.service';

@Component({
	selector: 'agenda-list',
	templateUrl: './agenda-list.component.html',
	styleUrls: ['./agenda-list.component.scss'],
	providers: [AgendaService]
})
export class AgendaListComponent implements OnInit {
	contacts: Contact[] = [];
	constructor(public router: Router, public agendaService: AgendaService) {}
	ngOnInit() {
		this.contacts = JSON.parse(localStorage.getItem('agenda') as any);
	}

	removeContact(phone: number) {
		const contactIndex = this.contacts.findIndex(item => item.phone === phone);
		this.contacts.splice(contactIndex, 1);
		localStorage.setItem('agenda', JSON.stringify(this.contacts));
	}

	updateAgenda() {}

	goHome() {
		this.router.navigateByUrl('');
	}
}
