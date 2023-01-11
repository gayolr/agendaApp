import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from '../../services/agenda.service';

@Component({
	selector: 'agenda-list',
	templateUrl: './agenda-list.component.html',
	styleUrls: ['./agenda-list.component.scss'],
	providers: [AgendaService]
})
export class AgendaListComponent implements OnInit {
	contacts: any;
	agendaItems: any = [];
	constructor(public router: Router, public agendaService: AgendaService) {}
	ngOnInit() {
		/* localStorage.setItem('agenda', JSON.stringify(agenda)); */
	}

	addContact(contact: number) {
		/* this.agendaItems.push(
			this.contacts.find(
				(basketItem: { sku: number }) => basketItem.sku === sku
			)
		);
		this.contacts.find(
			(basketItem: { sku: number }) => basketItem.sku === sku
		).basketLimit -= 1; */
	}

	removeContact(contact: number) {
		let products = [];
		products = JSON.parse(localStorage.getItem('products') as any);
		/* this.contacts.find(
			(producItem: { sku: number }) => producItem.sku === sku
		).basketLimit = products.find(
			(basketItem: { sku: number }) => basketItem.sku === sku
		).basketLimit;
		this.agendaItems = this.agendaItems.filter(
			(basket: { sku: number }) => basket.sku !== sku
		); */
	}

	goHome() {
		this.router.navigateByUrl('');
	}
}
