import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	NbThemeModule,
	NbDatepickerModule,
	NbToastrModule,
	NbDialogModule,
	NbGlobalLogicalPosition,
	NbMenuModule,
	NbAlertModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './pages/pages.module';
@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		PagesModule,
		NbEvaIconsModule,
		NbAlertModule,
		NbThemeModule.forRoot({ name: 'default' }),
		NbDatepickerModule.forRoot(),
		NbToastrModule.forRoot({
			position: NbGlobalLogicalPosition.BOTTOM_END,
			toastClass: 'toast-close'
		}),
		NbDialogModule.forRoot(),
		NbMenuModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
