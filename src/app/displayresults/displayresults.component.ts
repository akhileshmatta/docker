import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetchData/fetch-data.service';

@Component({
	selector: 'app-displayresults',
	templateUrl: './displayresults.component.html',
	styleUrls: ['./displayresults.component.css'],
})
export class DisplayresultsComponent implements OnInit {
	constructor(private db: FetchDataService) {}

	ngOnInit(): void {
		this.getUserInformation();
	}

	user_details: any;

	getUserInformation() {
		this.db.getFeedBack().subscribe((dt) => {
			if (dt.length === 0) {
				window.alert('invalid');
			} else {
				this.user_details = dt;
				//console.log(this.user_details);
			}
		})
	}
}
