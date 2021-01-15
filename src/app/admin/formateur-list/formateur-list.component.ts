import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrls: ['./formateur-list.component.css']
})
export class FormateurListComponent implements OnInit {
  //Attributes
  formateurs: any;
  modifierClicked = false;
  newFormateurCreated = false;
  tempFormateur: Formateur;

  constructor(private formateurService: FakeformateurService) { }

  ngOnInit(): void {
    this.formateurs = this.formateurService.get();
    this.tempFormateur = new Formateur(-1,"","","","","");
  }

  onDelete(formateur:Formateur){
    this.formateurService.delete(formateur);
  }

  onModifyClicked(formateur:Formateur){
    this.modifierClicked = !this.modifierClicked;
    this.tempFormateur.nom = formateur.nom;
    this.tempFormateur.prenom = formateur.prenom;
    this.tempFormateur.adresse = formateur.adresse;
    this.tempFormateur.expertise = formateur.expertise;
    this.tempFormateur.id = formateur.id;
    this.tempFormateur.email = formateur.email;
  }

  onSubmit(formateur : Formateur){
    this.modifierClicked = !this.modifierClicked;
    let index = this.formateurService.indexOf(this.tempFormateur);
    let temp = this.formateurs[index];
    temp.nom = this.tempFormateur.nom;
    temp.prenom = this.tempFormateur.prenom;
    temp.adresse = this.tempFormateur.adresse;
    temp.expertise = this.tempFormateur.expertise;
    temp.id = this.tempFormateur.id;
    temp.email = this.tempFormateur.email;
    this.newFormateurCreated = false;
  }

  onAdd(){
    let temp = new Formateur(this.formateurs.length+1,"","","","","");
    this.newFormateurCreated = true;
    this.formateurService.add(temp);
    this.onModifyClicked(temp);
  }

  onAnnuler(){
    if(this.newFormateurCreated){
      this.formateurService.delete(this.formateurService.getFormateur(this.formateurs.length));
      this.newFormateurCreated = false;
    }
    this.modifierClicked = !this.modifierClicked;
  }

}
