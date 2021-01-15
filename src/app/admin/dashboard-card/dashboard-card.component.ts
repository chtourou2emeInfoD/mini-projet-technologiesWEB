import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  //Attributes
  @Input()
  background_color;

  @Input()
  info;

  @Input()
  nbr;

  @Input()
  imgSrc;

  constructor() { }

  ngOnInit(): void {
  }

}
