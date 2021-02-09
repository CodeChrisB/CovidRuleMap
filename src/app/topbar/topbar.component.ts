import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  submit(){
    this.route.navigate(['oet/submit']);
  }
  gdpr(){
    this.route.navigate(['oet/gdpr']);
  }
  map(){
    this.route.navigate(['oet/map']);
  }


}
