import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  viewMode  :any;
  constructor() { }

  ngOnInit(): void {
    this.viewMode = "tab1";
    console.log(this.viewMode);
  }

}
