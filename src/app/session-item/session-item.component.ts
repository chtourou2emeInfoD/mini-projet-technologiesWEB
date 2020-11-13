import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
//name = "Formation Mobile";
@Input() name: string;
alignement = "right";
couleur = "red";
  constructor() { }

  ngOnInit(): void {
  }

}
