import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { AgendaListComponent } from './agenda-list.component';

@NgModule({
	declarations: [AgendaListComponent],
	imports: [
		CommonModule,
		NbIconModule,
		NbLayoutModule,
		CommonModule,
      NbCardModule,
      NbButtonModule,
		NbLayoutModule,
		NbActionsModule
	],
})
export class AgendaListModule { }
