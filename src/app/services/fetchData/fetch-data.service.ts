import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FetchDataService {
	constructor(private httpClient: HttpClient) {}

	getFeedBack(): Observable<any> {
		return this.httpClient.get('http://localhost:3000/getfeeds');
	}

	addFeedBack(
		user: string,
		email: string,
		message: string,
		subject: string
	): Observable<any> {
		let params = {
			user: user,
			email: email,
			message: message,
			subject: subject,
		};
		return this.httpClient.get('http://localhost:3000/userdetails', {
			params,
		});
	}

	adminLogin(user: string, pass: string): Observable<any> {
		let params = { user: user, pass: pass };
		return this.httpClient.get('http://localhost:3000/adminlogin', {
			params,
		});
	}
}
