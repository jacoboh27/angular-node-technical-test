import { Component, OnInit } from '@angular/core';

declare var $:any;
declare function HOMEINITTEMPLATE([]):any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      HOMEINITTEMPLATE($);
    }, 50);
  }
}
