import { Injectable } from '@angular/core';
import { PARTICIPANTS } from './participants';

@Injectable({
  providedIn: 'root'
})
export class FakeparticipantService {
  constructor() { }
  get() { return PARTICIPANTS; }
  add(participant) {
    participant.id = PARTICIPANTS.length + 1;
    PARTICIPANTS.push(participant);
  }

  delete(participant) {
    let index;
    index = PARTICIPANTS.indexOf(participant);
    if (PARTICIPANTS.indexOf(participant) >= 0) {
      PARTICIPANTS.splice(index, 1);
    }
  }

  getparticipant(id: number) {
    return PARTICIPANTS[id - 1];
  }

  indexOf(participant){
    for(let i = 0; i<PARTICIPANTS.length; i++)
      if(PARTICIPANTS[i].id == participant.id)
        return i;
    return -1;
  }
}