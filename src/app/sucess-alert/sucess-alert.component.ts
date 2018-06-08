import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-alert',
  templateUrl: './sucess-alert.component.html',
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `
  ]
})
export class SucessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
