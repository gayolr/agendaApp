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


}
