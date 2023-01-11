import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: NoPageFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		PagesRoutingModule,
		AuthRoutingModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
