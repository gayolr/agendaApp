import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public formSubmitted = false;
	public auth2: any;

	public loginForm = this.fb.group({
		email: [
			localStorage.getItem('email') || '',
			[Validators.required, Validators.email]
		],
		password: ['', Validators.required],
		remember: [false]
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}
}
