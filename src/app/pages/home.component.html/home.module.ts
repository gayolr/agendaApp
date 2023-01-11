import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule,
      NbCardModule,
      NbButtonModule,
      RouterModule,
		NbLayoutModule,
	],
	declarations: [HomeComponent],
	exports: [],
	providers: [],
})
export class HomeModule {}
