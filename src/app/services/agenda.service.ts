import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AgendaService {
	private _agendaItems = [];
	contacts$ = new BehaviorSubject(this._agendaItems);

	setContacts(contacts: any) {
		this.contacts$.next(contacts);
	}

	public get getContacts() {
		return this.contacts$;
	}
}
