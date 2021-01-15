import { Component, OnInit } from '@angular/core';
import { FORMATEURS } from '../formateurs';
import { PARTICIPANTS } from '../participants';
import { SESSIONITEMS } from '../sessions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbrFromateurs = FORMATEURS.length;
  nbrParticipants = PARTICIPANTS.length;
  nbrSessions = SESSIONITEMS.length;
  constructor() { }

  ngOnInit(): void {
  }

}
