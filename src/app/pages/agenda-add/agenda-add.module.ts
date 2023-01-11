import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { AgendaAddComponent } from './agenda-add.component';

@NgModule({
	declarations: [AgendaAddComponent],
	imports: [
		CommonModule,
		NbIconModule,
		NbInputModule,
		ReactiveFormsModule,
		NbLayoutModule,
		CommonModule,
      NbCardModule,
      NbButtonModule,
		NbLayoutModule,
		NbActionsModule
	],
})
export class AgendaAddModule { }
