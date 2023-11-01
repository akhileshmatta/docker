import { Router } from '@angular/router';
import { FetchDataService } from '../services/fetchData/fetch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fetchData: FetchDataService, private router: Router) { }

  ngOnInit(): void {
  }

  isAdmin(data: any) {
    this.fetchData.adminLogin(data.username, data.password).subscribe(result => {
		console.log(result)
      if (result) {
        this.router.navigateByUrl('/displayresults')
      }
    })
  }

}
