import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class AgendaService {
	private _basketItems = [];
	products$ = new BehaviorSubject(this._basketItems);

	setProducts(products: any) {
		this.products$.next(products);
	}

	public get getProducts() {
		return this.products$;
	}
}
