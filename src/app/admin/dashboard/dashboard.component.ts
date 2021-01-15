import { isNgTemplate } from '@angular/compiler';
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
  nbrSessionsTab = [];
  constructor() { 
    
  }

  getTrackCount(track){
    return SESSIONITEMS.filter(item => item.track === track).length;
  }

  getTopFormateurs(){
    if(FORMATEURS.length>1)
      return [FORMATEURS[0],FORMATEURS[1]];
    else if(FORMATEURS.length == 1)
      return [FORMATEURS[0]];
    return []
  }

  ngOnInit(): void {
  }

}
