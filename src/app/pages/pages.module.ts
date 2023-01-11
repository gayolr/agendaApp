import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { AgendaListModule } from './agenda-list/agenda-list.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home.component.html/home.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
      AgendaListModule,
      RouterModule,
      HomeModule,
      PagesRoutingModule,
		ReactiveFormsModule,
		NbLayoutModule,
	],
	declarations: [PagesComponent],
	exports: [],
	providers: [],
})
export class PagesModule {}
