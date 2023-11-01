import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home = () => this.router.navigateByUrl('/home');
  about = () => this.router.navigateByUrl('/about');
  contact = () => this.router.navigateByUrl('/contact');
  //equipment = () => this.router.navigateByUrl('/equipment');
  consulting = () => this.router.navigateByUrl('/consulting');
  training = () => this.router.navigateByUrl('/training');
  //management = () => this.router.navigateByUrl('/management');

}
