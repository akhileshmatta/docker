import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetchData/fetch-data.service';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

	constructor(private db: FetchDataService) {}

	ngOnInit(): void {}

	opensweetalert() {
		Swal.fire('Message Sent', "We will Reach Out To You Soon", "success")
	  }

	  closesweetalert(val: any) {
		Swal.fire('Message Not Sent', "Enter " + val + " feild", "warning")
	  }

		validateForm(data: any) {
		  for (let [key, value] of Object.entries(data)) {
			if (!value) {
			  this.closesweetalert(key);
			  // window.alert(`enter valid data in ${key} field`);
			  return false;
			}
		  }
		  return true;
		}

		addDetails(data: any) {
		  if (!this.validateForm(data)) {
		  //this.closesweetalert();
		  return;
		}
		else{
			this.opensweetalert();
		}

		this.db
			.addFeedBack(data.user, data.email, data.message, data.subject)
			.subscribe((dt) => {
				console.log(dt);
			});

		}


	// addDetails(data: any) {
	// 	this.db
	// 		.addFeedBack(data.user, data.email, data.message, data.subject)
	// 		.subscribe((dt) => {
	// 			console.log(dt);
	// 		});
	// }
}
