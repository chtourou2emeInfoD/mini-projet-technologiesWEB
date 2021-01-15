import { Injectable } from '@angular/core';
import { FORMATEURS } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FakeformateurService {
  constructor() { }
  get() { return FORMATEURS; }
  add(formateur) {
    formateur.id = FORMATEURS.length + 1;
    FORMATEURS.push(formateur);
  }

  delete(formateur) {
    let index;
    index = FORMATEURS.indexOf(formateur);
    if (FORMATEURS.indexOf(formateur) >= 0) {
      FORMATEURS.splice(index, 1);
    }
  }

  getFormateur(id: number) {
    return FORMATEURS[id - 1];
  }

  indexOf(formateur){
    for(let i = 0; i<FORMATEURS.length; i++)
      if(FORMATEURS[i].id == formateur.id)
        return i;
    return -1;
  }
}