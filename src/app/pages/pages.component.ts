import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: [ './pages.component.scss' ],
})
export class PagesComponent {
	constructor(
		private themeService: NbThemeService,
	) {
		this.themeService.changeTheme('default');
	}
}
