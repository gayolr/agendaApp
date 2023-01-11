import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component.html/home.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guards';
import { AgendaAddComponent } from './agenda-add/agenda-add.component';

const routes: Routes = [
	{
		path: 'home',
		component: PagesComponent,
		canActivate: [ AuthGuard ],
		children: [
			{ path: '', component: HomeComponent, children: [
				{ path: 'list', component: AgendaListComponent },
				{ path: 'add', component: AgendaAddComponent }
			] },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
